import React, { HTMLProps } from 'react';

export function CountryFlag(
  props: HTMLProps<HTMLImageElement> & {
    /**
     * Country code in ISO 3166-1 alpha-2 format
     */
    country: string;
    height?: 20 | 40 | 80 | 160 | 320;
    type?: 'jpg' | 'png' | 'svg' | 'webp';
  }
) {
  const { country, height = 40, type = 'png' } = props;

  return (
    <img
      {...props}
      alt={country}
      src={
        type === 'svg'
          ? `https://flagcdn.com/${country.toLowerCase()}.${type}`
          : `https://flagcdn.com/h${height}/${country.toLowerCase()}.${type}`
      }
    />
  );
}
