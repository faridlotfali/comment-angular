import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating:number;  
  widths;
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    this.widths = this.rating * 90/5
  }
}
