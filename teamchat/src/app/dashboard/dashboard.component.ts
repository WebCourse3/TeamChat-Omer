import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UsersService} from "../_services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UsersService,
              private router: Router) { }

  ngOnInit() {
    if (!this.userService.isLoggedin()){
      this.router.navigate(['/login']);
    }
  }
}
