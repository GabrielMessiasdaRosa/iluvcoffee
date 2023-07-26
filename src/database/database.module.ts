import { DynamicModule, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

// this module is used to create a dynamic module that can be used to connect to a database (in this case, a Postgres database) and to create a connection to the database
// to create a dynamic module, we need to create a class annotated with the @Module() decorator and export it
// the @Module() decorator takes one argument, the metadata object of the module
// the metadata object of the module has the following properties:
// 1. imports - an array of modules that need to be imported in the module
// 2. controllers - an array of controllers that need to be imported in the module
// 3. providers - an array of providers that need to be imported in the module
// 4. exports - an array of providers that need to be exported from the module

@Module({})
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options).initialize(),
        },
      ],
    };
  }
}
