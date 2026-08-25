import * as React from "react";

/** Centered uppercase section title, the spine of every page section. */
export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  /** "light" for use over dark photography. */
  tone?: "dark" | "light";
  /** Show the brass rule under the title. */
  rule?: boolean;
  as?: "h1" | "h2" | "h3";
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
