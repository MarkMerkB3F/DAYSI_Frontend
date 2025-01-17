import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginWindowComponent} from "../../login/login-window/login-window.component";

@Component({
  selector: 'app-login-site',
  imports: [
    LoginWindowComponent
  ],
  templateUrl: './login-site.component.html',
  styleUrl: './login-site.component.scss'
})
export class LoginSiteComponent {
  constructor(private router: Router) {}

  openHomeSite(){
    this.router.navigate(['']);
  }
}
