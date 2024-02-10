import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AssistantService } from './assistant.service'
import { AssistantMessageRequestDto } from './dto/assistant-request.dto'

@ApiTags('assistant')
@Controller('assistant')
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) {}

  @Post('message')
  async message(@Body() assistantMessageRequestDto: AssistantMessageRequestDto) {
    const created = await this.assistantService.message(assistantMessageRequestDto)
    return created
  }
}
