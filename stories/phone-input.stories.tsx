import { PhoneInput } from './phone-input';
import styles from './phone-input-stories.module.scss';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'PhoneInput',
};

export function Input() {
  return (
    <PhoneInput>
      <PhoneInput.CountrySelect>
        <PhoneInput.CountrySelectTrigger className={styles.countrySelect}>
          Country
        </PhoneInput.CountrySelectTrigger>
        <PhoneInput.CountrySelectDialog className={styles.countrySelectDialog}>
          <input />
          <ul>
            <li value="1">US</li>
            <li value="44">UK</li>
          </ul>
        </PhoneInput.CountrySelectDialog>
      </PhoneInput.CountrySelect>
      <PhoneInput.NumberInput />
    </PhoneInput>
  );
}

export function Form() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input placeholder="Name" type="text" />
      <PhoneInput>
        <PhoneInput.CountrySelect>
          <PhoneInput.CountrySelectTrigger className={styles.countrySelect}>
            Country
          </PhoneInput.CountrySelectTrigger>
          <PhoneInput.CountrySelectDialog
            className={styles.countrySelectDialog}
          >
            <input />
            <ul>
              <li value="1">US</li>
              <li value="44">UK</li>
            </ul>
          </PhoneInput.CountrySelectDialog>
        </PhoneInput.CountrySelect>
        <PhoneInput.NumberInput />
      </PhoneInput>
    </form>
  );
}

export function Styled() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className={styles.label} htmlFor="phone">
        Your phone
        <PhoneInput className={styles.phoneInput}>
          <PhoneInput.CountrySelect>
            <PhoneInput.CountrySelectTrigger className={styles.countrySelect}>
              Country
            </PhoneInput.CountrySelectTrigger>
            <PhoneInput.CountrySelectDialog
              className={styles.countrySelectDialog}
            >
              <input />
              <ul>
                <li value="1">US</li>
                <li value="44">UK</li>
              </ul>
            </PhoneInput.CountrySelectDialog>
          </PhoneInput.CountrySelect>
          <PhoneInput.NumberInput
            className={styles.numberInput}
            id="phone"
            placeholder="Phone"
            type="tel"
          />
        </PhoneInput>
      </label>
    </form>
  );
}
