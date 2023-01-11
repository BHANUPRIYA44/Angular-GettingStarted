import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
selector:"pm-star",
templateUrl:"./star.component.html",
styleUrls:['./star.component.css']
}) 
export class StarComponent implements OnChanges {
 @Input() rating :string = "";
//  @Input() rating = 4;
//  rating : number = 4;
 cropWidth: number = 75;
 @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
 ngOnChanges(): void {
    // this.cropWidth = this.rating * 75 / 5;
    console.log(this.cropWidth,this.rating)
  }
  onClick():void{
    // console.log(`the rating ${this.rating} was clicked`)
    this.ratingClicked.emit(`the ratings ${this.rating} was clicked`)
  }
}