import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes',
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  constructor(private router: Router) {}

  openNotesSite(){
    this.router.navigate(['/notes']);
  }
}
