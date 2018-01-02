import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable()
export class TodosService {
    getTodos() {
        return new Promise<Todo[]>(resolve => {
            setTimeout(() => {
                resolve([new Todo({title: 'Learn Mobx'})]);
            }, 1000);
        });
    }
}
