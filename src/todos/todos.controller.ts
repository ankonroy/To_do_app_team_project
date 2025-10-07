import { Controller, Put, Body, Param } from '@nestjs/common';
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

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string; completed?: boolean },
  ) {
    return await this.todoService.updateTodo(id, body);
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
