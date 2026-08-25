import * as React from "react";

/** Contact row: brass circle icon, uppercase label, value underneath. */
export interface ContactItemProps {
  /** Lucide icon name — "clock", "mail", "phone", "map-pin". */
  icon: string;
  label: string;
  value: string;
  tone?: "dark" | "light";
  style?: React.CSSProperties;
}
export declare function ContactItem(props: ContactItemProps): JSX.Element;
