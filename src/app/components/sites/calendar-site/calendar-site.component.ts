import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-site',
  imports: [],
  templateUrl: './calendar-site.component.html',
  styleUrl: './calendar-site.component.scss'
})
export class CalendarSiteComponent {
  constructor(private router: Router) {}

  openHomeSite(){
    this.router.navigate(['**']);
  }
}
