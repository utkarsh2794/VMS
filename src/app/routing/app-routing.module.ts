import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customers/customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    loadChildren: () =>
      import('../customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'customer-details',
    loadChildren: () =>
      import('../customer-detail/customer-detail.module').then(
        (m) => m.CustomerDetailModule
      ),
  },
  {
    path: 'customer-details/:id',
    loadChildren: () =>
      import('../customer-detail/customer-detail.module').then(
        (m) => m.CustomerDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
