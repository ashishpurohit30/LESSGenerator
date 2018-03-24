import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{
  H1_color:String='#ffffff'; 
  H2_color:String='#ffffff'; 
  H3_color:String='#ffffff'; 
  H4_color:String='#ffffff'; 
  H5_color:String='#ffffff'; 
  H6_color:String='#ffffff'; 
  Anchor_color:String='#ffffff';
  Body_color:String='#ffffff';
  P_color:String='#ffffff';
  TextArea_color:String='#ffffff';

  /* Methods for Show and Hiding of Divs */
  toggleHeading:boolean=false;
  toggleHeadingMethod()
  {
    this.toggleHeading = !this.toggleHeading;
  }

  toggleAnchor:boolean=false;
  toggleAnchorMethod()
  {
    this.toggleAnchor = !this.toggleAnchor;
  }

  toggleLegend:boolean=false;
  toggleLegendMethod()
  {
    this.toggleLegend = !this.toggleLegend;
  }

  togglePara:boolean=false;
  toggleParaMethod()
  {
    this.togglePara = !this.togglePara;
  }
/*Methods for show/hiding Divs ended */

  // Method to Reset the Form

  resetForm()
  {
    this.formGroup.reset();
    console.log('reset is called');
  }

  fonts:String[];
  formGroup:FormGroup;
  H1_FontFamily:AbstractControl; H2_FontFamily:AbstractControl; H3_FontFamily:AbstractControl; 
  H4_FontFamily:AbstractControl; H5_FontFamily:AbstractControl; H6_FontFamily:AbstractControl;
  H1_Color:AbstractControl;  H2_Color:AbstractControl;  H3_Color:AbstractControl;
  H4_Color:AbstractControl;  H5_Color:AbstractControl;  H6_Color:AbstractControl;
  H1_FontSize:AbstractControl;  H2_FontSize:AbstractControl;  H3_FontSize:AbstractControl;
  H4_FontSize:AbstractControl;  H5_FontSize:AbstractControl;  H6_FontSize:AbstractControl;
  H1_Padding:AbstractControl;  H2_Padding:AbstractControl;  H3_Padding:AbstractControl;
  H4_Padding:AbstractControl;  H5_Padding:AbstractControl; H6_Padding:AbstractControl;
  H1_Margin:AbstractControl; H2_Margin:AbstractControl; H3_Margin:AbstractControl;
  H4_Margin:AbstractControl; H5_Margin:AbstractControl; H6_Margin:AbstractControl;
  Anchor_FontFamily:AbstractControl; Anchor_Color:AbstractControl; Anchor_FontSize:AbstractControl;
  Anchor_Padding:AbstractControl; Anchor_Margin:AbstractControl; Anchor_Focus:AbstractControl;
  Anchor_Visited:AbstractControl; Anchor_Active:AbstractControl; Body_FontFamily:AbstractControl;
  Body_Color:AbstractControl; Body_BackgroundColor:AbstractControl; Body_FontSize:AbstractControl;
  Body_Padding:AbstractControl; Body_Margin:AbstractControl; P_FontFamily:AbstractControl;
  P_Color:AbstractControl; P_BackgroundColor:AbstractControl; P_FontSize:AbstractControl;
  P_Padding:AbstractControl; P_Margin:AbstractControl; TextArea_FontFamily:AbstractControl;
  TextArea_Color:AbstractControl; TextArea_BackgroundColor:AbstractControl;
  TextArea_FontSize:AbstractControl;  TextArea_Padding:AbstractControl; TextArea_Margin:AbstractControl;

  constructor(private formBuilder:FormBuilder)
   { 

    this.fonts=['Arial','Helvetica','Times','Times New Roman','Courier New','Courier','Verdana','Comic Sans MS'];

     this.formGroup= formBuilder.group({
       "H1_FontFamily" : [''], "H1_Color" : [''], "H1_FontSize" : ['',Validators.compose([Validators.minLength(3),Validators.maxLength(4),Validators.pattern('^(3[2-9]|([4-9][0-9]))+(px)+$')])], "H1_Padding" : ['',Validators.pattern(/px$/i)], "H1_Margin" : ['',Validators.pattern(/px$/i)],
       "H2_FontFamily" : [''], "H2_Color" : [''], "H2_FontSize" : ['',Validators.compose([Validators.minLength(3),Validators.maxLength(4),Validators.pattern('^(2[4-9]|([4-8][0-9]))+(px)+$')])], "H2_Padding" : ['',Validators.pattern(/px$/i)], "H2_Margin" : ['',Validators.pattern(/px$/i)],
       "H3_FontFamily" : [''], "H3_Color" : [''], "H3_FontSize" : ['',Validators.compose([Validators.minLength(3),Validators.maxLength(4),Validators.pattern('^(1[8-9]|([4-7][0-9]))+(px)+$')])], "H3_Padding" : ['',Validators.pattern(/px$/i)], "H3_Margin" : ['',Validators.pattern(/px$/i)],
       "H4_FontFamily" : [''], "H4_Color" : [''], "H4_FontSize" : ['',Validators.compose([Validators.minLength(3),Validators.maxLength(4),Validators.pattern('^(1[5-9]|([2-6][0-9]))+(px)+$')])], "H4_Padding" : ['',Validators.pattern(/px$/i)], "H4_Margin" : ['',Validators.pattern(/px$/i)],
       "H5_FontFamily" : [''], "H5_Color" : [''], "H5_FontSize" : ['',Validators.compose([Validators.minLength(3),Validators.maxLength(4),Validators.pattern('^(1[3-9]|([2-5][0-9]))+(px)+$')])], "H5_Padding" : ['',Validators.pattern(/px$/i)], "H5_Margin" : ['',Validators.pattern(/px$/i)],
       "H6_FontFamily" : [''], "H6_Color" : [''], "H6_FontSize" : ['',Validators.compose([Validators.minLength(3),Validators.maxLength(4),Validators.pattern('^(1[0-9]|([2-4][0-9]))+(px)+$')])], "H6_Padding" : ['',Validators.pattern(/px$/i)], "H6_Margin" : ['',Validators.pattern(/px$/i)],
       "Anchor_FontFamily" : [''], "Anchor_Color" : [''], "Anchor_FontSize" : ['',Validators.pattern(/px$/i)], "Anchor_Padding" : ['',Validators.pattern(/px$/i)],
       "Anchor_Margin" : ['',Validators.pattern(/px$/i)], "Anchor_Focus" : [''], "Anchor_Visited" : [''], "Anchor_Active" : [''],
       "Body_FontFamily" : [''], "Body_Color" : [''], "Body_FontSize" : ['',Validators.pattern(/px$/i)], 
       "Body_BackgroundColor" : [''], "Body_Margin" : ['',Validators.pattern(/px$/i)], "Body_Padding" : ['',Validators.pattern(/px$/i)],
       "P_FontFamily" : [''], "P_Color" : [''], "P_FontSize" : ['',Validators.pattern(/px$/i)],
       "P_BackgroundColor" : [''], "P_Margin" : ['',Validators.pattern(/px$/i)], "P_Padding" : ['',Validators.pattern(/px$/i)],
       "TextArea_FontFamily" : [''], "TextArea_Color" : [''], "TextArea_FontSize" : ['',Validators.pattern(/px$/i)],
       "TextArea_BackgroundColor" : [''], "TextArea_Margin" : ['',Validators.pattern(/px$/i)], "TextArea_Padding" : ['',Validators.pattern(/px$/i)],
     })
     this.H1_FontFamily=this.formGroup.controls['H1_FontFamily'];
     this.H2_FontFamily=this.formGroup.controls['H2_FontFamily'];
     this.H3_FontFamily=this.formGroup.controls['H3_FontFamily'];
     this.H4_FontFamily=this.formGroup.controls['H4_FontFamily'];
     this.H5_FontFamily=this.formGroup.controls['H5_FontFamily'];
     this.H6_FontFamily=this.formGroup.controls['H6_FontFamily'];
     this.H1_Color=this.formGroup.controls['H1_Color'];
     this.H2_Color=this.formGroup.controls['H2_Color'];
     this.H3_Color=this.formGroup.controls['H3_Color'];
     this.H4_Color=this.formGroup.controls['H4_Color'];
     this.H5_Color=this.formGroup.controls['H5_Color'];
     this.H6_Color=this.formGroup.controls['H6_Color'];
     this.H1_FontSize=this.formGroup.controls['H1_FontSize'];
     this.H2_FontSize=this.formGroup.controls['H2_FontSize'];
     this.H3_FontSize=this.formGroup.controls['H3_FontSize'];
     this.H4_FontSize=this.formGroup.controls['H4_FontSize'];
     this.H5_FontSize=this.formGroup.controls['H5_FontSize'];
     this.H6_FontSize=this.formGroup.controls['H6_FontSize'];
     this.H1_Padding=this.formGroup.controls['H1_Padding'];
     this.H2_Padding=this.formGroup.controls['H2_Padding'];
     this.H3_Padding=this.formGroup.controls['H3_Padding'];
     this.H4_Padding=this.formGroup.controls['H4_Padding'];
     this.H5_Padding=this.formGroup.controls['H5_Padding'];
     this.H6_Padding=this.formGroup.controls['H6_Padding'];
     this.H1_Margin=this.formGroup.controls['H1_Margin'];
     this.H2_Margin=this.formGroup.controls['H2_Margin'];
     this.H3_Margin=this.formGroup.controls['H3_Margin'];
     this.H4_Margin=this.formGroup.controls['H4_Margin'];
     this.H5_Margin=this.formGroup.controls['H5_Margin'];
     this.H6_Margin=this.formGroup.controls['H6_Margin'];
     this.Anchor_FontFamily=this.formGroup.controls['Anchor_FontFamily'];
     this.Anchor_Color=this.formGroup.controls['Anchor_Color'];
     this.Anchor_FontSize=this.formGroup.controls['Anchor_FontSize'];
     this.Anchor_Padding=this.formGroup.controls['Anchor_Padding'];
     this.Anchor_Margin=this.formGroup.controls['Anchor_Margin'];
     this.Anchor_Focus=this.formGroup.controls['Anchor_Focus'];
     this.Anchor_Visited=this.formGroup.controls['Anchor_Visited'];
     this.Anchor_Active=this.formGroup.controls['Anchor_Active'];
     this.Body_FontFamily=this.formGroup.controls['Body_FontFamily'];
     this.Body_Color=this.formGroup.controls['Body_Color'];
     this.Body_FontSize=this.formGroup.controls['Body_FontSize'];
     this.Body_BackgroundColor=this.formGroup.controls['Body_BackgroundColor'];
     this.Body_Margin=this.formGroup.controls['Body_Margin'];
     this.Body_Padding=this.formGroup.controls['Body_Padding'];
     this.P_FontFamily=this.formGroup.controls['P_FontFamily'];
     this.P_Color=this.formGroup.controls['P_Color'];
     this.P_FontSize=this.formGroup.controls['P_FontSize'];
     this.P_BackgroundColor=this.formGroup.controls['P_BackgroundColor'];
     this.P_Margin=this.formGroup.controls['P_Margin'];
     this.P_Padding=this.formGroup.controls['P_Padding'];
     this.TextArea_FontFamily=this.formGroup.controls['TextArea_FontFamily'];
     this.TextArea_Color=this.formGroup.controls['TextArea_Color'];
     this.TextArea_FontSize=this.formGroup.controls['TextArea_FontSize'];
     this.TextArea_BackgroundColor=this.formGroup.controls['TextArea_BackgroundColor'];
     this.TextArea_Margin=this.formGroup.controls['TextArea_Margin'];
     this.TextArea_Padding=this.formGroup.controls['TextArea_Padding'];
   }

    onSubmit(value)
    {
      console.log(value);
    }
  
  ngOnInit() 
  {

  }

}
