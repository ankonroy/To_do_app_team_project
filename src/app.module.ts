import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TodosController } from './todos/todos.controller';
import { TodoService } from './todos/todos.service';
import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todoapp'),
    MongooseModule.forFeature([
    //   { name: User.name, schema: UserSchema },
      { name: Todo.name, schema: TodoSchema },
    ]),
  ],
//   controllers: [AppController, AuthController, TodosController],
  controllers: [AppController, TodosController],
  providers: [TodoService],
//   providers: [AuthService, TodoService, SessionGuard],
})
export class AppModule {}
