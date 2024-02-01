import React, { useEffect, useRef, useState } from "react";
import styles from "./phone-input.module.scss";
import clsx from "clsx";

const PhoneInputContext = React.createContext({});

function usePhoneInputContext() {
  const context = React.useContext(PhoneInputContext);
  if (!context) {
    throw new Error(
      `PhoneInput compound components cannot be rendered outside the PhoneInput component`
    );
  }
  return context;
}

export const PhoneInput = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <PhoneInputContext.Provider value={{}}>
      <div {...props} className={clsx(styles.phoneInput, props.className)}>
        {props.children}
      </div>
    </PhoneInputContext.Provider>
  );
};

PhoneInput.NumberInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  usePhoneInputContext();

  return <input {...props}>{props.children}</input>;
};

const PhoneInputCountrySelectContext = React.createContext({});

const usePhoneInputCountrySelectContext = () => {
  const context = React.useContext(PhoneInputCountrySelectContext);
  if (!context) {
    throw new Error(
      "usePhoneInputCountrySelectContext must be used within a PhoneInputCountrySelectProvider"
    );
  }
  return context as {
    isDialogOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dialogPosition?: { top: number };
    setDialogPosition: React.Dispatch<React.SetStateAction<{ top: number }>>;
    triggerRef?: React.RefObject<HTMLButtonElement>;
    setTriggerRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLButtonElement>>
    >;
  };
};

const PhoneInputCountrySelectProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState<{
    top: number;
    left: number;
  }>();
  const [triggerRef, setTriggerRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);

  const contextValue = {
    isDialogOpen,
    setIsDialogOpen,
    dialogPosition,
    setDialogPosition,
    triggerRef,
    setTriggerRef,
  };

  return (
    <PhoneInputCountrySelectContext.Provider value={contextValue}>
      {children}
    </PhoneInputCountrySelectContext.Provider>
  );
};

PhoneInput.CountrySelect = (props: { children?: React.ReactNode }) => {
  usePhoneInputContext();

  return (
    <PhoneInputCountrySelectProvider>
      {props.children}
    </PhoneInputCountrySelectProvider>
  );
};

PhoneInput.CountrySelectTrigger = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const {
    isDialogOpen,
    setIsDialogOpen,
    setDialogPosition,
    setTriggerRef,
    triggerRef,
  } = usePhoneInputCountrySelectContext();

  const handleTogglePopover = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    if (triggerRef?.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      // Вычисляем положение относительно родительского элемента
      const popoverTop = triggerRect.height;

      setDialogPosition({ top: popoverTop });
    }
  }, [triggerRef]);

  return (
    <button
      {...props}
      ref={(ref) => {
        if (ref && !triggerRef?.current) {
          setTriggerRef({
            current: ref,
          });
        }
      }}
      onClick={handleTogglePopover}
    >
      {props.children}
    </button>
  );
};

const handleClickOutside = (
  event: MouseEvent,
  refs: (React.RefObject<HTMLElement> | undefined)[]
) => {
  return !refs.some((ref) => ref?.current?.contains(event.target as Node));
};

function useClickOutside(
  refs: (React.RefObject<HTMLElement> | undefined)[],
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (handleClickOutside(event, refs)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler]);
}

PhoneInput.CountrySelectDialog = (
  props: React.HTMLAttributes<HTMLDivElement>
) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { isDialogOpen, dialogPosition, setIsDialogOpen, triggerRef } =
    usePhoneInputCountrySelectContext();
  useClickOutside([dialogRef, triggerRef], () => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
    }
  });

  if (!dialogPosition) return null;

  return (
    <div
      {...props}
      ref={dialogRef}
      className={clsx(
        styles.countrySelectDialog,
        props.className,
        isDialogOpen && styles.countrySelectDialogOpen
      )}
      style={{ top: dialogPosition.top }}
    >
      {props.children}
    </div>
  );
};
