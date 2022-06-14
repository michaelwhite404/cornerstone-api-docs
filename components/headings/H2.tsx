import { Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { LinkIcon } from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HeadingProps } from ".";
import { useRouter } from "next/router";

export default function H2(props: HeadingProps) {
  const router = useRouter();
  const { hovered, ref } = useHover<HTMLHeadingElement>();
  const { children, ...rest } = props;
  return (
    <Title
      order={2}
      style={{
        margin: "50px 0 30px 0",
        fontWeight: 300,
      }}
      ref={ref}
      {...rest}
    >
      {props.children}
      {hovered && (
        <CopyToClipboard text={`http://localhost:3000${router.pathname}#${props.id}`}>
          <LinkIcon className="link-icon" />
        </CopyToClipboard>
      )}
    </Title>
  );
}
