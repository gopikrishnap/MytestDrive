import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbuttonsComponent } from './allbuttons.component';

describe('AllbuttonsComponent', () => {
  let component: AllbuttonsComponent;
  let fixture: ComponentFixture<AllbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
