import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

// this is the entity that represents the event table in the database (the table that stores the events) and it is used to create a table in the database and to create a class that represents the table in the application

@Index(['name', 'type']) // 👈 multiple column index
@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
