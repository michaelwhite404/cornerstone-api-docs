import { Title } from "@mantine/core";
import { HeadingProps } from ".";

export default function H1(props: HeadingProps) {
  return (
    <Title
      order={1}
      style={{
        margin: "40px 0",
        fontWeight: 300,
      }}
    >
      {props.children}
    </Title>
  );
}
