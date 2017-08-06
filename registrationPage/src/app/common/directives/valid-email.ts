import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { AppConstants } from '../constants/app-constants';

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (control.value) {
            const emailRegExp = AppConstants.emailRegExp;
            const valid = emailRegExp.test(control.value);
            return valid ? null : { 'validEmail': { value: control.value } };
        } else {
            return null;
        }

    };
}

@Directive({
    selector: '[valid-email]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } {
        return emailValidator()(control);
    }
}