import clsx from 'clsx';
import React, { useCallback } from 'react';

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
              <img
                alt=""
                className={styles.countryFlag}
                src={`https://flagsapi.com/${country}/flat/64.png`}
              />
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

export function Styled() {
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
      className={styles.styledForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <PhoneInput
        className={clsx(styles.phoneInput, !isValid && styles.invalid)}
      >
        <PhoneInput.CountrySelect>
          <PhoneInput.Trigger className={styles.countrySelect}>
            <img
              alt=""
              className={styles.countryFlag}
              src={`https://flagsapi.com/${country}/flat/64.png`}
            />
            <div className={styles.countryIcon}>
              <svg
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.175 6.9126L10 10.7293L13.825 6.9126L15 8.0876L10 13.0876L5 8.0876L6.175 6.9126Z"
                  fill="#7A7A7A"
                />
              </svg>
            </div>
          </PhoneInput.Trigger>
          <PhoneInput.Dialog className={styles.countrySelectDialog}>
            <div className={styles.countrySelectSearch}>
              <div className={styles.countrySelectSearchIcon}>
                <svg
                  fill="none"
                  height="18"
                  viewBox="0 0 18 18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7539 11.2549H11.9639L11.6839 10.9849C12.6639 9.84488 13.2539 8.36488 13.2539 6.75488C13.2539 3.16488 10.3439 0.254883 6.75391 0.254883C3.16391 0.254883 0.253906 3.16488 0.253906 6.75488C0.253906 10.3449 3.16391 13.2549 6.75391 13.2549C8.36391 13.2549 9.84391 12.6649 10.9839 11.6849L11.2539 11.9649V12.7549L16.2539 17.7449L17.7439 16.2549L12.7539 11.2549ZM6.75391 11.2549C4.26391 11.2549 2.25391 9.24488 2.25391 6.75488C2.25391 4.26488 4.26391 2.25488 6.75391 2.25488C9.24391 2.25488 11.2539 4.26488 11.2539 6.75488C11.2539 9.24488 9.24391 11.2549 6.75391 11.2549Z"
                    fill="#7A7A7A"
                  />
                </svg>
              </div>
              <input className={styles.countrySelectSearchInput} />
            </div>
            <ul className={styles.countrySelectList}>
              <PhoneInput.Item
                aria-selected="true"
                className={styles.countrySelectItem}
                onClick={pickCountry}
                onKeyDown={pickCountry}
                role="option"
                tabIndex={0}
                value="1"
              >
                <img
                  alt=""
                  className={styles.countrySelectItemFlag}
                  src="https://flagsapi.com/US/flat/64.png"
                />
                <span>US</span>
              </PhoneInput.Item>
              <PhoneInput.Item
                aria-selected="false"
                className={styles.countrySelectItem}
                onClick={pickCountry}
                onKeyDown={pickCountry}
                role="option"
                tabIndex={0}
                value="44"
              >
                <img
                  alt=""
                  className={styles.countrySelectItemFlag}
                  src="https://flagsapi.com/RU/flat/64.png"
                />
                <span>RU</span>
              </PhoneInput.Item>
            </ul>
          </PhoneInput.Dialog>
        </PhoneInput.CountrySelect>
        <div className={styles.numberInputWrapper}>
          <label
            className={clsx(styles.label, phoneNumber && styles.filled)}
            htmlFor="phone"
          >
            <span className={styles.labelText}>Phone number</span>
          </label>
          <PhoneInput.NumberInput
            className={styles.numberInput}
            id="phone"
            onChange={(e) => {
              handlePhoneNumberChange(e.target.value);
            }}
            type="tel"
            value={phoneNumber}
          />
        </div>
      </PhoneInput>
    </form>
  );
}

export function OnlyHook() {
  const {
    country,
    handleCountryChange,
    handlePhoneNumberChange,
    isValid,
    phoneNumber,
  } = usePhoneInput();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <select onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="US">US</option>
        <option value="RU">RU</option>
      </select>
      <input
        className={styles.numberInput}
        onChange={(e) => {
          handlePhoneNumberChange(e.target.value);
        }}
        placeholder="Phone"
        type="tel"
        value={phoneNumber}
      />
      <span>{isValid ? 'Valid' : 'Invalid'}</span>
      <span>{`${country}: ${phoneNumber}`}</span>
    </form>
  );
}
