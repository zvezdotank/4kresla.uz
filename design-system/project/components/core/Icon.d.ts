import * as React from "react";

/** Lucide glyph wrapper — 1.5px stroke, currentColor. Requires the Lucide UMD script on the page. */
export interface IconProps {
  /** Lucide icon name, e.g. "clock", "mail", "phone", "map-pin", "scissors". */
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
