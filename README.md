# PhoneInput Component README

## Overview

The `PhoneInput` component is an advanced input field tailored for inputting and validating international phone numbers. It comes equipped with features such as country selection, automatic phone number formatting, and comprehensive validation mechanisms.

## Storybook

See the `PhoneInput` component in action by visiting the [Storybook](https://ipagar.github.io/react-phone-input-beautify).

## Installation

Install the `PhoneInput` component using npm or yarn:

- **npm**

  ```bash
  npm install react-phone-input-beautify
  ```

- **Yarn**

  ```bash
  yarn add react-phone-input-beautify
  ```

## Key Features

- **Country Selection**: Users can select their country, which automatically formats the phone number according to the country's standard.
- **Phone Number Formatting**: Automatically formats phone numbers as they are entered.
- **Validation**: Includes built-in validation to ensure the entered phone number matches the selected country's format.

## Usage

To incorporate the `PhoneInput` component into your application, import it from `react-phone-input-beautify`. The component supports various customization options through props, allowing you to tailor its functionality to suit your needs.

The component also offers integration capabilities with form libraries such as `react-hook-form` and validation libraries like `zod`, enabling you to create custom input components that align with your form handling and validation logic.

For advanced scenarios, the `PhoneInput` component supports WAI-ARIA attributes for accessibility, custom input components, rendering dialogs in portals, and even using hooks to manage phone input states.

## Customization

Customize the `PhoneInput` component using its extensive API to meet your application's specific requirements. Whether you need basic phone number input functionality, advanced country selection with flags, or integration with form and validation libraries, `PhoneInput` provides the necessary tools to build a robust phone number input experience.

## Additional Features

- **Hooks Support**: Use the `usePhoneState` hook for state management and event handling.
- **Custom Input Component Integration**: Easily integrate with custom input components.
- **Accessibility**: Designed with WAI-ARIA support for enhanced accessibility.
- **Portal Rendering**: Utilize the `PhoneInput.Portal` for dialog rendering.
- **Country Flag Component**: Directly use the `CountryFlag` component for displaying country flags.
- **Phone Number Formatting Utility**: Leverage the `formatPhoneNumber` function for custom phone number formatting needs.
