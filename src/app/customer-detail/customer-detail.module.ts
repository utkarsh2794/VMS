import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { UserFilter } from '../pipes/UserFilter.pipe';


@NgModule({
  declarations: [
    CustomerDetailsComponent,
    CustomerCardComponent,
    UserFilter
  ],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule,
    MatCardModule
  ]
})
export class CustomerDetailModule { }
