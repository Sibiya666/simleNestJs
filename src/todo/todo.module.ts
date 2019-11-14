import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/todo.entity';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
