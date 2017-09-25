import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private authService:AuthenticationService){}
  canActivate():boolean
  {
    return  this.authService.isLoggedIn();
  }
}
