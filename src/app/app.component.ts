import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dropdown } from 'bootstrap';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
