import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import configuration from '../config/configuration'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MyEntityModule } from './modules/my-entity/my-entity.module'
import { PrismaService } from './modules/prisma/prisma.service'
import { PrismaCrudModule } from 'nestjs-prisma-crud'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaCrudModule.register({
      prismaService: PrismaService,
    }),
    MyEntityModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
