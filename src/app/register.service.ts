import { Injectable } from '@angular/core';
import { RegisterComponent } from '../app/register/register.component';

@Injectable()
export class RegisterService {

  constructor()
   { 
    //  registerComponent.onSubmit();
     console.log("Register Service is called");
     
   }
   message():String
   {
     return "Hello Service";
   }
   


}
