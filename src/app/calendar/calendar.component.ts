import { Component } from '@angular/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-calendar',
  imports: [MatDatepickerModule, MatNativeDateModule, MatCard],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
