import { Code as MantineCode } from "@mantine/core";
import { ReactNode } from "react";

function Code(props: CodeProps) {
  return (
    <MantineCode
      className="code-block"
      styles={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[1] : "#f7f8fa",
      })}
    >
      {props.children}
    </MantineCode>
  );
}

function RouteParam(props: RouteParamProps) {
  return <span className="route-param">{props.children}</span>;
}

export default Code;

interface CodeProps {
  children: ReactNode;
}

interface RouteParamProps extends CodeProps {}
