import { Component } from '@angular/core';
import {TaskItemComponent} from './task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
