import {
  Controller,
  Get,
  Post,
  Body,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { TodoService } from './todos.service';

@Controller('api/todos')
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getTodos(@Req() req: Request) {
    const userId = req.session.user._id;
    return await this.todoService.getUserTodos(userId);
  }

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
