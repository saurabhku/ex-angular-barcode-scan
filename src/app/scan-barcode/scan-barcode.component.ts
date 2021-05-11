import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barcode-scanner',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.css'],

})
export class ScanBarcodeComponent implements OnInit {
  barcode: string='';
  values: string[] =[];
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event: any) {
    console.log("EVENT!!!!!!!!!!!!!!" + event)
    this.barcode=event.target.value;
  //  this.barcode =( event.target as HTMLInputElement).value;
}

}
