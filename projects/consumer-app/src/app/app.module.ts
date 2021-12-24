import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularCountriesFlagsModule } from 'projects/angular-countries-flags/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCountriesFlagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
