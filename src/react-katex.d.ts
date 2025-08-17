declare module "react-katex" {
  import * as React from "react";
  export interface InlineMathProps {
    math: string;
    [key: string]: any;
  }
  export interface BlockMathProps {
    math: string;
    [key: string]: any;
  }
  export const InlineMath: React.FC<InlineMathProps>;
  export const BlockMath: React.FC<BlockMathProps>;
}