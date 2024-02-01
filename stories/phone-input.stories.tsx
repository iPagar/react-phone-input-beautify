import { PhoneInput } from "./phone-input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input = {
  args: {},
};
