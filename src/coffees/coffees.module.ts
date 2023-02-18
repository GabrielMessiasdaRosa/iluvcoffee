import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity.ts';
// comand to generate a module: nest g mo <name of module>
@Module({
  // the @Module() decorator is a function that accepts a single argument which is a metadata object
  // the metadata object is used to provide additional information about the module

  // the exports array is used to export the providers of the module
  exports: [],
  // the imports array is used to import other modules
  // the forFeature() method is a static method that accepts a single argument which is an array of entities
  // the forFeature() method is used to register entities with the module
  // TypeOrmModule.forFeature() is a convenience method that will automatically create a new connection to the database
  // in production, you should use migrations instead
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  // the controllers array is used to define the controllers of the module
  controllers: [CoffeesController],
  // the providers array is used to define the providers of the module
  providers: [CoffeesService],
})
export class CoffeesModule {}
