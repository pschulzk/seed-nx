import { ApiProperty } from '@nestjs/swagger'

export class AssistantMessageResponseDto {
  @ApiProperty()
    messageId: string
  @ApiProperty()
    message: string
}
