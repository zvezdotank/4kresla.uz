import * as React from "react";

/** Brand wordmark set in type (no logo asset exists — see readme.md). Script line + uppercase line + rule-flanked tagline. */
export interface WordmarkProps {
  tone?: "light" | "dark";
  /** Script line font-size in px; the other lines scale from it. */
  size?: number;
  /** Set "" to hide the tagline. */
  tagline?: string;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
