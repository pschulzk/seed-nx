import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private logger = new Logger(PrismaService.name)
  async onModuleInit() {
    this.$use(async (params, next) => {
      const before = Date.now()
      const result = await next(params)
      const after = Date.now()
      this.logger.verbose(`Query ${params.model}.${params.action} took ${after - before}ms`)
      return result
    })
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}
