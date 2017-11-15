import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersService } from './_services/users.service';
import { HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatService } from './_services/chat.service';
import {Ng2Webstorage} from "ngx-webstorage";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    ChatroomComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2Webstorage
  ],
  providers: [UsersService, CookieService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
