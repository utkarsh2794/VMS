import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationStart, Router } from '@angular/router';
import { ServerUtilityService } from './server-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CustomerInfo';
  links = [
    {
      label: 'Customer',
      link: '/customers',
    },
    {
      label: 'Customer Details',
      link: '/customer-details',
    },
  ];

  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor(public server: ServerUtilityService, private route: Router) {
    this.server.getUsers();
  }

  ngOnInit(): void {
    this.route.events.subscribe((res) => {
      if (res instanceof NavigationStart) {
        this.activeLink = this.links.find(
          (tab) => res.url.indexOf(tab.link) >= 0
        );
      }
    });
  }

  toggleBackground(): void {
    this.background = this.background ? undefined : 'primary';
  }
}
