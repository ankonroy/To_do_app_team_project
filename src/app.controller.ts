import { Controller, Get, Render, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { Controller, Get, Render, Req} from '@nestjs/common';
import type { Request } from 'express';
import { TodoService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(private todoService: TodoService) {}
  @Get()
  root() {
    return { message: 'Hello world!' };
  }

  @Get('todos')
  @Render('todos')
  todosPage(@Req() req: Request) {
    return { user: req.session.user };
  }
}
