import { OpenAI } from 'openai'

export class PskOpenAIUtils {
  public static getTextMessageFromThread(
    threadMessagesPage: OpenAI.Beta.Threads.Messages.ThreadMessagesPage,
    opts: {
      messageIndex?: number,
    } = { messageIndex: 0},
  ): { messageId: string, message: OpenAI.Beta.Threads.Messages.MessageContentText } {
    const messageContents =  threadMessagesPage.data[opts.messageIndex].content
    // get message from content of type 'text'
    const messageId = threadMessagesPage.data[opts.messageIndex].id
    const message = messageContents.find((content: any) => content.type === 'text') as OpenAI.Beta.Threads.Messages.MessageContentText | undefined
    if (message) {
      return { messageId, message }
    } else {
      throw new Error('No message found in thread.');
    }
  }

  public static getImageMessageFromThread(
    threadMessagesPage: OpenAI.Beta.Threads.Messages.ThreadMessagesPage,
    opts: {
      messageIndex?: number,
    } = { messageIndex: 0},
  ): { messageId: string, message: OpenAI.Beta.Threads.Messages.MessageContentImageFile } {
    const messageContents =  threadMessagesPage.data[opts.messageIndex].content
    // get message from content of type 'text'
    const messageId = threadMessagesPage.data[opts.messageIndex].id
    const message = messageContents.find((content: any) => content.type === 'image_file') as OpenAI.Beta.Threads.Messages.MessageContentImageFile | undefined
    if (message) {
      return { messageId, message }
    } else {
      throw new Error('No message found in thread.');
    }
  }
}