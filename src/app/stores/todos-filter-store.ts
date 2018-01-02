import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';

export type TodosFilter =
      'SHOW_ALL'
    | 'SHOW_COMPLETED'
    | 'SHOW_ACTIVE';

@Injectable()
export class TodosFilterStore {
    @observable filter = 'SHOW_ALL';

    @action setFilter(filter: TodosFilter) {
        this.filter = filter;
    }
}
