import { Component, OnInit } from "@angular/core";

@Component({
    selector: "btn-component",
    templateUrl: './button-component.html'
})
export class ButtonComponent {
    //check the condition - if the button is required in the card or not ()
    ifButton: boolean = false;
    ifWarning: boolean = false;
    isDisabled: boolean = false;
    warningText: string = "You need to complete the business profile first"
}