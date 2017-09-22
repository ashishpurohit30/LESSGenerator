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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
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
