import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { TodoEntity } from './todo.entity';
import { ObjectId } from 'typeorm';
import { CreateTodoDto } from './todo.dto';

@Controller()
export class TodoController {
  constructor(
    private readonly todoRepository: TodoRepository
  ) {}

  @Get('todo/getAllTask')
  getTask(): Promise<TodoEntity[]>  {
    return this.todoRepository.findAll();
  }

  @Get('todo/getTaskById')
  getTaskById(@Param('id') id: ObjectId): Promise<TodoEntity>  {
    return this.todoRepository.findOne(id);
  }

  @Delete('todo/:id')
  remove(@Param('id') id: ObjectId): Promise<void> {
    return this.todoRepository.remove(id);
  }

  @Post('todo/createTask')
  create(@Body() createUserDto: CreateTodoDto): Promise<TodoEntity> {
    return this.todoRepository.saveTask(createUserDto);
  }
}
