import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageNavbarService {
  private modalShownSubject = new BehaviorSubject<boolean>(false);
  isModalShown$: Observable<boolean> = this.modalShownSubject.asObservable();

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang');
    const browserLang = translate.getBrowserLang();
    const initialLang = savedLang || (browserLang === 'ar' ? 'ar' : 'en');
  this.translate.get('HOME.TITLE').subscribe(console.log);

    this.setLang(initialLang);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  triggerModal(): void {
    this.modalShownSubject.next(true);
  }

  closeModal(): void {
    this.modalShownSubject.next(false);
  }
}
