import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 import { RegisterService } from './register.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import {routes} from './constants/routeConstants';

import { AuthenticationService }  from './login/authentication.service';
import { LoginGuard }  from './login/login.guard';
import { FormComponent } from './form/form.component';

import {ColorPickerModule, ColorPickerService} from 'angular2-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: 
  [
    {
      provide: RegisterService,
      useFactory: ():RegisterService=>new RegisterService()
    },
    AuthenticationService,LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
