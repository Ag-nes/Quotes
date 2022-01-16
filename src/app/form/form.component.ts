import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

@Output()formInputDetails:any=new EventEmitter()
  quote:any=new Quote("","","", new Date)
  constructor() { }

  ngOnInit(): void {
  }

  formFunction(){
   this.formInputDetails.emit(this.quote) 
  }

}
