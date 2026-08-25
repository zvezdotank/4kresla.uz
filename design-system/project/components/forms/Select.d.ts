import * as React from "react";

/** Native select with brass caret — used for master, service and time pickers. */
export interface SelectProps {
  value?: string;
  defaultValue?: string;
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
