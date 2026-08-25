import * as React from "react";

/** 2px brass divider used under headings and between price label and value. */
export interface RuleProps {
  width?: string;
  tone?: "brass" | "hairline";
  style?: React.CSSProperties;
}
export declare function Rule(props: RuleProps): JSX.Element;
