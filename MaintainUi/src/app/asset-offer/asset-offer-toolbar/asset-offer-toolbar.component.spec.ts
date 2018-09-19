import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOfferToolbarComponent } from './asset-offer-toolbar.component';

describe('AssetOfferToolbarComponent', () => {
  let component: AssetOfferToolbarComponent;
  let fixture: ComponentFixture<AssetOfferToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOfferToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOfferToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
