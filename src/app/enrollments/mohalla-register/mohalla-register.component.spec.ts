import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohallaRegisterComponent } from './mohalla-register.component';

describe('MohallaRegisterComponent', () => {
  let component: MohallaRegisterComponent;
  let fixture: ComponentFixture<MohallaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohallaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohallaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
