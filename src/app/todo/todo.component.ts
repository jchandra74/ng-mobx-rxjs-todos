import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    @Input() todo: Todo;
    @Output() complete = new EventEmitter();
    @Output() remove = new EventEmitter();
}
