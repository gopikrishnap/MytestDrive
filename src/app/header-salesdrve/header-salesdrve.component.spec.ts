import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSalesdrveComponent } from './header-salesdrve.component';

describe('HeaderSalesdrveComponent', () => {
  let component: HeaderSalesdrveComponent;
  let fixture: ComponentFixture<HeaderSalesdrveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSalesdrveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSalesdrveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
