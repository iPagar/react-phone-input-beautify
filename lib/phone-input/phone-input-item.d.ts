import React from 'react';
import { UseControllerProps } from 'react-hook-form';
export declare function PhoneInputItem(props: React.LiHTMLAttributes<HTMLLIElement> & {
    country: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function PhoneInputItemWithForm(props: React.LiHTMLAttributes<HTMLLIElement> & {
    country: string;
} & UseControllerProps): import("react/jsx-runtime").JSX.Element;
type UsePhoneInputItemProps = {
    selected: string;
};
export declare function usePhoneInputItem(props: UsePhoneInputItemProps): {
    getListItemProps: (itemProps: {
        value: string;
    }) => {
        'aria-controls': string;
        'aria-selected': boolean;
        role: "option";
    };
};
export {};
