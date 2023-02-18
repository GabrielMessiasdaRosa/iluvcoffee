import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
// the @Module() decorator is a function that accepts a single argument which is a metadata object
// the metadata object is used to provide additional information about the module
@Module({
  // the imports array is used to import other modules
  imports: [
    CoffeesModule,
    // TypeOrmModule.forRoot() is a static method that accepts a single argument which is a configuration object
    // the configuration object is used to configure the TypeORM module
    // forRoot() is a convenience method that will automatically create a new connection to the database
    TypeOrmModule.forRoot({
      // the type property is used to define the database type
      type: 'postgres',
      // the host property is used to define the database host
      host: 'localhost',
      // the port property is used to define the database port
      port: 5432,
      // the username property is used to define the database username
      username: 'postgres',
      // the password property is used to define the database password
      password: 'pass123',
      // the database property is used to define the database name
      database: 'postgres',
      // the autoLoadEntities property is used to automatically load entities
      autoLoadEntities: true,
      // the synchronize property is used to automatically synchronize the database schema with the entities
      // this is only recommended for development
      // in production, you should use migrations instead
      synchronize: true,
    }),
  ],
  // the controllers array is used to define the controllers of the module
  controllers: [AppController],
  // the providers array is used to define the providers of the module
  providers: [AppService],
})
export class AppModule {}
