import { MantineTheme, Navbar as MantineNavbar, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import slugify from "slugify";

interface NavbarContent {
  header: string;
  subheaders?: string[];
  resource: string;
}

const contents: NavbarContent[] = [
  { header: "API Reference", subheaders: ["HTTP Verbs", "Parameters"], resource: "" },
  {
    header: "Authentication",
    resource: "authentication",
    subheaders: ["Create User", "Login User", "Logout User", "Update Current User Password"],
  },
  {
    header: "Students",
    subheaders: [
      "Model",
      "Get All Students",
      "Get Single Student",
      "Create Student",
      "Update Student",
      "Delete Student",
      "Group Students by Grade",
    ],
    resource: "students",
  },
];

export default function TableOfContents() {
  const theme = useMantineTheme();
  const router = useRouter();
  const paths = router.pathname.substring(1).split("/");
  return (
    <MantineNavbar fixed width={{ base: 250 }} className="table-of-contents">
      <MantineNavbar.Section>
        {contents.map((c) => (
          <TOCSection content={c} theme={theme} active={c.resource === paths[0]} key={c.header} />
        ))}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

function TOCSection({
  content,
  theme,
  active,
}: {
  content: NavbarContent;
  theme: MantineTheme;
  active: boolean;
}) {
  return (
    <ul className={`toc-header ${active ? "active" : ""}`} key={content.header}>
      <li className={`toc-item ${theme.colorScheme === "dark" ? "dark" : ""}`} style={{}}>
        <Link href={`/${content.resource}`}>{content.header}</Link>
      </li>
      {content.subheaders && (
        <ul
          className="toc-subheader"
          style={{
            display: active ? "block" : "none",
          }}
        >
          {content.subheaders.map((subheader) => (
            <li key={subheader}>
              <div
                style={{
                  borderLeftColor:
                    theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
                  height: 32,
                }}
              >
                <Link href={`/${content.resource}#${slugify(subheader, { lower: true })}`}>
                  {subheader}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
}
