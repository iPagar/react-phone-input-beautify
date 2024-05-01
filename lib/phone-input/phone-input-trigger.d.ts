import React from 'react';
export declare function PhoneInputTrigger(props: React.ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export declare function usePhoneInputTrigger(props: {
    open: boolean;
}): {
    triggerProps: {
        readonly 'aria-expanded': boolean;
        readonly 'aria-haspopup': "listbox";
        readonly 'aria-label': "Select country";
        readonly role: "combobox";
        readonly type: "button";
    };
};
