import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import MES_API_ROOT from "@libs/common/mesApiRoot";
import { writeFileSync } from 'fs';
import AppModule from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: process.env.PROJECT_CORS_URL },
  });
  const globalPrefix = MES_API_ROOT;
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PROJECT_PORT || 3000;
  app.set('trust proxy', true);

  app.use(helmet());


  if (process.env.NODE_ENV === 'development') {

    const swaggerConfig = new DocumentBuilder()
      .setTitle('mes-api')
      .setDescription('Test API for mes')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    writeFileSync('./swagger-spec.json', JSON.stringify(swaggerDocument));
    SwaggerModule.setup('/docs', app, swaggerDocument);
  }

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap().catch((e) => Logger.log(e));
