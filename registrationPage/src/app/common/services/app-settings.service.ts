import { Injectable } from '@angular/core';

@Injectable()

export class AppSettingsService {

    regPath: string;
    confirmPath: string;

    constructor() {
        this.regPath = '/registration';
        this.confirmPath = '/confirmation';
    }
}