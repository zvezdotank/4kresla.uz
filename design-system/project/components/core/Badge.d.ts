import * as React from "react";

/** Small uppercase label for statuses and callouts (hit "Хит", "Занят"). */
export interface BadgeProps {
  tone?: "brass" | "dark" | "outline";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
