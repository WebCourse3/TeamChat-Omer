import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
  }

  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private loginUrl = 'api/login';
  private registerUrl = 'api/signup';
  private response_json;

  Login(username: string, password: string) {
    if (this.cookieService.get('user') !== "") {
      alert("You are already logged in");
    }
    else {
      let loginString = JSON.stringify({"username": `${username}`, "password": `${password}`});
      this.http.post(this.loginUrl, loginString, this.httpOptions)
        .subscribe(response => {
            this.response_json = JSON.stringify(response);
            let parsed_response = JSON.parse(this.response_json);

            if (parsed_response.name.indexOf("bad") !== -1) {
              alert("username / password are incorrect");
            }
            else {
              this.cookieService.set('user', JSON.stringify(parsed_response));
              this.router.navigate(['/dashboard']);
            }
          }
        );
    }
  }

  Register(username: string, password: string) {
      let registerString = JSON.stringify({username: username, password: password});
      this.http.post(this.registerUrl, registerString, this.httpOptions)
        .subscribe(response => {
          this.response_json = JSON.stringify(response);
          let parsed_respone = JSON.parse(this.response_json);

          if (parsed_respone.answer === "user exist") {
            alert("User already exists, try another");
          }
          else {
            this.cookieService.set('user', JSON.stringify(parsed_respone));
            this.router.navigate(['/dashboard']);
          }
        });
  }

  isLoggedin() {
    return this.cookieService.get('user') !== "";
  }
}
