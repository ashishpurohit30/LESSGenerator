import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
// Constructor
  constructor() { }

  //Login Function
  login(userName:string, password:string):boolean
  {
    if((userName === 'ashish') && (password === 'ashish'))
    {
      localStorage.setItem("user",userName);
      return true;
    }
    return false;
  }

  //GetUser Function
  getUser():string
  {
    return localStorage.getItem("user");
  }
//Log Out Function
  logout():void
  {
    localStorage.removeItem("user");
  }

  //Log In Status checking function
  isLoggedIn():boolean
  {
    return this.getUser()==="ashish";
  }
}
