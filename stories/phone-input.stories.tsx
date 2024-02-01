import { PhoneInput } from "./phone-input";
import styles from "./phone-input-stories.module.scss";

export default {
  title: "PhoneInput",
  component: PhoneInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Input = () => (
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

export const Form = () => (
  <form
    className={styles.form}
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <input type="text" placeholder="Name" />
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
  </form>
);

export const Styled = () => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="phone" className={styles.label}>
        Your phone
      </label>
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
          type="tel"
          placeholder="Phone"
        />
      </PhoneInput>
    </form>
  );
};
