import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItem } from '../todo-item/todo-item';
import { AddTodo } from "../add-todo/add-todo";

@Component({
  selector: 'app-todos',
  imports: [TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  todos: Todo[];
  constructor() {
    const localItem = localStorage.getItem("todos");
    if(localItem == null) this.todos = [];
    else this.todos = JSON.parse(localItem);
  }
}
