import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks-site',
  imports: [],
  templateUrl: './tasks-site.component.html',
  styleUrl: './tasks-site.component.scss'
})
export class TasksSiteComponent {
  constructor(private router: Router) {}

  openHomeSite(){
    this.router.navigate(['']);
  }
}
