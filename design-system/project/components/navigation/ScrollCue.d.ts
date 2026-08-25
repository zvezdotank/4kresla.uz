import * as React from "react";

/** Hero "scroll down" capsule with three stacked chevrons, over photography only. */
export interface ScrollCueProps {
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ScrollCue(props: ScrollCueProps): JSX.Element;
