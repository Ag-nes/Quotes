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
    new Quote("Domie Don","Kiprono", "If love is not us then we have no God!", new Date()),

    new Quote("Charles Filmx","Dalai", "“Where ignorance is our master, there is no possibility of real peace.” ", new Date()),

    new Quote("Ivy Kaimenyi","Prof. Lumumba", "We cannot run a country where virtue is vice and vice is a virtue.” ", new Date()),

    new Quote("Mtetezi","Dr. Miguna Miguna", "The provision of basic services to the people is not a privilege. Nor is it a charitable act. The people already paid for the services via the high taxes", new Date()),

    new Quote("Shalom Ben","Dalai", "“Where ignorance is our master, there is no possibility of real peace.” ", new Date()),

    new Quote("Marlin Genie","Dalai", "The belief in a supernatural source of evil is not necessary; men alone are quite capable of every wickedness", new Date())
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
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes [index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

}
