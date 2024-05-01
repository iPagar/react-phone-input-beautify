import React from 'react';
import { UseControllerProps } from 'react-hook-form';
export declare const PhoneInputNumberInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
declare function PhoneInputWithForm(props: UseControllerProps & React.InputHTMLAttributes<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
export default PhoneInputWithForm;
export declare function usePhoneInputNumberInput(): {
    numberInputProps: {
        className: string;
        type: string;
    };
};
