import z from 'zod';
export declare const phoneValidationSchema: z.ZodEffects<
  z.ZodString,
  string,
  string
>;
export declare function formatPhoneNumber(phoneNumber: string): string;
/**
 * @param initialCountry - format is ISO 3166-1 alpha-2
 * @param initialPhoneNumber - any string
 */
export declare const usePhoneInput: (
  initialCountry?: string,
  initialPhoneNumber?: string
) => {
  country: string;
  countryList: import('iso-3166/1').ISO31661AssignedEntry[];
  handleCountryChange: (newCountry: string) => void;
  handlePhoneNumberChange: (newPhoneNumber: string) => void;
  isValid: boolean;
  phoneNumber: string;
};
