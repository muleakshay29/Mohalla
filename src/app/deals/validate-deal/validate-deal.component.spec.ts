import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDealComponent } from './validate-deal.component';

describe('ValidateDealComponent', () => {
  let component: ValidateDealComponent;
  let fixture: ComponentFixture<ValidateDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
