import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule
  ],
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
