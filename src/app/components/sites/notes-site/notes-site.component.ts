import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-notes-site',
  imports: [
    FormsModule
  ],
  templateUrl: './notes-site.component.html',
  styleUrl: './notes-site.component.scss'
})
export class NotesSiteComponent {
  constructor(private router: Router) {}

  currentDate: Date = new Date();
  notes: { id: number; body: string; title: string; showBody: boolean}[] = [];
  noteBody: string = '';
  showAddNoteInput: boolean = false;
  idCounter: number = 1;

  toggleAddNoteInput(): void{
    this.showAddNoteInput = !this.showAddNoteInput;
  }

  addNote(): void{
      const newNote = {
          id: this.idCounter,
          body: this.noteBody.trim(),
          title: 'Notiz vom ' + this.currentDate.toLocaleDateString(),
          showBody: false
      }

      this.notes.push(newNote);
      this.noteBody = '';
      this.showAddNoteInput = false;
      this.idCounter++;
  }

  toggleShowNotes(id: number) : void{
      const note = this.notes.find(n => n.id === id);
      if (note) {
          note.showBody = !note.showBody;
      }
  }

  openHomeSite(){
    this.router.navigate(['']);
  }
}
