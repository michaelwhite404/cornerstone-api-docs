import { Code as MantineCode } from "@mantine/core";
import { ReactNode } from "react";

function Code(props: CodeProps) {
  return <MantineCode className="code-block">{props.children}</MantineCode>;
}

function RouteParam(props: RouteParamProps) {
  return <span className="route-param">{props.children}</span>;
}

export default Code;

interface CodeProps {
  children: ReactNode;
}

interface RouteParamProps extends CodeProps {}
