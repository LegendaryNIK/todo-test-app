import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private service: TodoService) {}

  getTodoList() {
    return this.service.todoList$;
  }

  addTodo(todoText: string) {
    this.service.addTodo(todoText);
  }

  checkAllChecked() {
    return this.service.allChecked;
  }

  changeItemCheck(index: number) {
    this.service.changeTodoCheck(index);
  }

  deleteItem(index: number) {
    this.service.deleteItem(index);
  }

  deleteSelected() {
    this.service.deleteSelected();
  }

  checkAll() {
    this.service.checkAll();
  }

  deleteAll() {
    this.service.deleteAll();
  }
}
