import { Component, OnInit} from '@angular/core';
import { UsersService} from "../_services/users.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {

  constructor(private loginService: UsersService) { }

  ngOnInit() {
  }

  private username:string;
  private password:string;
  private cpassword:string;

  Register() {
    if (this.username === "" ||  this.password === "" || this.cpassword === "") {
      alert("Please fill ALL fields");
    }
    else {
      if (this.password !== this.cpassword){
        alert("'Password' field does not 'Confim Password' field");
      }
      else {
        this.loginService.Register(this.username,this.password);
      }
    }
  }
}
