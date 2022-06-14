import { HTMLAttributes, ReactNode } from "react";

export { default as H1 } from "./H1";
export { default as H2 } from "./H2";
export { default as H3 } from "./H3";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  // id: string
  // children: ReactNode;
}
