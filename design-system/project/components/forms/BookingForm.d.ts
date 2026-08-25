import * as React from "react";

/**
 * The online booking form — name, phone, service, master, date.
 */
export interface BookingFormProps {
  services?: string[];
  masters?: string[];
  onSubmit?: () => void;
  style?: React.CSSProperties;
}
export declare function BookingForm(props: BookingFormProps): JSX.Element;
