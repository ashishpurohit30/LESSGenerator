import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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

  constructor()
   { 

   }

  ngOnInit() 
  {

  }

}
