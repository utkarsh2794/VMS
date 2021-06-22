import { Component, OnInit } from '@angular/core';
import { ServerUtilityService } from 'src/app/server-utility.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  constructor(public server: ServerUtilityService) {}

  ngOnInit(): void {}
}
