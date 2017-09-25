import { Injectable } from '@angular/core';
import { RegisterComponent } from '../app/register/register.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RegisterService {
  myFormData$: Observable<any>;
  private myFormDataSubject = new Subject<any>(); 
  constructor()
   { 
     this.myFormData$ = this.myFormDataSubject.asObservable();
   }
   myFormData(data)
   {
     console.log(data);
     if(data.password!=data.cpassword)
     {
       console.log('passwords do not match');
     }
     else
     console.log('Passwords Match');
   }
   
}
