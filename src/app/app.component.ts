
import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
 
@Component({
  selector: "app-root",
  template: `
    <barcode-scanner-livestream
      type="code_128"
      (valueChanges)="onValueChanges($event)"
      (started)="(onStarted)"
    ></barcode-scanner-livestream>
    <div [hidden]="!barcodeValue">
      {{ barcodeValue }}
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent = new BarcodeScannerLivestreamComponent;
  barcodeValue: any = null;
  ngAfterViewInit() {
    this.barcodeScanner.start();
  }
 
  onValueChanges(result: any) {
    console.log(result);
    this.barcodeValue = result.codeResult.code+"\n";
  }
 
  onStarted(started: any) {
    console.log(started);
  }
}
