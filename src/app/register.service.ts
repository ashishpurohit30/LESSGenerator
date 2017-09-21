import { Injectable } from '@angular/core';
import { RegisterComponent } from '../app/register/register.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RegisterService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject 
  constructor()
   { 
     this.myMethod$ = this.myMethodSubject.asObservable();
   }
   myMethod(data)
   {
     console.log(data);
   }
   
}
