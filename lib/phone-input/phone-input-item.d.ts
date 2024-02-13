import React from 'react';
export declare function PhoneInputItem(props: React.LiHTMLAttributes<HTMLLIElement> & {
    country: string;
}): React.JSX.Element;
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
