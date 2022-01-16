import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quotes:Quote[]=[
    new Quote("Miss Powers","Agnes", "I am no bird; and no net ensnares me: I am a free human being with an independent will.", new Date()),

    new Quote("Amy Poehler","Yes please", "I believe great people do things before they are ready ", new Date()),

    new Quote("Mary Shelley","Mary", "The beginning is always today ", new Date()),

    new Quote("Maya Angelou","Powers", "Life's a bitch. You've got to go out and kick ass", new Date()),

    new Quote("Joyce Carol","Powers", "In love there are two things—bodies and words ", new Date()),

    new Quote("Agnes Nafula","Powers", "The beauty of being a feminist is that you get to be whatever you want. And that’s the point", new Date())
  ]
  totalVotes:number=0
  countUpvote(i:number){
    this.quotes[i].upvoteCount=this.quotes[i].upvoteCount+1
    if (this.quotes[i].upvoteCount>this.totalVotes){
      this.totalVotes=this.quotes[i].upvoteCount

    }
  }
  finalFunction(details:any){
  details.timePosted=new Date(details.timePosted)
  this.quotes.push(details)
  }
  myDeletes(deletes:boolean,index:number){
    if (deletes){
      let toDelete = confirm(`You sure want to delete? ${this.quotes [index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

}
