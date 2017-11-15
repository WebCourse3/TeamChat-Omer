import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UsersService} from "../_services/users.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {
  constructor(private loginService: UsersService) { }

  ngOnInit() {  }

  private username:string;
  private password:string;

  Login () {
    if (this.username === "" || this.password === "") {
      alert("username or password are missing");
    }
    else {
      this.loginService.Login(this.username, this.password);
    }
  }
}
