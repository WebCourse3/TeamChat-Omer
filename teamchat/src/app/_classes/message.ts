export class Message{
  username: string;
  message: string;


  constructor(user:string,msg:string) {
    this.username = user;
    this.message = msg;
  }
}
