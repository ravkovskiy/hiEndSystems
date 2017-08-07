import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})

export class EqualValidator implements Validator {
    constructor(
        @Attribute('validateEqual') public validateEqual: string) {

    }
    validate(control: AbstractControl): { [key: string]: any } {

        let value = control.value;
        if (value) {
            let equal = control.root.get(this.validateEqual);
            if (equal && value !== equal.value) {
                return {
                    validateEqual: { value: value }
                }
            }
            else if (equal && value === equal.value) {
                return null;
            }
        } else {
            return null;
        }
    }
}