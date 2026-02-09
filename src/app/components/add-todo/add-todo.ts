import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo implements OnInit {
  title: string | undefined;
  desc: string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
   const todo  = {
    id: 6,
    title: this.title,
    description: this.desc,
    isCompleted: false
   }
   this.todoAdd.emit(todo);

  }
  ngOnInit(): void {}
}
