import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { TimeoutInterceptor } from './common/interceptors/timeout/timeout.interceptor';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response/wrap-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove all the properties that are not in the DTO
      forbidNonWhitelisted: true, // throw an error if a property that is not in the DTO is sent
      transform: true, // transform the data to the type of the DTO
      transformOptions: {
        enableImplicitConversion: true, // transform the data to the type of the DTO
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new WrapResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  await app.listen(8080);
}
bootstrap();
