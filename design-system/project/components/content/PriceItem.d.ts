import * as React from "react";

/** One price-list row: service, brass leader rule, price. */
export interface PriceItemProps {
  service: string;
  price: string | number;
  /** Defaults to "рублей". */
  currency?: string;
  style?: React.CSSProperties;
}
export declare function PriceItem(props: PriceItemProps): JSX.Element;
