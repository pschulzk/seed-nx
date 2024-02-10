import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from '../prisma/prisma.module'
import { AssistantController } from './assistant.controller'
import { AssistantService } from './assistant.service'

@Module({
  controllers: [AssistantController],
  providers: [AssistantService],
  imports: [
    PrismaModule,
    ConfigModule,
  ],
})
export class AssistantModule {}
