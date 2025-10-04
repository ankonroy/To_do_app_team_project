import { Controller, Delete, Param } from '@nestjs/common';
import { TodoService } from './todos.service';

@Controller('api/todos')
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.deleteTodo(id);
  }
}
