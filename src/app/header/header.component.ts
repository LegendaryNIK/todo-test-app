import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  addTodoForm: FormGroup;
  @Output() todoAdded = new EventEmitter();

  constructor( private fb: FormBuilder) {
    this.addTodoForm = this.fb.group({
      todoText: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.addTodoForm.valid) {
      this.todoAdded.emit(this.addTodoForm.value.todoText);
      this.addTodoForm.reset();
    }
  }

}
