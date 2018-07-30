import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateDealComponent } from './deals/create-deal/create-deal.component';
import { ValidateDealComponent } from './deals/validate-deal/validate-deal.component';
import { CurrentDealsComponent } from './deals/current-deals/current-deals.component';
import { CompletedDealsComponent } from './deals/completed-deals/completed-deals.component';
import { CustomerReportComponent } from './reports/customer-report/customer-report.component';
import { TransactionReportComponent } from './reports/transaction-report/transaction-report.component';
import { CountryMasterComponent } from './masters/country-master/country-master.component';
import { StateMasterComponent } from './masters/state-master/state-master.component';
import { CityMasterComponent } from './masters/city-master/city-master.component';
import { ShopCategoryMasterComponent } from './masters/shop-category-master/shop-category-master.component';
import { ProductCategoryMasterComponent } from './masters/product-category-master/product-category-master.component';
import { ProductSubcategoryMasterComponent } from './masters/product-subcategory-master/product-subcategory-master.component';
import { MohallaRegisterComponent } from './enrollments/mohalla-register/mohalla-register.component';
import { SocietyRegisterComponent } from './enrollments/society-register/society-register.component';
import { ShopRegisterComponent } from './enrollments/shop-register/shop-register.component';
import { CustomerRegisterComponent } from './enrollments/customer-register/customer-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'country-master', component: CountryMasterComponent },
  { path: 'state-master', component: StateMasterComponent },
  { path: 'city-master', component: CityMasterComponent },
  { path: 'shop-category', component: ShopCategoryMasterComponent },
  { path: 'product-category', component: ProductCategoryMasterComponent },
  { path: 'product-subcategory', component: ProductSubcategoryMasterComponent },
  { path: 'mohalla-register', component: MohallaRegisterComponent },
  { path: 'society-register', component: SocietyRegisterComponent },
  { path: 'shop-register', component: ShopRegisterComponent },
  { path: 'customer-register', component: CustomerRegisterComponent },
  { path: 'create-deal', component: CreateDealComponent },
  { path: 'validate-deal', component: ValidateDealComponent },
  { path: 'current-deals', component: CurrentDealsComponent },
  { path: 'completed-deals', component: CompletedDealsComponent },
  { path: 'customer-report', component: CustomerReportComponent },
  { path: 'transaction-report', component: TransactionReportComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
