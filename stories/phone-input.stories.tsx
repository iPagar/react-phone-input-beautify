import { useCallback } from 'react';

import { PhoneInput } from './phone-input';
import styles from './phone-input-stories.module.scss';
import { usePhoneInput } from './use-phone-input';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'PhoneInput',
};

export function Input() {
  const {
    country,
    handleCountryChange,
    handlePhoneNumberChange,
    isValid,
    phoneNumber,
  } = usePhoneInput();

  const pickCountry = useCallback(
    (e: React.KeyboardEvent | React.MouseEvent) => {
      const target = e.target as HTMLLIElement;
      handleCountryChange(target.innerText);
    },
    []
  );

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className={styles.label} htmlFor="phone">
        Your phone
        <PhoneInput className={styles.phoneInput}>
          <PhoneInput.CountrySelect>
            <PhoneInput.Trigger className={styles.countrySelect}>
              <img alt="" src={`https://flagsapi.com/${country}/flat/64.png`} />
              {country}
            </PhoneInput.Trigger>
            <PhoneInput.Dialog className={styles.countrySelectDialog}>
              <input />
              <ul>
                <PhoneInput.Item
                  aria-selected="true"
                  onClick={pickCountry}
                  onKeyDown={pickCountry}
                  role="option"
                  tabIndex={0}
                  value="1"
                >
                  US
                </PhoneInput.Item>
                <PhoneInput.Item
                  aria-selected="false"
                  onClick={pickCountry}
                  onKeyDown={pickCountry}
                  role="option"
                  tabIndex={0}
                  value="44"
                >
                  RU
                </PhoneInput.Item>
              </ul>
            </PhoneInput.Dialog>
          </PhoneInput.CountrySelect>
          <PhoneInput.NumberInput
            className={styles.numberInput}
            id="phone"
            onChange={(e) => {
              handlePhoneNumberChange(e.target.value);
            }}
            placeholder="Phone"
            type="tel"
            value={phoneNumber}
          />
        </PhoneInput>
        <span>{isValid ? 'Valid' : 'Invalid'}</span>
      </label>
    </form>
  );
}

export function Form() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input placeholder="Name" type="text" />
      <PhoneInput>
        <PhoneInput.CountrySelect>
          <PhoneInput.Trigger className={styles.countrySelect}>
            Country
          </PhoneInput.Trigger>
          <PhoneInput.Dialog className={styles.countrySelectDialog}>
            <input />
            <ul>
              <li value="1">US</li>
              <li value="44">UK</li>
            </ul>
          </PhoneInput.Dialog>
        </PhoneInput.CountrySelect>
        <PhoneInput.NumberInput />
      </PhoneInput>
    </form>
  );
}
