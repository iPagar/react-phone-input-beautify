import clsx from 'clsx';
import * as flags from 'country-flag-icons/react/3x2';
import React, {
  HTMLAttributes,
  HTMLProps,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './phone-input.module.scss';

const PhoneInputContext = React.createContext({});

function usePhoneInput() {
  const context = React.useContext(PhoneInputContext);
  if (!context) {
    throw new Error(
      'PhoneInput compound components cannot be rendered outside the PhoneInput component'
    );
  }
  return context as {
    dialogPosition?: { top: number };
    phoneInputRef?: React.RefObject<HTMLDivElement>;
    setDialogPosition: React.Dispatch<React.SetStateAction<{ top: number }>>;
    setPhoneInputRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLDivElement>>
    >;
  };
}

function PhoneInputContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [phoneInputRef, setPhoneInputRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);
  const [dialogPosition, setDialogPosition] = useState<{
    top: number;
  }>();

  const contextValue = useMemo(
    () => ({
      dialogPosition,
      phoneInputRef,
      setDialogPosition,
      setPhoneInputRef,
    }),
    [phoneInputRef, dialogPosition]
  );

  return (
    <PhoneInputContext.Provider value={contextValue}>
      {children}
    </PhoneInputContext.Provider>
  );
}

function PhoneInputDiv(props: React.HTMLAttributes<HTMLDivElement>) {
  const { phoneInputRef, setDialogPosition, setPhoneInputRef } =
    usePhoneInput();
  const { className } = props;

  useEffect(() => {
    if (phoneInputRef?.current) {
      const triggerRect = phoneInputRef.current.getBoundingClientRect();
      // Вычисляем положение относительно родительского элемента
      const popoverTop = triggerRect.height;

      setDialogPosition({ top: popoverTop });
    }
  }, [phoneInputRef]);

  return (
    <div
      {...props}
      className={clsx(styles.phoneInput, className)}
      ref={(ref) => {
        if (ref && !phoneInputRef?.current) {
          setPhoneInputRef({
            current: ref,
          });
        }
      }}
    />
  );
}
export function PhoneInput(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <PhoneInputContextProvider>
      <PhoneInputDiv {...props}>{children}</PhoneInputDiv>
    </PhoneInputContextProvider>
  );
}

PhoneInput.NumberInput = function PhoneInputNumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  usePhoneInput();
  const { className } = props;

  return (
    <input
      {...props}
      className={clsx(styles.phoneInputNumberInput, className)}
    />
  );
};

const PhoneInputCountrySelectContext = React.createContext({});

export const usePhoneInputCountrySelect = () => {
  const context = React.useContext(PhoneInputCountrySelectContext);
  if (!context) {
    throw new Error(
      'usePhoneInputCountrySelect must be used within a PhoneInputCountrySelectProvider'
    );
  }
  return context as {
    isDialogOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTriggerRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLButtonElement>>
    >;
    triggerRef?: React.RefObject<HTMLButtonElement>;
  };
};

function PhoneInputCountrySelectProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [triggerRef, setTriggerRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);

  const contextValue = useMemo(
    () => ({
      isDialogOpen,

      setIsDialogOpen,
      setTriggerRef,
      triggerRef,
    }),
    [isDialogOpen, triggerRef]
  );

  return (
    <PhoneInputCountrySelectContext.Provider value={contextValue}>
      {children}
    </PhoneInputCountrySelectContext.Provider>
  );
}

PhoneInput.CountrySelect = function PhoneInputCountrySelect(props: {
  children?: React.ReactNode;
}) {
  usePhoneInput();
  const { children } = props;

  return (
    <PhoneInputCountrySelectProvider>
      {children}
    </PhoneInputCountrySelectProvider>
  );
};

PhoneInput.Trigger = function PhoneInputTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { isDialogOpen, setIsDialogOpen, setTriggerRef, triggerRef } =
    usePhoneInputCountrySelect();

  const handleTogglePopover = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const { children, className } = props;

  return (
    <button
      {...props}
      className={clsx(styles.countrySelectTrigger, className)}
      data-open={isDialogOpen}
      onClick={handleTogglePopover}
      ref={(ref) => {
        if (ref && !triggerRef?.current) {
          setTriggerRef({
            current: ref,
          });
        }
      }}
      type="button"
    >
      {children}
    </button>
  );
};

const handleClickOutside = (
  event: MouseEvent,
  refs: (React.RefObject<HTMLElement> | undefined)[]
) => !refs.some((ref) => ref?.current?.contains(event.target as Node));

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

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [refs, handler]);
}

PhoneInput.Dialog = function PhoneInputDialog(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogPosition } = usePhoneInput();
  const { isDialogOpen, setIsDialogOpen, triggerRef } =
    usePhoneInputCountrySelect();
  useClickOutside([dialogRef, triggerRef], () => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
    }
  });
  const { children, className } = props;

  if (!dialogPosition) return null;

  return (
    <div
      {...props}
      className={clsx(
        styles.countrySelectDialog,
        className,
        isDialogOpen && styles.countrySelectDialogOpen
      )}
      ref={dialogRef}
      style={{ top: dialogPosition.top }}
    >
      {children}
    </div>
  );
};

PhoneInput.Item = function PhoneInputItem(
  props: React.LiHTMLAttributes<HTMLLIElement>
) {
  const { children, className, onClick, onKeyDown, value } = props;
  const { setIsDialogOpen } = usePhoneInputCountrySelect();

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick?.(e);

    setIsDialogOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      onKeyDown?.(event);

      setIsDialogOpen(false);
    }
  };

  return (
    <li
      {...props}
      aria-selected="false"
      className={clsx(styles.countrySelectItem, className)}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      role="option"
      value={value}
    >
      {children}
    </li>
  );
};

const CountryFlagContext = React.createContext({});

function useCountryFlag() {
  const context = React.useContext(CountryFlagContext);
  if (!context) {
    throw new Error(
      'CountryFlag compound components cannot be rendered outside the CountryFlag component'
    );
  }
  return context as {
    country: string;
  };
}

export function CountryFlagProvider({
  children,
  country,
}: {
  children?: React.ReactNode;
  country: string;
}) {
  const contextValue = useMemo(() => ({ country }), [country]);

  return (
    <CountryFlagContext.Provider value={contextValue}>
      {children}
    </CountryFlagContext.Provider>
  );
}

export function CountryFlag(props: {
  children?: ReactNode;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  country: string;
}) {
  const { children, country } = props;

  return (
    <CountryFlagProvider country={country}>{children}</CountryFlagProvider>
  );
}

CountryFlag.Img = function CountryFlagImg(props: HTMLProps<HTMLImageElement>) {
  const { country } = useCountryFlag();
  const { className } = props;
  console.log(country, 'joihni');
  return (
    <img
      {...props}
      alt={country}
      className={clsx(styles.countryFlag, className)}
      src={`https://flagsapi.com/${country}/flat/64.png`}
    />
  );
};

CountryFlag.Svg = function CountryFlagSVG(
  props: HTMLProps<flags.HTMLSVGElement>
) {
  const { country } = useCountryFlag();
  const { className } = props;
  const Flag = flags[country as keyof typeof flags];

  return <Flag {...props} className={clsx(styles.countryFlag, className)} />;
};
