import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/todo/todo.entity';
import { Repository } from 'typeorm';
import { AddTodoDto } from './dtos/add.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepo: Repository<TodoEntity>,
    ) { }

    getAll(): Promise<TodoEntity[]> {
        return this.todoRepo.find();
    }

    add(addTodoDto: AddTodoDto): Promise<TodoEntity> {
       return  this.todoRepo.save(addTodoDto);
    }
}
