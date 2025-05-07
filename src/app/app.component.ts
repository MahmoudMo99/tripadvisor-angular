import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dropdown } from 'bootstrap';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const dropdownElement = document.querySelectorAll('.dropdown-toggle');
    dropdownElement.forEach((dropdown) => {
      new Dropdown(dropdown);
    });
  }

  title = 'tripadvisor';
}
