import { Component, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
// import { LanguageNavbarService } from './language-navbar.service';
// import{ LanguageNavbarService } from '../../../language-navbar.service';
import { LanguageNavbarService } from '../language-navbar.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-modal-language',
  standalone: true,
  imports: [NgIf, NgFor, ModalModule],
  templateUrl: './modal-language.component.html',
  styleUrl: './modal-language.component.scss',
})
export class ModalLanguageComponent {
  @ViewChild('autoShownModal') public autoShownModal!: ModalDirective;
  activeTab: string = 'region';
  public isModalShown: boolean = false;

  public regions = [
    { name: 'United States', language: 'English' },
    { name: 'Argentina', language: 'Español' },
    { name: 'Australia', language: 'English' },
    { name: 'België', language: 'Nederlands' },
    { name: 'Belgique', language: 'Français' },
    { name: 'Brasil', language: 'Português' },
    { name: 'Canada', language: 'English' },
    { name: 'Canada', language: 'Français' },
    { name: 'Chile', language: 'Español' },
    { name: 'Colombia', language: 'Español' },
    { name: 'Danmark', language: 'Dansk' },
    { name: 'Deutschland', language: 'Deutsch' },
    { name: 'España', language: 'Español' },
    { name: 'France', language: 'Français' },
    { name: 'Hong Kong SAR', language: 'English' },
    { name: 'India', language: 'English' },
    { name: 'Indonesia', language: 'Indonesia' },
    { name: 'Ireland', language: 'English' },
    { name: 'Italia', language: 'Italiano' },
    { name: 'Malaysia', language: 'English' },
    { name: 'Mexico', language: 'Español' },
    { name: 'Nederland', language: 'Nederlands' },
    { name: 'New Zealand', language: 'English' },
    { name: 'Norge', language: 'Norsk' },
    { name: 'Österreich', language: 'Deutsch' },
    { name: 'Perú', language: 'Español' },
    { name: 'Philippines', language: 'English' },
    { name: 'Portugal', language: 'Português' },
    { name: 'Schweiz', language: 'Deutsch' },
    { name: 'Singapore', language: 'English' },
    { name: 'South Africa', language: 'English' },
    { name: 'Suisse', language: 'Français' },
    { name: 'Sverige', language: 'Svenska' },
    { name: 'Svizzera', language: 'Italiano' },
    { name: 'Türkiye', language: 'Türkçe' },
    { name: 'United Kingdom', language: 'English' },
    { name: 'Venezuela', language: 'Español' },
    { name: 'Việt Nam', language: 'Tiếng Việt' },
    { name: 'Ελλάδα', language: 'Ελληνικά' },
    { name: 'Россия', language: 'Русский' },
    { name: 'العربية', language: 'العربية' },
    { name: 'مصر', language: 'العربية' },
    { name: '中国', language: '中文' },
    { name: '台灣', language: '中文' },
    { name: '日本', language: '日本語' },
    { name: '香港特别行政區', language: '中文' },
    { name: '대한민국', language: '한국어' },
  ];
  currencies = [
    { name: 'U.S. Dollars', code: 'USD' },
    { name: 'Afghan Afghans', code: 'AFN' },
    { name: 'Albanian Lek', code: 'ALL' },
    { name: 'Algerian Dinar', code: 'DZD' },
    { name: 'Angolan Kwanza', code: 'AOA' },
    { name: 'Botswana Pula', code: 'BWP' },
    { name: 'Brazilian Real', code: 'BRL' },
    { name: 'British Pounds', code: 'GBP' },
    { name: 'Brunei Dollars', code: 'BND' },
    { name: 'Bulgarian Lev', code: 'BGN' },
    { name: 'Burmese kyat', code: 'MMK' },
    { name: 'Burundi Francs', code: 'BIF' },
    { name: 'Cambodian Riel', code: 'KHR' },
    { name: 'Canadian Dollars', code: 'CAD' },
    { name: 'Cape Verde Escudo', code: 'CVE' },
    { name: 'Cayman Islands Dollars', code: 'KYD' },
    { name: 'CFA Francs BCEAO', code: 'XOF' },
    { name: 'CFA Francs BEAC', code: 'XAF' },
    { name: 'CFP Francs', code: 'XPF' },
    { name: 'Chilean Peso', code: 'CLP' },
    { name: 'Chinese Yuan', code: 'CNY' },
    { name: 'Colombian Peso', code: 'COP' },
    { name: 'Comoro Francs', code: 'KMF' },
    { name: 'Congolese Francs', code: 'CDF' },
    { name: 'Costa Rican Colon', code: 'CRC' },
    { name: 'Croatian Kuna', code: 'HRK' },
    { name: 'Czech Koruna', code: 'CZK' },
    { name: 'Danish Krone', code: 'DKK' },
    { name: 'Djibouti Francs', code: 'DJF' },
    { name: 'Dominican Peso', code: 'DOP' },
    { name: 'East Caribbean Dollars', code: 'XCD' },
    { name: 'Egyptian Pounds', code: 'EGP' },
    { name: 'Eritrean Nakfa', code: 'ERN' },
    { name: 'Ethiopian Birr', code: 'ETB' },
    { name: 'Euros', code: 'EUR' },
    { name: 'Folkland Islands Pounds', code: 'FKP' },
    { name: 'Fiji Dollars', code: 'FJD' },
    { name: 'Gambian Dalasi', code: 'GMD' },
    { name: 'Georgian Lari', code: 'GEL' },
    { name: 'Ghanan Cedi', code: 'GHS' },
    { name: 'Gibraltar Pounds', code: 'GIP' },
    { name: 'Guatemalan Quetzal', code: 'GTQ' },
    { name: 'Guinea Francs', code: 'GNF' },
    { name: 'Guyana Dollars', code: 'GYD' },
    { name: 'Haitian Gourdes', code: 'HTG' },
    { name: 'Honduran Lempiras', code: 'HNL' },
    { name: 'Hong Kong Dollars', code: 'HKD' },
    { name: 'Hungarian Forint', code: 'HUF' },
    { name: 'Icelandic Kronur', code: 'ISK' },
    { name: 'Indian Rupees', code: 'INR' },
    { name: 'Indonesian Rupiah', code: 'IDR' },
    { name: 'Iranian Rial', code: 'IRR' },
    { name: 'Iraqi Dinar', code: 'IQD' },
    { name: 'Jamaican Dollars', code: 'JMD' },
    { name: 'Japanese Yen', code: 'JPY' },
    { name: 'Jordanian Dinar', code: 'JOD' },
    { name: 'Kazakhstani Tenge', code: 'KZT' },
    { name: 'Kenyan Shilling', code: 'KES' },
    { name: 'Kuwaiti Dinar', code: 'KWD' },
    { name: 'Kyrgyzstani Som', code: 'KGS' },
    { name: 'Lao Kip', code: 'LAK' },
    { name: 'Lebanese Pounds', code: 'LBP' },
    { name: 'Liberian Dollars', code: 'LRD' },
    { name: 'Libyan Dinar', code: 'LYD' },
    { name: 'Macanese Pataca', code: 'MOP' },
    { name: 'Macedonian Denar', code: 'MKD' },
    { name: 'Malagasy Ariary', code: 'MGA' },
    { name: 'Malawian Kwacha', code: 'MWK' },
    { name: 'Malaysian Ringgit', code: 'MYR' },
    { name: 'Maldivian Rufiyaa', code: 'MVR' },
    { name: 'Mauritius Rupees', code: 'MUR' },
    { name: 'Mexican Peso', code: 'MXN' },
    { name: 'Moldovan Leu', code: 'MDL' },
    { name: 'Mongolian Tugrik', code: 'MNT' },
    { name: 'Moroccan Dirham', code: 'MAD' },
    { name: 'Mozambican Metical', code: 'MZN' },
    { name: 'Namibian Dollars', code: 'NAD' },
    { name: 'Nepalese Rupees', code: 'NPR' },
    { name: 'Netherlands Antillian Guilders', code: 'ANG' },
    { name: 'New Israeli Sheqel', code: 'ILS' },
    { name: 'New Taiwan Dollars', code: 'TWD' },
    { name: 'New Zealand Dollars', code: 'NZD' },
    { name: 'Nicaraguan Cordoba Oro', code: 'NIO' },
    { name: 'Nigerian Naira', code: 'NGN' },
    { name: 'North Korean won', code: 'KPW' },
    { name: 'Norwegian Krone', code: 'NOK' },
    { name: 'Pakistan Rupees', code: 'PKR' },
    { name: 'Panamanian Balboa', code: 'PAB' },
    { name: 'Papua New Guinean Kina', code: 'PGK' },
    { name: 'Paraguayan Guarani', code: 'PYG' },
    { name: 'Peruvian Nuevos Soles', code: 'PEN' },
    { name: 'Philippine Peso', code: 'PHP' },
    { name: 'Polish Zloty', code: 'PLN' },
    { name: 'Qatari Rial', code: 'QAR' },
    { name: 'Rial Omani', code: 'OMR' },
    { name: 'Romanian New Leu', code: 'RON' },
    { name: 'Russian Rubles', code: 'RUB' },
    { name: 'Rwandan Francs', code: 'RWF' },
    { name: 'Saint Helena Pounds', code: 'SHP' },
    { name: 'Samoan Tala', code: 'WST' },
    { name: 'Sao Tome and Principe Dobra', code: 'STD' },
    { name: 'Saudi Riyal', code: 'SAR' },
    { name: 'Serbian Dinar', code: 'RSD' },
    { name: 'Seychelles Rupees', code: 'SCR' },
    { name: 'Sierra Leonean Leone', code: 'SLL' },
    { name: 'Singapore Dollars', code: 'SGD' },
    { name: 'Solomon Islands Dollars', code: 'SBD' },
    { name: 'Somali Shilling', code: 'SOS' },
    { name: 'South African Rand', code: 'ZAR' },
    { name: 'South Korean Won', code: 'KRW' },
    { name: 'Sri Lanka Rupees', code: 'LKR' },
    { name: 'Sudanese pound', code: 'SDG' },
    { name: 'Surinam Dollars', code: 'SRD' },
    { name: 'Swedish Krona', code: 'SEK' },
    { name: 'Swiss Francs', code: 'CHF' },
    { name: 'Syrian pound', code: 'SYP' },
    { name: 'Tajikistani Somoni', code: 'TJS' },
    { name: 'Tanzanian Shilling', code: 'TZS' },
    { name: 'Thai Baht', code: 'THB' },
    { name: "Tongan Pa'anga", code: 'TOP' },
    { name: 'Trinidad and Tobago Dollars', code: 'TTD' },
    { name: 'Tunisian Dinar', code: 'TND' },
    { name: 'Turkish Lira', code: 'TRY' },
    { name: 'UAE Dirham', code: 'AED' },
    { name: 'Uganda Shilling', code: 'UGX' },
    { name: 'Ukrainian Hryvnia', code: 'UAH' },
    { name: 'Uruguayan Peso', code: 'UYU' },
    { name: 'Uzbekistan Sum', code: 'UZS' },
    { name: 'Vanuatu Vatu', code: 'VUV' },
    { name: 'Vietnamese Dong', code: 'VND' },
    { name: 'Yemeni Rial', code: 'YER' },
    { name: 'العربية', language: 'Arabic', code: 'ar' },
  ];
  public selectedRegion: any;
  selectedCurrency: any;

  constructor(
    private translate: TranslateService,
    private langService: LanguageNavbarService
  ) {}
  ngOnInit(): void {
    this.langService.showModal$.subscribe(() => {
      this.showModal();
    });
  }
  public showModal(): void {
    this.autoShownModal.show();
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }

  public selectRegion(region: any): void {
    this.selectedRegion = region;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  selectCurrency(currency: any) {
    this.selectedCurrency = currency;
  }

  changeLanguage(langCode: string) {
    this.translate.use(langCode);
    this.isModalShown = false; // close modal after language selection
  }
}
