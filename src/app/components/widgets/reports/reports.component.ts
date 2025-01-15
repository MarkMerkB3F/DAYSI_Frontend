import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  constructor(private router: Router) {}

  openReportsSite(){
    this.router.navigate(['/reports-site']);
  }
}
