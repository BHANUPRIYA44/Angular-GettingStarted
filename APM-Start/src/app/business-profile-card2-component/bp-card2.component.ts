import { Component } from "@angular/core";

@Component({
    selector:"bp-card2",
    templateUrl:"./bp-card2.component.html",
    styleUrls:["./bp-card2.component.css","../app.component.css"]
})
export class bpCard2Component {
    warningText:string="You need to complete your business profile first."
    isDisabled:boolean= true //need to get the value -> to decide if the GET STARTED button is disabled or not - based on the business profile completion 
    opacityValue :number = this.isDisabled ? 1 : 0.3 //changing the opacity of the button -> based on the button disable value
}