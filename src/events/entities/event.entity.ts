import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['type', 'name'])
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
