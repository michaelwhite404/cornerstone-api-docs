import { Title } from "@mantine/core";
import { HeadingProps } from ".";

export default function H2(props: HeadingProps) {
  return (
    <Title
      order={2}
      style={{
        margin: "50px 0 30px 0",
        fontWeight: 300,
      }}
    >
      {props.children}
    </Title>
  );
}
