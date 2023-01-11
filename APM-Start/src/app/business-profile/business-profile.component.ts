import { Component, OnInit } from "@angular/core";

@Component({
    selector: "bp-component",
    // template:`
    // <div>hello
    // <div>{{name}}</div>
    // </div>`
    templateUrl: "./business-profile.component.html",
    styleUrls: ["./business-profile.component.css"]
})
export class businessProfile implements OnInit {
    name: string = "Bhanu"
    ifButton: boolean = false;
    isDisabled: boolean = false;
    warningText: string = "You need to complete the business profile first"
    ifWarning: boolean = false;

    ngOnInit(): void {
        console.log("logg")
        // this.ifButton = false;
    }
}