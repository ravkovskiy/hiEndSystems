import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function passwordValidator(passwordRegExp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (control.value) {
            const valid = passwordRegExp.test(control.value);
            return valid ? null : { 'validPassword': { value: control.value } };
        } else {
            return null;
        }

    };
}

@Directive({
    selector: '[validPassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: passwordValidatorDirective, multi: true }]
})
export class passwordValidatorDirective implements Validator {
    @Input() validPassword: RegExp;

    validate(control: AbstractControl): { [key: string]: any } {
        return passwordValidator(this.validPassword)(control);
    }
}