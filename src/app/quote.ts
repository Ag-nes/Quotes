export class Quote {
    public upvoteCount:number
    constructor(public name:string, public author:string, public quote:string, public timePosted:Date){
        this.upvoteCount=0
    }
    
}
