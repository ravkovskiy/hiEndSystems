import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function emailValidator(emailRegExp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (control.value) {
            const valid = emailRegExp.test(control.value);
            return valid ? null : { 'validEmail': { value: control.value } };
        } else {
            return null;
        }
    };
}

@Directive({
    selector: '[validEmail]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
    @Input() validEmail: RegExp;

    validate(control: AbstractControl): { [key: string]: any } {
        return emailValidator(this.validEmail)(control);
    }
}