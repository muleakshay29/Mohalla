import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCategoryMasterComponent } from './shop-category-master.component';

describe('ShopCategoryMasterComponent', () => {
  let component: ShopCategoryMasterComponent;
  let fixture: ComponentFixture<ShopCategoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCategoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCategoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
