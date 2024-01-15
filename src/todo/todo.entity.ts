import { Column, Entity, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  nameTask: string;

  @Column()
  description: string;

  @Column()
  statusTask: string;
}