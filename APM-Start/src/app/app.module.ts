import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { bpCard1Component } from './business-profile-card1-component/bp-card1.component';
import { bpCard2Component } from './business-profile-card2-component/bp-card2.component';
import { bpCard3Component } from './business-profile-card3-component/bp-card3.component';
import { businessProfile } from './business-profile/business-profile.component';
import { noPaymentsRequired } from './no-payments-required-component/no-payments-required-component';
import { ProductListComponent } from './products/product-list.component';
import { ButtonComponent } from './shared/button-component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    businessProfile,
    ButtonComponent,
    bpCard1Component,
    bpCard2Component,
    bpCard3Component,
    noPaymentsRequired
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
