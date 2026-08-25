import * as React from "react";

/** Label + hint/error wrapper for Input, Select and other controls. */
export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
