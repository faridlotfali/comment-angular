import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments : Comment[] =[];
  constructor() { }

  ngOnInit() {
  }

  addcomment(){
    let c: Comment={
      comment: '',
      like: 0,
      dislike : 0,
      numberOfReviews :0 ,
      star :0
    }
    this.comments.push(c);
  }
}
