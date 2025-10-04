import { Controller, Put, Body, Param } from '@nestjs/common';
import { TodoService } from './todos.service';

@Controller('api/todos')
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string; completed?: boolean },
  ) {
    return await this.todoService.updateTodo(id, body);
  }
}
