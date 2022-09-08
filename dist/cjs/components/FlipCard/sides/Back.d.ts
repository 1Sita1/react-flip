import React from "react";
import { AvailableVariants } from "../variants";
declare type BackStyles = {
    style?: React.CSSProperties;
    variant?: AvailableVariants;
};
declare const CardBack: import("styled-components").StyledComponent<"div", any, BackStyles, never>;
export declare type BackProps = {
    children?: any;
} & BackStyles;
declare const Back: React.FC<BackProps>;
export default Back;
export { CardBack as BackCSS };
