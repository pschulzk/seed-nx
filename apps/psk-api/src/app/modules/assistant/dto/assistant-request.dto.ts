import { ApiProperty } from '@nestjs/swagger'

export class AssistantMessageRequestDto {
  @ApiProperty()
    openAiApiKey: string
  @ApiProperty()
    openAiAssistantId: string
  @ApiProperty()
    message: string
}
