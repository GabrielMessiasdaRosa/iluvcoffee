import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

// this is the entity that represents the coffee table in the database (the table that stores the coffees) and it is used to create a table in the database and to create a class that represents the table in the application


@Index(['name']) // 👈 multiple column index
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  recommendations: number;

  @Column({ nullable: true })
  description: string;

  // @Index() // 👈 indexing is optional, but it's recommended if you have a lot of data
  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // ['insert']
  })
  flavors: Flavor[];
}
