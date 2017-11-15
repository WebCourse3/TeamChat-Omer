import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ChatroomComponent} from "./chatroom/chatroom.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo:"/dashboard", pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'chat/oper', component: ChatroomComponent},
  { path: 'chat/devops', component: ChatroomComponent},
  { path: 'chat/develop', component: ChatroomComponent}
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
