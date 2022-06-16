import { Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { LinkIcon } from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { showNotification } from "@mantine/notifications";
import { HeadingProps } from ".";
import { useRouter } from "next/router";

export default function H2(props: HeadingProps) {
  const router = useRouter();
  const { hovered, ref } = useHover<HTMLHeadingElement>();
  const { children, ...rest } = props;

  const handleCopy = () =>
    showNotification({
      title: "Link copied!",
      message: "",
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.blue[6],
          borderColor: theme.colors.blue[6],
          color: theme.white,
          "&::before": { backgroundColor: theme.white },
        },

        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.blue[7] },
        },
      }),
    });

  return (
    <Title
      order={2}
      style={{
        paddingTop: 20,
        marginBottom: 30,
        fontWeight: 300,
      }}
      ref={ref}
      {...rest}
    >
      {props.children}
      {hovered && (
        <CopyToClipboard
          text={`http://localhost:3000${router.pathname}#${props.id}`}
          onCopy={handleCopy}
        >
          <LinkIcon className="link-icon" />
        </CopyToClipboard>
      )}
    </Title>
  );
}
