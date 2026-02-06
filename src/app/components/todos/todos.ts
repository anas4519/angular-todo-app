import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItem } from "../todo-item/todo-item";

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Learn Angular',
        description: 'Learn the basics of Angular framework',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Build a Todo App',
        description: 'Create a simple todo application using Angular',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Learn TypeScript',
        description: 'Understand the basics of TypeScript',
        isCompleted: false,
      },
    ];
  }
}
