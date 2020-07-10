import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestheadComponent } from './testhead.component';

describe('TestheadComponent', () => {
  let component: TestheadComponent;
  let fixture: ComponentFixture<TestheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
