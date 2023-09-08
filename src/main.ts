// Application's entry point. Initialize Nest App instance here
// This file listens to App Module before creating app instance 

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  })); // enforces validation roles for incoming payloads; 
  await app.listen(3000);
}
bootstrap();
