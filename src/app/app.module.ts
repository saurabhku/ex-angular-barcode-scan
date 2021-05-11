import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanBarcodeComponent } from './scan-barcode/scan-barcode.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanBarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
