/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import fs from 'fs'
import path from 'path'
import { version } from '../../../package.json'

import { AppModule } from './app/app.module'

const globalPrefix = 'api'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  app.enableShutdownHooks()

  app.setGlobalPrefix(globalPrefix)

  const options = new DocumentBuilder()
    .setTitle('PSK Seed Nx')
    .setDescription('API documentation ')
    .setVersion(version)
    // .addTag('entity')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api/docs', app, document)
  // write OpenAPI to file system
  if (process.env.NODE_ENV !== 'production') {
    // the folder is located within /dist/apps/{APP_NAME}
    const PATH = __dirname + '/api-swagger-spec.json'
    fs.writeFileSync(path.resolve(PATH), JSON.stringify(document))
  }

  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
