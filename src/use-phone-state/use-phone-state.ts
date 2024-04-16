import { iso31661 } from 'iso-3166';
import {
  AsYouType,
  CountryCode,
  getCountryCallingCode,
  getPhoneCode,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import { useState } from 'react';
import z from 'zod';

export const phoneValidationSchema = (
  { invalid, required } = {
    invalid: 'Invalid phone number',
    required: 'Phone number is required',
  }
) =>
  z
    .string({
      required_error: required,
    })
    .refine((value) => {
      try {
        return isValidPhoneNumber(value);
      } catch (error) {
        return false;
      }
    }, invalid);

export function getCountryCode(phone: string) {
  const parsedNumber = parsePhoneNumberFromString(phone);
  if (!parsedNumber) {
    return '';
  }
  return parsedNumber.country;
}

export function formatPhoneNumber(phoneNumber: string, country?: string) {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber);
  if (!parsedNumber) {
    try {
      const phoneCode = getPhoneCode(country as CountryCode);

      if (phoneCode) {
        return `+${phoneCode}`;
      }
    } catch (error) {
      return parsedNumber;
    }

    return parsedNumber;
  }

  return parsedNumber.formatInternational();
}

/**
 * @param initialCountry - format is ISO 3166-1 alpha-2
 * @param initialPhoneNumber - any string
 */
export const usePhoneState = ({
  initialCountry = 'US',
  initialPhoneNumber = '',
} = {}) => {
  const [country, setCountry] = useState(
    getCountryCode(initialPhoneNumber) || initialCountry
  );
  const [phoneNumber, setPhoneNumber] = useState(
    formatPhoneNumber(initialPhoneNumber, initialCountry)
  );
  const [isValid, setIsValid] = useState(
    phoneValidationSchema().safeParse(initialPhoneNumber).success
  );

  /**
   *
   * @param newCountry - format is ISO 3166-1 alpha-2
   * @example "US", "RU", "GB"
   */
  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);

    // Get the country calling code
    try {
      const phoneCode = getCountryCallingCode(newCountry as CountryCode);
      setPhoneNumber(`+${phoneCode}`);
    } catch (error) {
      setPhoneNumber('');
    }

    setIsValid(false);
  };

  /**
   *
   * @param newPhoneNumber - any string
   */
  const handlePhoneNumberChange = (newPhoneNumber: string): string => {
    let phone = newPhoneNumber;

    if (phone.trim() === '') {
      setPhoneNumber('');
      setCountry(initialCountry);
      setIsValid(false);
      return '';
    }

    // If the phone number doesn't start with a "+", add it
    if (phone[0] !== '+') {
      phone = `+${phone}`;
    }

    // Format the phone number
    const asYouType = new AsYouType(country as CountryCode);
    const formattedNumber = asYouType.input(phone);
    setPhoneNumber(formattedNumber);

    // Check if the phone number is valid
    const parsedNumber = asYouType.getNumber();

    if (parsedNumber) {
      const newCountry = parsedNumber.country;
      if (newCountry && newCountry !== country) {
        setCountry(newCountry); // Update the country if it's different
      }

      setIsValid(parsedNumber.isValid());
    } else {
      // if phone is equal to default country code
      if (phone === `+${getCountryCallingCode(country as CountryCode)}`) {
        setCountry(country);
      }

      setIsValid(false);
    }

    return formattedNumber;
  };

  return {
    country,
    countryList: iso31661,
    handleCountryChange,
    handlePhoneNumberChange,
    isValid,
    phoneNumber,
  };
};
