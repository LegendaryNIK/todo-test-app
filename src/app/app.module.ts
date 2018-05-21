import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ControlsComponent } from './controls/controls.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ControlsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
