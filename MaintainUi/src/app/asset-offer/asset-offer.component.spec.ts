import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOfferComponent } from './asset-offer.component';

describe('AssetOfferComponent', () => {
  let component: AssetOfferComponent;
  let fixture: ComponentFixture<AssetOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
