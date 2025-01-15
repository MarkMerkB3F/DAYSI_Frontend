import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reports-site',
  imports: [],
  templateUrl: './reports-site.component.html',
  styleUrl: './reports-site.component.scss'
})
export class ReportsSiteComponent {
  constructor(private router: Router) {}

  openHomeSite(){
    this.router.navigate(['**']);
  }
}
