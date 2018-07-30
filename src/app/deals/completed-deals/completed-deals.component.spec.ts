import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedDealsComponent } from './completed-deals.component';

describe('CompletedDealsComponent', () => {
  let component: CompletedDealsComponent;
  let fixture: ComponentFixture<CompletedDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
