import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanBarcodeComponent } from './scan-barcode.component';

describe('ScanBarcodeComponent', () => {
  let component: ScanBarcodeComponent;
  let fixture: ComponentFixture<ScanBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
