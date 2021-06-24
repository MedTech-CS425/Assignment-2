import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'seller/order-list' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'seller/product-create', component: ProductCreateComponent },
  { path: 'customer/product-list', component: ProductListComponent },
  { path: 'seller/order-list', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
