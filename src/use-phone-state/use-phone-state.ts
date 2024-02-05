import { iso31661 } from 'iso-3166';
import {
  AsYouType,
  CountryCode,
  getCountryCallingCode,
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

export function formatPhoneNumber(phoneNumber: string) {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber);
  if (!parsedNumber) {
    return phoneNumber;
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
  const [country, setCountry] = useState(initialCountry);
  const [phoneNumber, setPhoneNumber] = useState(
    formatPhoneNumber(initialPhoneNumber)
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
