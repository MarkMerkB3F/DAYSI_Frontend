import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes-site',
  imports: [
  ],
  templateUrl: './notes-site.component.html',
  styleUrl: './notes-site.component.scss'
})
export class NotesSiteComponent {
  constructor(private router: Router) {}

  openHomeSite(){
    this.router.navigate(['**']);
  }
}
