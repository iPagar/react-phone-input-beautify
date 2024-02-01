import React from "react";

export const PhoneInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <input {...props}>{props.children}</input>;
};
