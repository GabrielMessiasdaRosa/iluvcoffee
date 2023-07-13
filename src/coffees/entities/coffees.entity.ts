import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Index(['name', 'brand']) // 👈 multiple column index
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  recommendations: number;

  // @Index() // 👈 indexing is optional, but it's recommended if you have a lot of data
  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // ['insert']
  })
  flavors: Flavor[];
}
