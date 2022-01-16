import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  upvoteCount:number=0
  
  constructor() { }

  ngOnInit(): void {
  }
  countUpvote(){
this.upvoteCount++
  }

}
