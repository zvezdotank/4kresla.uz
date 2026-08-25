import * as React from "react";

/** Flat inline message on the grey surface with a thin status bar. */
export interface NoticeProps {
  tone?: "info" | "success" | "warning" | "danger";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Notice(props: NoticeProps): JSX.Element;
