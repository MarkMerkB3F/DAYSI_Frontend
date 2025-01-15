import { Component, Inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private todoService: TodoService){
   this.todoService.getAllTodos()
  }
}
