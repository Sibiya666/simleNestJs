import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/todo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepo: Repository<TodoEntity>,
    ) { }

    getAll(): Promise<TodoEntity[]> {
        return this.todoRepo.find();
    }

    add(addTodoDto): Promise<TodoEntity> {
        return this.todoRepo.save(addTodoDto);
    }
}
