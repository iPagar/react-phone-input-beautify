import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLProps, forwardRef, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { animated, useSpring } from 'react-spring';
import { z } from 'zod';

import { CountryFlag } from '../src/country-flag/country-flag';
import { PhoneInput, usePhone } from '../src/phone-input/phone-input';
import {
  phoneValidationSchema,
  usePhoneState,
} from '../src/use-phone-state/use-phone-state';
import styles from './phone-input-stories.module.scss';

export default {
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'PhoneInput',
};

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  phone: phoneValidationSchema(),
});

type FormPhoneInputProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & HTMLProps<HTMLInputElement>;

const FormPhoneInput = forwardRef(
  (props: FormPhoneInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { onChange } = props;
    const [country, setCountry] = useState('US');
    const [search, setSearch] = useState('');

    return (
      <PhoneInput.Root
        className={styles.formPhoneInput}
        onCountryChange={(newCountry) => {
          setCountry(newCountry);
        }}
      >
        {({ countryList }) => (
          <>
            <PhoneInput.Trigger>
              <CountryFlag
                className={styles.countryFlag}
                country={country}
                type="svg"
              />
            </PhoneInput.Trigger>

            <PhoneInput.Dialog
              className={styles.countrySelectDialog}
              onOpenChange={() => {
                setSearch('');
              }}
            >
              <>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  value={search}
                />
                <ul>
                  {countryList
                    .filter((item) =>
                      item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <PhoneInput.Item country={item.alpha2} key={item.alpha2}>
                        {item.name}
                      </PhoneInput.Item>
                    ))}
                </ul>
              </>
            </PhoneInput.Dialog>
            <PhoneInput.NumberInput {...props} onChange={onChange} ref={ref} />
          </>
        )}
      </PhoneInput.Root>
    );
  }
);

export function AnimatedReactSpringDialog() {
  return (
    <PhoneInput.Root>
      {({ country }) => (
        <PhoneInput.Trigger>
          <CountryFlag country={country} />
        </PhoneInput.Trigger>
      )}
      {({ countryList, open }) => {
        const spring = useSpring({
          from: { opacity: 0, transform: 'translateY(-20px)' },
          to: {
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'all' : 'none',
            transform: open ? 'translateY(0)' : 'translateY(-20px)',
          },
        });

        return (
          <PhoneInput.Dialog open>
            <animated.div style={spring}>
              <ul>
                {countryList.map((countryItem) => (
                  <PhoneInput.Item
                    country={countryItem.alpha2}
                    key={countryItem.alpha2}
                  >
                    {countryItem.name}
                  </PhoneInput.Item>
                ))}
              </ul>
            </animated.div>
          </PhoneInput.Dialog>
        );
      }}
      <PhoneInput.NumberInput placeholder="Phone" />
    </PhoneInput.Root>
  );
}

export function AnimatedFramerMotionDialog() {
  return (
    <PhoneInput.Root>
      {({ country }) => (
        <PhoneInput.Trigger>
          <CountryFlag country={country} />
        </PhoneInput.Trigger>
      )}
      {({ countryList, open }) => (
        <AnimatePresence>
          {open && (
            <PhoneInput.Dialog open>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ul>
                  {countryList.map((countryItem) => (
                    <PhoneInput.Item
                      country={countryItem.alpha2}
                      key={countryItem.alpha2}
                    >
                      {countryItem.name}
                    </PhoneInput.Item>
                  ))}
                </ul>
              </motion.div>
            </PhoneInput.Dialog>
          )}
        </AnimatePresence>
      )}

      <PhoneInput.NumberInput placeholder="Phone" />
    </PhoneInput.Root>
  );
}

export function ReactHookFormAndZod() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const [submitState, setSubmitState] = useState<z.infer<typeof schema>>({
    name: '',
    phone: '',
  });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => {
        setSubmitState(data);
      })}
    >
      <input placeholder="Name" type="text" {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      <FormPhoneInput {...register('phone')} placeholder="Phone" />
      {errors.phone && <span>{errors.phone.message}</span>}
      <button type="submit">Submit</button>

      <div>
        <h2>Submit state</h2>
        <pre>{JSON.stringify(submitState, null, 2)}</pre>
      </div>
    </form>
  );
}

