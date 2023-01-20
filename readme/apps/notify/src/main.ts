/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe  } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { getRabbitMqConfig } from '../config/rabbitmq.config';

const DEFAULT_PORT = 3333;
const GLOBAL_PREFIX = 'api';
const PORT = process.env.PORT || DEFAULT_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  app.connectMicroservice(getRabbitMqConfig(configService));

  await app.startAllMicroservices();
  Logger.log(`🚀 Notify service is running on`);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(PORT);
  Logger.log(
    `🚀 REST is running on: http://localhost:${PORT}/${GLOBAL_PREFIX}`
  );
}

bootstrap();
