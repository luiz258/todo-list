import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todo.entity";
import { ObjectId, Repository } from "typeorm";
import { CreateTodoDto } from "./todo.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoRepository {
    constructor(@InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>) {}
  
    
    saveTask(createTodo: CreateTodoDto): Promise<TodoEntity> {
        const todo = new TodoEntity();
        todo.nameTask = createTodo.nameTask;
        todo.description = createTodo.description;
        todo.statusTask = 'Não Inciada';
    
        return this.todoRepository.save(todo);
    }

    async findAll(): Promise<TodoEntity[]> {
        return this.todoRepository.find();
    }

    findOne(id: ObjectId): Promise<TodoEntity> {
        return this.todoRepository.findOneBy({ id: id });
      }
    
      async remove(id: ObjectId): Promise<void> {
        await this.todoRepository.delete(id);
      }
    
  }
  