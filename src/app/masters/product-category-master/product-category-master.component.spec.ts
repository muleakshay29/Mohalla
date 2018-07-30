import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryMasterComponent } from './product-category-master.component';

describe('ProductCategoryMasterComponent', () => {
  let component: ProductCategoryMasterComponent;
  let fixture: ComponentFixture<ProductCategoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
