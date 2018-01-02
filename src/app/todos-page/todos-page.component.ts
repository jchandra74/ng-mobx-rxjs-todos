import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { fromMobx } from '../fromMobx';
import { Todo } from '../models/todo';
import { TodosStore } from '../stores/todos-store';
import { TodosFilter, TodosFilterStore } from '../stores/todos-filter-store';

@Component({
    selector: 'app-todos-page',
    templateUrl: './todos-page.component.html',
    styleUrls: [ './todos-page.component.css' ]
})
export class TodosPageComponent implements OnInit {
    todos: Observable<Todo[]>;
    showDialog: boolean;
    okButtonText: string;
    fieldValue = '';
    filterType = 'All';

    constructor(
        private _todosStore: TodosStore,
        private _todosFilterStore: TodosFilterStore ) { }

    ngOnInit() {
        this._todosStore.getTodos();
        this.todos = fromMobx( () => this._todosStore.filteredTodos );
        this.showDialog = false;
    }

    todoDialog() {
        if (!this.showDialog) {
            this.okButtonText = 'Create task';
            this.fieldValue = '';
            this.showDialog = true;
        }
    }

    addTodo(value: string | null) {
        if (value) {
            this._todosStore.addTodo({ title: value.trim() });
        }
        this.showDialog = false;
        this.fieldValue = null;
    }

    remove( todo: Todo ) {
        this._todosStore.removeTodo(todo);
    }

    complete( todo: Todo ) {
        this._todosStore.toggleComplete(todo);
    }

    switchFilter() {
        switch (this.filterType) {
            case 'All':
                this.filterType = 'Completed';
                this.setFilter('SHOW_COMPLETED');
                break;
            case 'Completed':
                this.filterType = 'Active';
                this.setFilter('SHOW_ACTIVE');
                break;
            default:
                this.filterType = 'All';
                this.setFilter('SHOW_ALL');
                break;
        }
    }

    setFilter( filter: TodosFilter ) {
        this._todosFilterStore.setFilter(filter);
    }

    checkAll() {
        this._todosStore.checkAll();
    }

    unCheckAll() {
        this._todosStore.unCheckAll();
    }
}

