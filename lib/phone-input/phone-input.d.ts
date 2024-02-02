import React, { HTMLAttributes } from 'react';
import { PhoneInputCountrySelect } from './phone-input-country-select';
import { PhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem } from './phone-input-item';
import { PhoneInputNumberInput } from './phone-input-number-input';
import { PhoneInputTrigger } from './phone-input-trigger';
export declare function PhoneInput(
  props: HTMLAttributes<HTMLDivElement>
): React.JSX.Element;
export declare namespace PhoneInput {
  var NumberInput: typeof PhoneInputNumberInput;
  var CountrySelect: typeof PhoneInputCountrySelect;
  var Trigger: typeof PhoneInputTrigger;
  var Dialog: typeof PhoneInputDialog;
  var Item: typeof PhoneInputItem;
}
