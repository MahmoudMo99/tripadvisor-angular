import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destination-groups.component.html',
  styleUrls: ['./destination-groups.component.css'],
  standalone: true,
  imports:[CommonModule ]
})
export class DestinationsListComponent {


  DESTINATION_GROUPS = [
  {
    region: 'United States & Canada',
    destinations: [
      'Atlanta', 'Boston', 'Chicago', 'Dallas', 'Las Vegas',
      'Los Angeles', 'New York City', 'San Francisco', 'Seattle', 'Washington DC'
    ]
  },
  {
    region: 'Europe',
    destinations: [
      'Amsterdam', 'Barcelona', 'Berlin', 'Florence', 'London',
      'Madrid', 'Munich', 'Paris', 'Rome', 'Venice'
    ]
  },
  {
    region: 'Asia/Pacific & Australia',
    destinations: [
      'Bali', 'Bangkok', 'Beijing', 'Hong Kong', 'Singapore',
      'Sydney', 'Tokyo'
    ]
  },
  {
    region: 'Caribbean/Mexico',
    destinations: [
      'Cancun', 'Jamaica', 'Mexico City', 'Dominican Republic'
    ]
  },
  {
    region: 'Africa/Middle East',
    destinations: [
      'Dubai', 'Sharm El Sheikh'
    ]
  },
  {
    region: 'Central/South America',
    destinations: [
      'Buenos Aires'
    ]
  }
];

  
  groups = this.DESTINATION_GROUPS; 


  getLink(destination: string): string {
    const slug = destination.toLowerCase().replace(/\s+/g, '-');
    return `/hotels/${slug}`; 
  }
}
