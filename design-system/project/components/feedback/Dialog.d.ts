import * as React from "react";

/** Centered modal with brass top edge — used for the booking form. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element;
