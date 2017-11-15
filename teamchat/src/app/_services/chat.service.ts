import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Message} from "../_classes/message";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class ChatService {

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService:CookieService) {
  }

  private room = this.router.url;
  private chatUrl = '/api' + this.room;

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.chatUrl + '/messages');
  }

  addMessage(message:string): Observable<Message> {
    let cookie = this.cookieService.get('user');
    if ( cookie === ""){
      this.router.navigate(['/login']);
    }
    else {
    let httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Message>(this.chatUrl+ '/add',JSON.stringify({username: JSON.parse(cookie).name, message:message}),httpOptions);
    }
  }
}

