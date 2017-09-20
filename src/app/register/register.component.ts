import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';

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
  constructor(private formBuilder:FormBuilder) 
  { 
    this.formGroup= formBuilder.group
    ({
      "fname" : ['', Validators.compose([Validators.required,Validators.maxLength(16), Validators.minLength(3)])],
      "lname" : ['', Validators.compose([Validators.required,Validators.maxLength(16),Validators.minLength(3)])],
      "mobileNumber" : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(14)])],
      "email" : ['',Validators.compose([Validators.required,Validators.email,Validators.minLength(8),Validators.maxLength(24)])],
      "password": ['',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)])],
      "cpassword" : ['',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)])],
    })

    this.fname=this.formGroup.controls['fname'];
    this.lname=this.formGroup.controls['lname'];
    this.mobileNumber=this.formGroup.controls['mobileNumber'];
    this.email=this.formGroup.controls['email'];
    this.password=this.formGroup.controls['password'];
    this.cpassword=this.formGroup.controls['cpassword'];
  }
  onSubmit(value):void
  {
    console.log(value);
    console.log(this.fname.valid);
  }  

  ngOnInit() {
  }

}
