import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';

// to use the ApiKeyGuard guard, we need to add it to the providers array of the CommonModule and add the APP_GUARD provider 
// to the providers array of the CommonModule and set the useClass property of the APP_GUARD provider to the ApiKeyGuard guard

@Module({
  imports: [ConfigModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
export class CommonModule {}
