import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
