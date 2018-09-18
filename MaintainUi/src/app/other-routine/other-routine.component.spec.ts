import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRoutineComponent } from './other-routine.component';

describe('OtherRoutineComponent', () => {
  let component: OtherRoutineComponent;
  let fixture: ComponentFixture<OtherRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
