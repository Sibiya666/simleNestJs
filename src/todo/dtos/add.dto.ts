import { MaxLength, MinLength } from 'class-validator';

export class AddTodoDto {
    @MinLength(15)
    @MaxLength(150)
    title: string;

    @MaxLength(500)
    description: string;
}
