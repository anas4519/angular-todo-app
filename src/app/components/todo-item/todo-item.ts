import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem implements OnInit{
  @Input() todo: Todo | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  ngOnInit(): void {}
  onCLick(todo : Todo) {
    this.todoDelete.emit(todo);
    console.log('On click triggered');
  }
}
