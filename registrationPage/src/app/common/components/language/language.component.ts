import { Component, OnInit } from '@angular/core';

import { LanguageService } from './language.service';

@Component({
  selector: 'language-switch',
  template: `<div class="translate-switch">
              <ul class="nav nav-tabs">
                <li role="presentation"
                    [ngClass]="{'active': currentLanguage == 'en' }"
                    (click)="changeLanguage('en')">
                    <a href="javascript:void(0)">EN</a>
                </li>
                <li role="presentation"
                    [ngClass]="{'active': currentLanguage == 'ru' }"
                    (click)="changeLanguage('ru')">
                    <a href="javascript:void(0)">RU</a>
                </li>
              </ul>
            </div>`
})
export class LanguageComponent implements OnInit {
  currentLanguage: string;
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.currentLanguage = this.languageService.getLanguage();
  }
  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.languageService.setLanguage(this.currentLanguage);
  }

}
