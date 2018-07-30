import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyRegisterComponent } from './society-register.component';

describe('SocietyRegisterComponent', () => {
  let component: SocietyRegisterComponent;
  let fixture: ComponentFixture<SocietyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
