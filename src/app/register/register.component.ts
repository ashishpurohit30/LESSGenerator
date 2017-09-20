import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';

import { RegisterService } from '../register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup:FormGroup;
  fname:AbstractControl;
  lname:AbstractControl;
  mobileNumber:AbstractControl;
  email:AbstractControl;
  password:AbstractControl;
  cpassword:AbstractControl;
  constructor(private formBuilder:FormBuilder, registerService:RegisterService) 
  { 
    console.log(registerService.message());
    this.formGroup= formBuilder.group
    ({
      "fname" : ['', Validators.compose([Validators.required,Validators.maxLength(16), Validators.minLength(3)])],
      "lname" : ['', Validators.compose([Validators.required,Validators.maxLength(16),Validators.minLength(3)])],
      "mobileNumber" : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(14),Validators.pattern('^[0-9]+$')])],
      "email" : ['',Validators.compose([Validators.required,Validators.email,this.emailValidator,Validators.minLength(8),Validators.maxLength(40)])],
      "password": ['',Validators.compose([Validators.required])],
      "cpassword" : ['',Validators.compose([Validators.required])],
    })
    this.fname=this.formGroup.controls['fname'];
    this.lname=this.formGroup.controls['lname'];
    this.mobileNumber=this.formGroup.controls['mobileNumber'];
    this.email=this.formGroup.controls['email'];
    this.password=this.formGroup.controls['password'];
    this.cpassword=this.formGroup.controls['cpassword'];
  }
  onSubmit(value):Object
  {
    return value;
  }  
    emailValidator(control: FormControl): { [s: string]: boolean } 
   {
    if (!control.value.match(/accenture.com$/)) 
    {
      return {invalidSku: true};
    }
  }
  ngOnInit() {
  }

}
