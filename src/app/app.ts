import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from "./components/todos/todos";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Todos, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-todo-app');
}
