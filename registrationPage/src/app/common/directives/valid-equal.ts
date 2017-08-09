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
        @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {

    }
    validate(control: AbstractControl): { [key: string]: any } {
        let value = control.value;
        let equal = control.root.get(this.validateEqual);

        if (value) {
            if (equal && value !== equal.value && !this.isReverse) {
                return {
                    validateEqual: false
                }
            }
            if (equal && value === equal.value && this.isReverse) {
                delete equal.errors['validateEqual'];
                if (!Object.keys(equal.errors).length) equal.setErrors(null);
            }
            if (equal && value !== equal.value && this.isReverse) {
                equal.setErrors({ validateEqual: false });
            }
        }
        return null;
    }
    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true : false;
    }
}