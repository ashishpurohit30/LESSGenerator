import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from '../login/authentication.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show= true;
  toggleShow()
  {
    this.show= false;
  }
  constructor(private authService:AuthenticationService) 
  { 
 
  }

  ngOnInit() 
  {
    
  }

}
