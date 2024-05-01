import { act, renderHook } from '@testing-library/react';

import {
  formatPhoneNumber,
  getCountryCode,
  phoneValidationSchema,
  usePhoneState,
} from '../lib';

describe('phoneValidationSchema', () => {
  it('returns true for valid phone numbers', () => {
    const validPhone = '+1 212-565-0001';
    const schema = phoneValidationSchema();
    const result = schema.safeParse(validPhone);
    expect(result.success).toBe(true);
  });

  it('returns false for invalid phone numbers', () => {
    const invalidPhone = 'abc';
    const schema = phoneValidationSchema();
    const result = schema.safeParse(invalidPhone);
    expect(result.success).toBe(false);
  });
});

describe('getCountryCode', () => {
  it('returns the country code for a valid phone number', () => {
    expect(getCountryCode('+441234567890')).toBe('GB');
  });

  it('returns empty string for invalid phone number', () => {
    expect(getCountryCode('12345')).toBe('');
  });
});

describe('formatPhoneNumber', () => {
  it('formats a valid phone number internationally', () => {
    expect(formatPhoneNumber('+441234567890')).toBe('+44 1234 567890');
  });

  it('returns country code when no valid number is available', () => {
    expect(formatPhoneNumber('12345', 'GB')).toBe('+44');
  });

  it('returns original parsed number for invalid phone and country', () => {
    expect(formatPhoneNumber('12345')).toBe(undefined);
  });
});

describe('usePhoneState', () => {
  it('initializes with correct states', () => {
    const { result } = renderHook(() => usePhoneState());
    expect(result.current.country).toBe('US');
    expect(result.current.phoneNumber).toBe('+1');
    expect(result.current.isValid).toBe(false);
  });

  it('handles country change correctly', () => {
    const { result } = renderHook(() => usePhoneState());
    act(() => {
      result.current.handleCountryChange('GB');
    });
    expect(result.current.country).toBe('GB');
    expect(result.current.phoneNumber).toBe('+44');
  });

  it('handles phone number change correctly', () => {
    const { result } = renderHook(() => usePhoneState());
    act(() => {
      result.current.handlePhoneNumberChange('+441234567890');
    });
    expect(result.current.phoneNumber).toBe('+44 1234 567890');
    expect(result.current.isValid).toBe(true);
  });
});
