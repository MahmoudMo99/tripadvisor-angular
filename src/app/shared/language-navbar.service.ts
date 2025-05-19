import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageNavbarService {
  private showModalSource = new Subject<void>();
  showModal$ = this.showModalSource.asObservable();

  constructor() {}

  triggerModal() {
    this.showModalSource.next();
  }
}