export function Styled() {
  const [search, setSearch] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [country, setCountry] = useState('US');
  const [phone, setPhone] = useState('');

  return (
    <form
      className={styles.styledForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <PhoneInput.Root
        className={clsx(styles.phoneInput, !isValid && styles.invalid)}
        initialCountry={country}
        onCountryChange={setCountry}
        onValidationChange={setIsValid}
      >
        {({ countryList }) => (
          <>
            <PhoneInput.Trigger className={styles.countrySelect}>
              <CountryFlag className={styles.countryFlag} country={country} />
              <div className={styles.countryIcon}>
                <svg
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.175 6.9126L10 10.7293L13.825 6.9126L15 8.0876L10 13.0876L5 8.0876L6.175 6.9126Z"
                    fill="#7A7A7A"
                  />
                </svg>
              </div>
            </PhoneInput.Trigger>
            <PhoneInput.Dialog className={styles.countrySelectDialog}>
              <div className={styles.countrySelectSearch}>
                <div className={styles.countrySelectSearchIcon}>
                  <svg
                    fill="none"
                    height="18"
                    viewBox="0 0 18 18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7539 11.2549H11.9639L11.6839 10.9849C12.6639 9.84488 13.2539 8.36488 13.2539 6.75488C13.2539 3.16488 10.3439 0.254883 6.75391 0.254883C3.16391 0.254883 0.253906 3.16488 0.253906 6.75488C0.253906 10.3449 3.16391 13.2549 6.75391 13.2549C8.36391 13.2549 9.84391 12.6649 10.9839 11.6849L11.2539 11.9649V12.7549L16.2539 17.7449L17.7439 16.2549L12.7539 11.2549ZM6.75391 11.2549C4.26391 11.2549 2.25391 9.24488 2.25391 6.75488C2.25391 4.26488 4.26391 2.25488 6.75391 2.25488C9.24391 2.25488 11.2539 4.26488 11.2539 6.75488C11.2539 9.24488 9.24391 11.2549 6.75391 11.2549Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </div>
                <input
                  className={styles.countrySelectSearchInput}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  type="text"
                  value={search}
                />
              </div>
              <ul className={styles.countrySelectList}>
                {countryList
                  .filter((countryItem) =>
                    countryItem.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((countryItem) => (
                    <PhoneInput.Item
                      className={styles.countrySelectItem}
                      country={countryItem.alpha2}
                      key={countryItem.alpha2}
                    >
                      <CountryFlag
                        className={styles.countrySelectItemFlag}
                        country={countryItem.alpha2}
                        type="svg"
                      />
                      <span>{countryItem.name}</span>
                    </PhoneInput.Item>
                  ))}
              </ul>
            </PhoneInput.Dialog>
            <div className={styles.numberInputWrapper}>
              <label
                className={clsx(styles.label, phone && styles.filled)}
                htmlFor="phone"
              >
                <span className={styles.labelText}>Phone number</span>
              </label>
              <PhoneInput.NumberInput
                className={styles.numberInput}
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="tel"
                value={phone}
              />
            </div>
          </>
        )}
      </PhoneInput.Root>
    </form>
  );
}

export function StyledWithAnimation() {
  const {
    country,
    countryList,
    handleCountryChange,
    handlePhoneNumberChange,
    isValid,
    phoneNumber,
  } = usePhoneState();
  const [search, setSearch] = useState('');

  const pickCountry = useCallback(
    (e: React.KeyboardEvent | React.MouseEvent) => {
      setSearch('');
      const target = e.currentTarget as HTMLLIElement;
      handleCountryChange(target.dataset.value as unknown as string);
    },
    []
  );

  const searchCountryList = countryList.filter((countryItem) =>
    countryItem.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <form
      className={styles.styledTwoForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className={styles.label} htmlFor="phone">
        <span className={styles.labelText}>Phone</span>
        <PhoneInput.Root
          className={clsx(styles.phoneInput, !isValid && styles.invalid)}
        >
          {({ open }) => (
            <>
              <PhoneInput.Trigger
                className={styles.countrySelect}
                id="country-selector"
              >
                <CountryFlag className={styles.countryFlag} country={country} />
                <div className={styles.countryIcon}>
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.175 6.9126L10 10.7293L13.825 6.9126L15 8.0876L10 13.0876L5 8.0876L6.175 6.9126Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </div>
              </PhoneInput.Trigger>
              <PhoneInput.Dialog className={styles.countrySelectDialog}>
                <div className={styles.countrySelectSearch}>
                  <div className={styles.countrySelectSearchWrapper}>
                    <div className={styles.countrySelectSearchIcon}>
                      <svg
                        fill="none"
                        height="22"
                        viewBox="0 0 22 22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.25 19.25L13.75 13.75M15.5833 9.16667C15.5833 12.7105 12.7105 15.5833 9.16667 15.5833C5.62284 15.5833 2.75 12.7105 2.75 9.16667C2.75 5.62284 5.62284 2.75 9.16667 2.75C12.7105 2.75 15.5833 5.62284 15.5833 9.16667Z"
                          stroke="#1F1E58"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeOpacity="0.8"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    {open && (
                      <input
                        aria-labelledby="country-selector search-input"
                        autoFocus
                        className={styles.countrySelectSearchInput}
                        id="search-input"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        type="text"
                        value={search}
                      />
                    )}
                  </div>
                </div>
                <ul className={styles.countrySelectList}>
                  {searchCountryList.map((countryItem) => (
                    <PhoneInput.Item
                      className={styles.countrySelectItem}
                      country={countryItem.alpha2}
                      data-value={countryItem.alpha2}
                      key={countryItem.alpha2}
                      onClick={pickCountry}
                      onKeyDown={pickCountry}
                      tabIndex={0}
                    >
                      <CountryFlag
                        className={styles.countrySelectItemFlag}
                        country={countryItem.alpha2}
                        type="svg"
                      />
                      <span>{countryItem.name}</span>
                    </PhoneInput.Item>
                  ))}
                </ul>
              </PhoneInput.Dialog>
              <PhoneInput.NumberInput
                className={styles.numberInput}
                id="phone"
                onChange={(e) => {
                  handlePhoneNumberChange(e.target.value);
                }}
                type="tel"
                value={phoneNumber}
              />
            </>
          )}
        </PhoneInput.Root>
      </label>
    </form>
  );
}

export function Hook() {
  const state = usePhoneState();
  const [isOpen, setIsOpen] = useState(false);
  const {
    getListItemProps,
    numberInputProps,
    phoneInputDialogProps,
    triggerProps,
  } = usePhone(
    {
      isDialogOpen: isOpen,
    },
    state
  );

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.phoneInput}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          {...triggerProps}
          className={styles.countrySelect}
        >
          <CountryFlag className={styles.countryFlag} country={state.country} />
        </button>
        <div
          {...phoneInputDialogProps}
          className={clsx(
            styles.countrySelectDialog,
            isOpen && styles.countrySelectDialogOpen
          )}
        >
          {state.countryList.map((countryItem) => (
            <li
              key={countryItem.alpha2}
              {...getListItemProps({ value: countryItem.alpha2 })}
              onClick={() => {
                state.handleCountryChange(countryItem.alpha2);
                setIsOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  state.handleCountryChange(countryItem.alpha2);
                  setIsOpen(false);
                }
              }}
            >
              {countryItem.name}
            </li>
          ))}
        </div>
        <input
          {...numberInputProps}
          className={clsx(styles.numberInput, numberInputProps.className)}
          onChange={(e) => {
            state.handlePhoneNumberChange(e.target.value);
          }}
          placeholder="Phone"
          value={state.phoneNumber}
        />
      </div>
      <span>{state.isValid ? 'Valid' : 'Invalid'}</span>
      <span>{`${state.country}: ${state.phoneNumber}`}</span>
    </form>
  );
}

