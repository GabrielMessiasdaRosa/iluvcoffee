import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity.ts';
import { CoffeeRefactor1676684917304 } from 'src/migrations/1676684917304-CoffeeRefactor';
import { SchemaSync1676687604720 } from 'src/migrations/1676687604720-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1676684917304, SchemaSync1676687604720],
});
