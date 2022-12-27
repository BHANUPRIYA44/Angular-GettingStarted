import { Component, OnInit } from "@angular/core";

@Component({
    selector:"bp-card1",
    templateUrl:"./bp-card1.component.html",
    styleUrls:["./bp-card1.component.html","../app.component.css"]
})
export class bpCard1Component implements OnInit  {
    name:string= ""

    ngOnInit():void{
        //get the name of the Logged in User - example data.profile.FirstName 
        this.name = "Daniel"
    }
}