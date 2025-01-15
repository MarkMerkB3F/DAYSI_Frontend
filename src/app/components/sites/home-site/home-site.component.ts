import { Component } from '@angular/core';
import {AddComponent} from "../../widgets/add/add.component";
import {CalendarComponent} from "../../widgets/calendar/calendar.component";
import {NotesComponent} from "../../widgets/notes/notes.component";
import {TasksComponent} from "../../widgets/tasks/tasks.component";

@Component({
  selector: 'app-home-site',
    imports: [
        AddComponent,
        CalendarComponent,
        NotesComponent,
        TasksComponent
    ],
  templateUrl: './home-site.component.html',
  styleUrl: './home-site.component.scss'
})
export class HomeSiteComponent {

}
