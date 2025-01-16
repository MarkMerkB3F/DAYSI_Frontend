import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-window',
  imports: [],
  templateUrl: './login-window.component.html',
  styleUrl: './login-window.component.scss'
})
export class LoginWindowComponent {
  constructor(private router: Router) {}

  login(){
    this.router.navigate(['']);
  }
}
