import { Injectable, Logger } from '@nestjs/common'
import { PskOpenAIUtils } from '@psk/shared/data-access/openai-tools'
import { OpenAI } from 'openai'
import { AssistantMessageRequestDto } from './dto/assistant-request.dto'
import { AssistantMessageResponseDto } from './dto/assistant-response.dto'

@Injectable()
export class AssistantService {

  initAiService(openAiApiKey: string): OpenAI {
    return new OpenAI({ apiKey: openAiApiKey })
  }

  async message(request: AssistantMessageRequestDto): Promise<AssistantMessageResponseDto> {
    const openAiService: OpenAI = this.initAiService(request.openAiApiKey)
    const thread = await openAiService.beta.threads.create()
    await openAiService.beta.threads.messages.create(
      thread.id,
      {
        role: 'user',
        content: request.message,
      }
    )
    const run = await openAiService.beta.threads.runs.create(
      thread.id,
      { 
        assistant_id: request.openAiAssistantId,
      }
    )
    // check the run status
    await this.queryRunStatus(openAiService, thread.id, run.id)
    // if the run is complete, get the response
    const threadMessagesPage = await openAiService.beta.threads.messages.list(
      thread.id
    )
    const response = PskOpenAIUtils.getTextMessageFromThread(threadMessagesPage)
    // Logger.log(JSON.stringify(threadMessagesPage, null, 2))
    Logger.log(`Run with ID ${thread.id} in thread with ID ${run.id} has response: ${JSON.stringify(response, null, 2)}`)
    return {
      messageId: response.messageId,
      message: response.message.text.value,
    }
  }

  /**
   * Check the status of the run.
   * @returns the run object
   */
  async getRunStatus(openAiService: OpenAI, threadId: string, runId: string): Promise<OpenAI.Beta.Threads.Runs.Run> {
    const runStatus = await openAiService.beta.threads.runs.retrieve(
      threadId,
      runId
    )
    Logger.log(`Run with ID "${runId}" in thread with ID "${threadId}" has status: ${runStatus.status}`)
    return runStatus
  }

  /**
   * Write a loop method to check the status of the run.
   * If the run is complete, return the response.
   * If the run is not complete, wait 1 second and check again,
   * and provide a method parameter to limit the number of checks.
   * If the run is not complete after the limit, return an error message.
   * @returns the run object if status is completed
   */
  async queryRunStatus(openAiService: OpenAI, threadId: string, runId: string, maxRetries = 10) {
    let count = 0
    let runStatus: OpenAI.Beta.Threads.Runs.Run
    while (count < maxRetries) {
      runStatus = await this.getRunStatus(openAiService, threadId, runId)
      if (runStatus.status === 'completed') {
        return runStatus
      }
      count++
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    Logger.error(`Run status: ${runStatus.status} after ${maxRetries} checks.`)
  }

}
