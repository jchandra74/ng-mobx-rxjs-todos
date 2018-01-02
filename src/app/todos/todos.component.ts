import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
    @Input() todos: Todo[] = [];
    @Output() complete = new EventEmitter();
    @Output() remove = new EventEmitter();
}
