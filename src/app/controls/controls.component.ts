import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {

  @Input() allChecked: boolean;
  @Output() allCheck = new EventEmitter();
  @Output() deleteSelected = new EventEmitter();
  @Output() deleteAll = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkAll() {
    this.allCheck.emit();
  }

  deleteAllItems() {
    this.deleteAll.emit();
  }

  deleteSelectedItems() {
    this.deleteSelected.emit();
  }

}
