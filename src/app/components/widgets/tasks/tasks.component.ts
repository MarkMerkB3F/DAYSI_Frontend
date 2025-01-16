import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private router: Router) {}

  openTasksSite(){
    this.router.navigate(['/tasks']);
  }
}
