import { Coffee } from 'src/coffees/entities/coffees.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { DataSource } from 'typeorm';

// this file is used to store the configuration of the database (database type, host, port, username, password, database name, entities, migrations, etc.)
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: ['dist/migrations/*{.ts,.js}'],
});
