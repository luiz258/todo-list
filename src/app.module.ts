import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/todo.entity';
import { TodoController } from './todo/todo.controller';
import { TodoRepository } from './todo/todo.repository';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'luiz258',
      password: '34123231',
      database: 'todolistdb258',
      entities: [TodoEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
