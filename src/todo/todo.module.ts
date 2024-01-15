import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoRepository],
  controllers: [TodoController],
})
export class TodoModule {}