import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodosStore } from './stores/todos-store';
import { TodosFilterStore } from './stores/todos-filter-store';
import { TodosService } from './todos.service';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    TodosPageComponent,
    DialogComponent
  ],
  providers: [
    TodosStore,
    TodosFilterStore,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
