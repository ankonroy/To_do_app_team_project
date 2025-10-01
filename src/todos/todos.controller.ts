import {
  Controller,
  Post,
  Body,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { TodoService } from './todos.service';

@Controller('api/todos')
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Post()
  async createTodo(
    @Req() req: Request,
    @Body() body: { title: string; description: string },
  ) {
    const userId = req.session.user._id;
    return await this.todoService.createTodo(
      userId,
      body.title,
      body.description,
    );
  }
}
