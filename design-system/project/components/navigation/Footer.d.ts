import * as React from "react";

/** Black footer: script credit left, circled social icons center, rights notice right. */
export interface FooterProps {
  credit?: string;
  /** Lucide icon names for social links. */
  socials?: string[];
  note?: string;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
