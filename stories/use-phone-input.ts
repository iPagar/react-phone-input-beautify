import {
  AsYouType,
  CountryCode,
  getCountryCallingCode,
  isValidPhoneNumber,
} from 'libphonenumber-js';
import { useState } from 'react';
import z from 'zod';

export const phoneValidationSchema = z.string().refine((value) => {
  try {
    return isValidPhoneNumber(value);
  } catch (error) {
    return false;
  }
});

/**

* @param initialCountry - format is ISO 3166-1 alpha-2
 * @param initialPhoneNumber - format is "+{countryCallingCode}{number}"
 */
export const usePhoneInput = (
  initialCountry = 'US',
  initialPhoneNumber = ''
) => {
  const [country, setCountry] = useState(initialCountry);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [isValid, setIsValid] = useState(false);

  /**
   *
   * @param newCountry - format is ISO 3166-1 alpha-2
   * @example "US", "RU", "GB"
   */
  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);

    // Получение кода страны с помощью libphonenumber-js
    try {
      const phoneCode = getCountryCallingCode(newCountry as CountryCode);
      setPhoneNumber(`+${phoneCode}`);
    } catch (error) {
      setPhoneNumber('');
    }
  };

  /**
   *
   * @param newPhoneNumber - any string
   */
  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    let phone = newPhoneNumber;

    if (phone.trim() === '') {
      setPhoneNumber('');
      setIsValid(false);
      return;
    }

    // Если первый символ не "+", то добавляем его
    if (phone[0] !== '+') {
      phone = `+${phone}`;
    }

    // Форматирование номера телефона в реальном времени
    const asYouType = new AsYouType(country as CountryCode);
    const formattedNumber = asYouType.input(phone);
    setPhoneNumber(formattedNumber);

    // Проверка страны номера телефона
    const parsedNumber = asYouType.getNumber();

    if (parsedNumber) {
      const newCountry = parsedNumber.country;
      if (newCountry && newCountry !== country) {
        setCountry(newCountry); // Обновляем страну, если она изменилась
      }

      setIsValid(parsedNumber.isValid());
    } else {
      setIsValid(false);
    }
  };

  return {
    country,
    handleCountryChange,
    handlePhoneNumberChange,
    isValid,
    phoneNumber,
  };
};
