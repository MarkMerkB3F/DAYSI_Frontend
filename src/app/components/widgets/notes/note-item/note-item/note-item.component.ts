import {Component, Input} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {NgIf} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {Note} from "../../../../../note";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-item',
  imports: [
    MatIcon,
    MatIconButton,
    NgIf,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class noteItemComponent {
  constructor(private router: Router) {}

  editNote(){
    this.router.navigate(['/notes']);
  }

  @Input() note?: Note;

  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
