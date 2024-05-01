import React from 'react';
export declare function PhoneInputDialog(props: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    children?: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
export declare function usePhoneInputDialog(props: {
    open: boolean;
}): {
    phoneInputDialogProps: {
        'aria-hidden': boolean;
    };
};
