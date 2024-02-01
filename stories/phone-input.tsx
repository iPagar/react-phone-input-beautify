import clsx from 'clsx';
import React, {
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './phone-input.module.scss';

const PhoneInputContext = React.createContext({});

function usePhoneInputContext() {
  const context = React.useContext(PhoneInputContext);
  if (!context) {
    throw new Error(
      'PhoneInput compound components cannot be rendered outside the PhoneInput component'
    );
  }
  return context;
}

function PhoneInputContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const contextValue = useMemo(() => ({}), []);

  return (
    <PhoneInputContext.Provider value={contextValue}>
      {children}
    </PhoneInputContext.Provider>
  );
}

export function PhoneInput(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className } = props;

  return (
    <PhoneInputContextProvider>
      <div {...props} className={clsx(styles.phoneInput, className)}>
        {children}
      </div>
    </PhoneInputContextProvider>
  );
}

PhoneInput.NumberInput = function PhoneInputNumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  usePhoneInputContext();

  return <input {...props} />;
};

const PhoneInputCountrySelectContext = React.createContext({});

const usePhoneInputCountrySelectContext = () => {
  const context = React.useContext(PhoneInputCountrySelectContext);
  if (!context) {
    throw new Error(
      'usePhoneInputCountrySelectContext must be used within a PhoneInputCountrySelectProvider'
    );
  }
  return context as {
    dialogPosition?: { top: number };
    isDialogOpen: boolean;
    setDialogPosition: React.Dispatch<React.SetStateAction<{ top: number }>>;
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
  const [dialogPosition, setDialogPosition] = useState<{
    top: number;
  }>();
  const [triggerRef, setTriggerRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);

  const contextValue = useMemo(
    () => ({
      dialogPosition,
      isDialogOpen,
      setDialogPosition,
      setIsDialogOpen,
      setTriggerRef,
      triggerRef,
    }),
    [dialogPosition, isDialogOpen, triggerRef]
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
  usePhoneInputContext();
  const { children } = props;

  return (
    <PhoneInputCountrySelectProvider>
      {children}
    </PhoneInputCountrySelectProvider>
  );
};

PhoneInput.CountrySelectTrigger = function PhoneInputCountrySelectTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    isDialogOpen,
    setDialogPosition,
    setIsDialogOpen,
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
  const { children } = props;

  return (
    <button
      {...props}
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

PhoneInput.CountrySelectDialog = function PhoneInputCountrySelectDialog(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogPosition, isDialogOpen, setIsDialogOpen, triggerRef } =
    usePhoneInputCountrySelectContext();
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
