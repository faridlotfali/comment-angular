import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comment } from '../comment';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments : Comment[] =[];
  @ViewChild('commentText') comm :ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addcomment(){
    let c: Comment={
      comment: this.comm.nativeElement.value,
      like: 0,
      dislike : 0,
      numberOfReviews :0 ,
      star :0
    }
    this.comments.push(c);
  }
  reviewsCount(c:Comment, n:HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }
  increaseLike(c){
    c.like +=1;
  }

  increaseDislike(c){
    c.dislike +=1;
  }

}
