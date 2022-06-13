import { Title } from "@mantine/core";
import { HeadingProps } from ".";

export default function H3(props: HeadingProps) {
  return (
    <Title
      order={3}
      style={{
        margin: "30px 0 15px 0",
        fontWeight: 400,
      }}
    >
      {props.children}
    </Title>
  );
}
