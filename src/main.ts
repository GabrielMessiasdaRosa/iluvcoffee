import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove all the properties that are not in the DTO
    forbidNonWhitelisted: true, // throw an error if a property that is not in the DTO is sent
    transform: true, // transform the data to the type of the DTO
  }));
  await app.listen(8080);
}
bootstrap();
