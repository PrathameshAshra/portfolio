import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PaCardComponent } from './pa-card/pa-card.component';
import { PaPricingComponent } from './pa-pricing/pa-pricing.component';
import { PaSideNavComponent } from './pa-side-nav/pa-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaCardComponent,
    PaPricingComponent,
    PaSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