export function BasicWithCountryFlag() {
  return (
    <PhoneInput.Root>
      {({ country }) => (
        <PhoneInput.Trigger>
          <CountryFlag country={country} />
        </PhoneInput.Trigger>
      )}
      {({ countryList }) => (
        <PhoneInput.Dialog>
          <ul>
            {countryList.map((countryItem) => (
              <PhoneInput.Item
                country={countryItem.alpha2}
                key={countryItem.alpha2}
              >
                {countryItem.name}
              </PhoneInput.Item>
            ))}
          </ul>
        </PhoneInput.Dialog>
      )}
      <PhoneInput.NumberInput placeholder="Phone" />
    </PhoneInput.Root>
  );
}

export function Basic() {
  return (
    <PhoneInput.Root>
      <PhoneInput.NumberInput placeholder="Phone" />
    </PhoneInput.Root>
  );
}

export function Flags() {
  const { country, countryList, handleCountryChange } = usePhoneState();

  return (
    <div className={styles.flags}>
      {countryList.map((countryItem) => (
        <div key={countryItem.alpha2}>
          <span>{`${countryItem.name} (${countryItem.alpha2})`}</span>
          <div className={styles.flagGroup}>
            <div className={styles.flag}>
              <span>IMG</span>
              <CountryFlag
                className={styles.countryFlag}
                country={countryItem.alpha2}
              />
            </div>
            <div className={styles.flag}>
              <span>SVG</span>
              <CountryFlag
                className={styles.countryFlag}
                country={countryItem.alpha2}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
