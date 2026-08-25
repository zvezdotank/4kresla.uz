import * as React from "react";

/** Square brass checkbox — consent and option toggles. */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: React.ReactNode;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
