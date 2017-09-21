import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 import { RegisterService } from './register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),FormsModule, ReactiveFormsModule
  ],
  providers: 
  [
    {
      provide: RegisterService,
      useFactory: ():RegisterService=>new RegisterService()
    }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
