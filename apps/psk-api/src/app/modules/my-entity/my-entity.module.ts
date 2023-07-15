import { Module } from '@nestjs/common'
import { MyEntityService } from './my-entity.service'
import { MyEntityController } from './my-entity.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  controllers: [MyEntityController],
  providers: [MyEntityService],
  imports: [
    PrismaModule,
    ConfigModule,
  ],
})
export class MyEntityModule {}
