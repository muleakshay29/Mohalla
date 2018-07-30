import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubcategoryMasterComponent } from './product-subcategory-master.component';

describe('ProductSubcategoryMasterComponent', () => {
  let component: ProductSubcategoryMasterComponent;
  let fixture: ComponentFixture<ProductSubcategoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubcategoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubcategoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
