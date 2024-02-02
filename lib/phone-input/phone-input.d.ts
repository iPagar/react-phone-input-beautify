import React, { HTMLAttributes } from 'react';
import { PhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem } from './phone-input-item';
import { PhoneInputTrigger } from './phone-input-trigger';
import { PhoneInputCountrySelect } from './phoneinput-country-select';
export declare function PhoneInput(
  props: HTMLAttributes<HTMLDivElement>
): React.JSX.Element;
export declare namespace PhoneInput {
  var NumberInput: (
    props: React.InputHTMLAttributes<HTMLInputElement>
  ) => React.JSX.Element;
  var CountrySelect: typeof PhoneInputCountrySelect;
  var Trigger: typeof PhoneInputTrigger;
  var Dialog: typeof PhoneInputDialog;
  var Item: typeof PhoneInputItem;
}
