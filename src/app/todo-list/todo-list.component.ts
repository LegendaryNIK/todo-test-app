import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() todoList: Array<any>;
  @Output() itemDeleted = new EventEmitter();
  @Output() itemChecked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteItem(index: number) {
    this.itemDeleted.emit(index);
  }

  changeItemCheck(index: number) {
    this.itemChecked.emit(index);
  }
}
