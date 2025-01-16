import { ChangeDetectionStrategy,Component, model } from '@angular/core';
import {Router} from "@angular/router";
import {MatCalendar, MatDatepickerModule} from "@angular/material/datepicker";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-calendar',
  imports: [
    MatCalendar,
    MatCard,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  selected = model<Date | null>(null);
  constructor(private router: Router) {}

  openCalendarSite(){
    this.router.navigate(['/calendar']);
  }
}
