import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerComponent } from './customer/customer.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, CustomerRoutingModule, MatListModule],
})
export class CustomersModule {}
