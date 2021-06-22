import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/customers/customer.types';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {
  @Input() user: Customer;

  constructor() {}

  ngOnInit(): void {}
}
