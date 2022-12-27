import { Component } from "@angular/core";

@Component({
    selector:"bp-card3",
    templateUrl:"./bp-card3.component.html",
    styleUrls:["./bp-card3.component.css","../app.component.css"]
})
export class bpCard3Component {
    learnMoreUrl:string = "https://www.google.com/"
    learnMoreLink():void{
        window.open(this.learnMoreUrl);
        console.log("click")
    }
}