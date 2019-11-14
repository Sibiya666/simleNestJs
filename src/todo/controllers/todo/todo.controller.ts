import { Controller, Get, Post, Delete, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { TodoService } from 'src/todo/todo.service';
import { AddTodoDto } from 'src/todo/dtos/add.dto';
import { TodoDto } from 'src/todo/dtos/todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}
    @Get()
    async getAll(@Req() req: Request) {
        return this.todoService.getAll();
    }

    @Get(':id')
    findOne(): string {
        return 'One todo';
    }

    @Post()
    addTodo(@Body() addTodo: AddTodoDto): Promise<TodoDto> {
        return this.todoService.add(addTodo);
    }

    @Delete()
    deleteTodo(): string {
        return 'Delete Todo';
    }

    @Delete()
    aupdateTodo(): string {
        return 'Delete Todo';
    }
}
