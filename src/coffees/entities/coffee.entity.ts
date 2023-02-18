// a entity is a class that represents a table in the database

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity.ts';

// the @Entity() decorator is a function that accepts a single argument which is a metadata object
// the metadata object is used to provide additional information about the entity
@Entity()
// the Coffee class represents the coffees table in the database
// sql table === 'coffees'
export class Coffee {
  // to set a primary key, use the @PrimaryGeneratedColumn() decorator
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // to set a column, use the @Column() decorator
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;
  // to set a column as an array, use the @Column() decorator with the type 'simple-array'
  // the @Column() decorator accepts a second argument which is a metadata object
  // the metadata object is used to provide additional information about the column
  // the metadata object accepts a single property called nullable
  // the nullable property is used to define whether the column can be null
  // @Column('simple-array', { nullable: true })
  @Column({ default: 0 })
  recommendations: number;

  // @JoinTable() is a decorator that is used to define the join table
  @JoinTable()
  // @ManyToMany() is a decorator that is used to define a many-to-many relationship
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // cascade: true is used to automatically save related entities when the parent entity is saved
  })
  flavors: Flavor[];
}
