import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ChatService} from "../_services/chat.service";
import { Message} from "../_classes/message";
import { SessionStorageService} from 'ngx-webstorage';
import {Router} from "@angular/router";


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatroomComponent implements OnInit {
  private messages: Message[];
  private message;
  constructor(private chatService: ChatService,
              private sessionStorage: SessionStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages():void {
    this.chatService.getMessages().subscribe( messages => {
      this.messages = messages;
      this.sessionStorage.store(`${this.router.url} messages`, JSON.stringify(this.messages));
    });
  }

  submitMessage() {
    if (this.message === "") {
      alert("Please write a message");
    }
    else {
      this.chatService.addMessage(this.message)
        .subscribe(msg=> {
          this.messages.push(msg);
          this.sessionStorage.store(`${this.router.url} messages`, JSON.stringify(this.messages));
        });
    }
  }

}
