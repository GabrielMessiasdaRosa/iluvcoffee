import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Type } from 'class-transformer';
import { Coffee } from './coffees.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    controllers: [CoffeesController],
    providers: [CoffeesService],
})
export class CoffeesModule {}
