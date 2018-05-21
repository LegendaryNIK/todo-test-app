import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {

  private todoCollection = new BehaviorSubject([]);
  todoList$ = this.todoCollection.pipe(distinctUntilChanged());
  allChecked = new BehaviorSubject(false);

  constructor() {
    this.todoList$.subscribe(() => this.checkIfAllChecked());
  }

  addTodo(todoText: string) {
    const newState = this.todoCollection.value.map(a => ({...a}));
    newState.push({ text: todoText, checked: false});
    this.todoCollection.next(newState);
  }

  changeTodoCheck(index: number) {
    const newState = this.todoCollection.value.map(a => ({...a}));
    newState[index].checked = !newState[index].checked;
    this.todoCollection.next(newState);
  }

  checkAll() {
    this.allChecked.next(!this.allChecked.value);
    const newState = this.todoCollection.value.map(a => ({text: a.text, checked: this.allChecked.value}));
    this.todoCollection.next(newState);
  }

  deleteItem(index: number) {
    const newState = this.todoCollection.value.map(a => ({...a}));
    newState.splice(index, 1);
    this.todoCollection.next(newState);
  }

  deleteSelected() {
    const newState = this.todoCollection.value.filter(a => !a.checked);
    this.todoCollection.next(newState);
  }

  deleteAll() {
    this.todoCollection.next([]);
  }

  checkIfAllChecked() {
    const checked = this.todoCollection.value.filter(a => a.checked).length;
    if (this.todoCollection.value.length === checked && checked !== 0) {
      this.allChecked.next(true);
    } else {
      this.allChecked.next(false);
    }
  }
}
