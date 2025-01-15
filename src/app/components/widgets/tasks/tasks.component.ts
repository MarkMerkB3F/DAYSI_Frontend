import { Component, Inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import {TaskItemComponent} from './task-item/task-item.component';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private todoService: TodoService){
   this.todoService.getAllTodos()
  }
}
