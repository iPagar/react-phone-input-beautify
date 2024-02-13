import React, { HTMLProps } from 'react';
export declare function CountryFlag(props: HTMLProps<HTMLImageElement> & {
    /**
     * Country code in ISO 3166-1 alpha-2 format
     */
    country: string;
    height?: 20 | 40 | 80 | 160 | 320;
    type?: 'jpg' | 'png' | 'svg' | 'webp';
}): React.JSX.Element;
