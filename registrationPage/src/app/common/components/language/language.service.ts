import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()

export class LanguageService {
    language: string = 'en';
    constructor(private translate: TranslateService) {
        translate.setDefaultLang(this.language);
    }

    getLanguage() {
        return this.language;
    }
    setLanguage(language: string) {
        this.language = language;
        return this.translate.use(language);
    }
}