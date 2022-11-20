import {FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import * as lpn from 'google-libphonenumber';

// @ts-ignore
export const phoneNumberValidator: ValidatorFn = (control: FormControl): ValidationErrors | null =>  {
  const phoneUtil = lpn.PhoneNumberUtil.getInstance();
  let value = ((control.value && control.value.toString()) || '').trim();
  if (!value) return null;
  try {
    if (/^00/g.test(value)) {
      value = value.replace('00', '+');
    }
    const parsedNumber = value.startsWith('+') || value.startsWith('00') ? phoneUtil.parse(value) : phoneUtil.parse(value, 'BT');
    return parsedNumber && !phoneUtil.isValidNumber(parsedNumber) ? { invalidPhone: true } : null;
  } catch (err) {
    return { invalidPhone: true };
  }
};
