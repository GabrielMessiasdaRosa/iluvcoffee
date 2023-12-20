import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

// to use the ApiKeyGuard guard, we need to add it to the providers array of the CommonModule and add the APP_GUARD provider
// to the providers array of the CommonModule and set the useClass property of the APP_GUARD provider to the ApiKeyGuard guard

@Module({
  imports: [ConfigModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
// to use the LoggingMiddleware middleware, we need to add it to the providers array of the CommonModule and add the APP_GUARD provider
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes({ path: 'coffees', method: RequestMethod.GET }); // apply the LoggingMiddleware middleware to the coffees route
  }
}
