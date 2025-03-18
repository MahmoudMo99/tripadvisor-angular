import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-steps',
  standalone: true,               
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  imports: [CommonModule]       
})
export class StepsComponent implements OnInit {

  currentRoute: string = '';

  steps = [
    { step: 1, label: 'Contact Details', route: 'attraction/:id/contact' },
    { step: 2, label: 'Activity Details', route: 'attraction/activity' },
    { step: 3, label: 'Payment Details', route: '/payment' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  goToStep(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

}
