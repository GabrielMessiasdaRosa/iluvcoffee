import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';
// an entity is a class that represents a table in the database
@Entity()
// do not add "entity" to the end of the name of the class
export class Flavor {
  // to set a primary key, use the @PrimaryGeneratedColumn() decorator
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // to set a column, use the @Column() decorator
  @Column()
  name: string;
  // the @ManyToMany() decorator is used to define a many-to-many relationship between the Flavor and Coffee entities
  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
