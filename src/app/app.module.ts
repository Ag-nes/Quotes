import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { DownvoteComponent } from './downvote/downvote.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';
import { PostedDurationPipe } from './posted-duration.pipe';
import { QuoteHighlightDirective } from './quote-highlight.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { MainQuoteComponent } from './main-quote/main-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UpvoteComponent,
    DownvoteComponent,
    DeleteComponent,
    PostedDurationPipe,
    QuoteHighlightDirective,
    QuoteDetailsComponent,
    MainQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
