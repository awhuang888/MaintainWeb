import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOfferListComponent } from './asset-offer-list.component';

describe('AssetOfferListComponent', () => {
  let component: AssetOfferListComponent;
  let fixture: ComponentFixture<AssetOfferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOfferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
