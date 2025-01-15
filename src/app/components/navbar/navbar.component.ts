import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
