import * as React from "react";

/** Single-line text field — square corners, hairline border, brass focus. */
export interface InputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: "text" | "tel" | "email" | "date" | "time";
  disabled?: boolean;
  invalid?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
