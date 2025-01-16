import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { TodoService } from '../../../services/todo.service';
import {TaskItemComponent} from './task-item/task-item.component';
import {Todo} from "../../../todo";
import {NgForOf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [
    TaskItemComponent,
    NgForOf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private router: Router, private todoService: TodoService) {
    this.todoService.getAllTodos();
  }

  openTasksSite() {
    this.router.navigate(['/tasks-site']);
  }
  tasks: Todo[] = [
    {
      id: '1a2b3c4d',
      title: 'Task 1',
      content: 'Complete the Angular project.',
      category: 'Work',
    },
    {
      id: '5e6f7g8h',
      title: 'Task 2',
      content: 'Grocery shopping for the weekend.',
      category: 'Personal',
    },
    {
      id: '9i0j1k2l',
      title: 'Task 3',
      content: 'Prepare slides for the meeting.',
      category: 'Work',
    },
    {
      id: '3m4n5o6p',
      title: 'Task 4',
      content: 'Water the plants and clean the garden.',
      category: 'Home',
    },
    {
      id: '7q8r9s0t',
      title: 'Task 5',
      content: 'Plan a weekend getaway.',
      category: 'Personal',
    },
    {
      id: '9i0j1k2l',
      title: 'Task 3',
      content: 'Prepare slides for the meeting.',
      category: 'Work',
    },
  ];
}
