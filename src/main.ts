import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// core of the application is the bootstrap function which is responsible for creating the Nest application instance
async function bootstrap() {
  // create an instance of the Nest application by calling the NestFactory.create() method
  // the create() method accepts a single argument which is the root module of the application
  // the root module is the AppModule class
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // the application instance is then used to start the HTTP server by calling the listen() method
  await app.listen(3000);
}
// the bootstrap() function is called to start the application
bootstrap();
