import * as React from "react";

/** Team member: square b&w portrait, uppercase name underneath. */
export interface MasterCardProps {
  name: string;
  /** Portrait URL. Rendered square and desaturated. */
  photo?: string;
  role?: string;
  style?: React.CSSProperties;
}
export declare function MasterCard(props: MasterCardProps): JSX.Element;
