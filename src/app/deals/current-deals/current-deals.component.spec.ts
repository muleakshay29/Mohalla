import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDealsComponent } from './current-deals.component';

describe('CurrentDealsComponent', () => {
  let component: CurrentDealsComponent;
  let fixture: ComponentFixture<CurrentDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
