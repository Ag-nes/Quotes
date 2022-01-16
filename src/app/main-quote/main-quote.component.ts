import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-quote',
  templateUrl: './main-quote.component.html',
  styleUrls: ['./main-quote.component.css']
})
export class MainQuoteComponent implements OnInit {
@Input() myQuote:any
  constructor() { }

  ngOnInit(): void {
  }

}
