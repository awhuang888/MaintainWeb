import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOfferItemComponent } from './asset-offer-item.component';

describe('AssetOfferItemComponent', () => {
  let component: AssetOfferItemComponent;
  let fixture: ComponentFixture<AssetOfferItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOfferItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
