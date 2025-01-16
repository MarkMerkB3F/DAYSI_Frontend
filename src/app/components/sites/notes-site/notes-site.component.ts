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

  currentDate: Date = new Date();
  noteTitles: string [] = [];
  noteTitle: string = '';
  noteBodies: string[] = [];
  noteBody: string = '';
  showAddNoteInput: boolean = false;
  showNoteBodies: boolean[] = [];

  toggleAddNoteInput(): void{
    this.showAddNoteInput = !this.showAddNoteInput;
  }

  addNote(): void{
      this.noteBodies.push(this.noteBody.trim());
      this.noteTitle = 'Notiz vom ' + this.currentDate.toLocaleDateString();
      this.noteTitles.push(this.noteTitle);
      this.noteBody = '';
      this.showAddNoteInput = false;
  }

  showBody(titleId : number) : void{
    this.showNoteBodies[titleId];
  }

  openHomeSite(){
    this.router.navigate(['']);
  }
}
