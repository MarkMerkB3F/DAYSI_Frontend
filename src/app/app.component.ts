import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ReportsComponent} from "./components/widgets/reports/reports.component";
import {TasksComponent} from "./components/widgets/tasks/tasks.component";
import {CalendarComponent} from "./components/widgets/calendar/calendar.component";
import {AddComponent} from "./components/widgets/add/add.component";

@Component({
  selector: 'app-root',
  imports: [ReportsComponent, TasksComponent, CalendarComponent, AddComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'daysi-frontend';
}
