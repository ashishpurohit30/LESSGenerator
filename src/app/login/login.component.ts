import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;

  constructor(private authService: AuthenticationService) 
  {
    this.message= '';
  }

  login(userName: string, password: string):boolean
  {
    this.message = '';
    if(!this.authService.login(userName, password))
    {
        this.message = 'Incorrect Credentials.';
        setTimeout(function(){
          this.message = '';
        }.bind(this),2500);
    }
    return false;
  }

  logout():boolean{
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
