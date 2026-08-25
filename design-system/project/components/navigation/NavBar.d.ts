import * as React from "react";

/**
 * Dark top bar: razor mark left, uppercase anchor links centered, phone right.
 */
export interface NavBarProps {
  items?: string[];
  /** Item label to underline in brass. */
  active?: string;
  phone?: string;
  onSelect?: (item: string) => void;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
