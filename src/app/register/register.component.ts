import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';

import { RegisterService } from '../register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  formGroup:FormGroup;
  fname:AbstractControl;
  lname:AbstractControl;
  mobileNumber:AbstractControl;
  email:AbstractControl;
  password:AbstractControl;
  cpassword:AbstractControl;
  constructor(private formBuilder:FormBuilder,private registerService:RegisterService) 
  { 
    this.formGroup= formBuilder.group
    ({
      "fname" : ['', Validators.compose([Validators.required,Validators.maxLength(16), Validators.minLength(3)])],
      "lname" : ['', Validators.compose([Validators.required,Validators.maxLength(16),Validators.minLength(3)])],
      "mobileNumber" : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(14),Validators.pattern('^[0-9]+$')])],
      "email" : ['',Validators.compose([Validators.required,Validators.email,Validators.minLength(8),Validators.maxLength(40),Validators.pattern(/accenture.com$/i)])],
      "password": ['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(20)])],
      "cpassword" : ['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(20)])],
    })
    this.fname=this.formGroup.controls['fname'];
    this.lname=this.formGroup.controls['lname'];
    this.mobileNumber=this.formGroup.controls['mobileNumber'];
    this.email=this.formGroup.controls['email'];
    this.password=this.formGroup.controls['password'];
    this.cpassword=this.formGroup.controls['cpassword'];
  }

  onSubmit()
  {
    if(this.formGroup.valid)
    {
    console.log('Form is Successfully Submitted');
    this.registerService.myFormData(this.formGroup.value);
    this.formGroup.reset();
    }
  }
  
  successAlert:boolean=false;
  successAlertMethod():boolean
  {
    if(this.formGroup.valid)
    {
    this.successAlert=true;
    return this.successAlert;
    }
    else
    return this.successAlert;
  }
  resetForm()
  {
    this.successAlert=false;
    this.formGroup.reset();
    console.log('Reset is called');
  }

  ngOnInit() 
  {

  }

}
