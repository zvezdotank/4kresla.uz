import * as React from "react";

/** Gallery thumbnail — desaturated photo, dims on hover, square corners. */
export interface GalleryTileProps {
  src: string;
  alt?: string;
  /** CSS aspect-ratio, e.g. "16/9". */
  ratio?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function GalleryTile(props: GalleryTileProps): JSX.Element;
