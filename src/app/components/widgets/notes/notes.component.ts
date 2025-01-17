import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Note} from "../../../note";
import {noteItemComponent} from "./note-item/note-item/note-item.component";

@Component({
  selector: 'app-notes',
  imports: [
    NgForOf,
    noteItemComponent
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  constructor(private router: Router) {}

  openNotesSite(){
    this.router.navigate(['/notes']);
  }

  notes: Note[] = [
    {
      "id": 1,
      "body": "Heute habe ich an einem neuen Projekt gearbeitet. Es war ein produktiver Tag.",
      "title": "Notiz vom 16.1.2025",
      "showBody": false
    },
    {
      "id": 2,
      "body": "Ich habe den Überblick über die Aufgaben verloren und muss morgen einen Plan erstellen.",
      "title": "Notiz vom 15.1.2025",
      "showBody": false
    },
    {
      "id": 3,
      "body": "Der Meeting war sehr informativ. Wir haben wichtige Entscheidungen getroffen.",
      "title": "Notiz vom 14.1.2025",
      "showBody": false
    },
    {
      "id": 4,
      "body": "Ich habe einige neue Ideen für das Marketing-Team. Muss sie mit Kollegen besprechen.",
      "title": "Notiz vom 13.1.2025",
      "showBody": false
    },
    {
      "id": 5,
      "body": "Es war ein stressiger Tag, aber ich konnte alle wichtigen Aufgaben abschließen.",
      "title": "Notiz vom 12.1.2025",
      "showBody": false
    },
    {
      "id": 6,
      "body": "Ich sollte dringend meine E-Mails aufräumen. Es sind zu viele ungelesene Nachrichten.",
      "title": "Notiz vom 11.1.2025",
      "showBody": false
    },
    {
      "id": 7,
      "body": "Ich habe heute an einer neuen Präsentation gearbeitet. Sie sollte nächste Woche fertig sein.",
      "title": "Notiz vom 10.1.2025",
      "showBody": false
    },
    {
      "id": 8,
      "body": "Habe den Überblick über den Projektstatus verloren, muss den Fortschritt nachverfolgen.",
      "title": "Notiz vom 9.1.2025",
      "showBody": false
    },
    {
      "id": 9,
      "body": "Habe einige wichtige Aufgaben für die nächste Woche geplant. Der Kalender ist voll.",
      "title": "Notiz vom 8.1.2025",
      "showBody": false
    },
    {
      "id": 10,
      "body": "Ich muss mich auf das bevorstehende Meeting vorbereiten und die nötigen Unterlagen zusammenstellen.",
      "title": "Notiz vom 7.1.2025",
      "showBody": false
    }
  ];
}
