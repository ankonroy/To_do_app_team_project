import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async createTodo(
    userId: string,
    title: string,
    description: string,
  ): Promise<Todo> {
    const todo = new this.todoModel({ userId, title, description });
    return todo.save();
  }
}
