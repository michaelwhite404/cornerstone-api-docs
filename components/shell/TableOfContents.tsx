import { Navbar as MantineNavbar, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarContent {
  header: string;
  subheaders?: string[];
  resource: string;
}

const content: NavbarContent[] = [
  { header: "API Reference", subheaders: ["HTTP Verbs", "Parameters"], resource: "" },
  { header: "Authentication", resource: "authentication" },
  {
    header: "Students",
    subheaders: [
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
    <MantineNavbar width={{ base: 250 }} className="table-of-contents">
      <MantineNavbar.Section>
        {content.map((c) => (
          <ul className={`toc-header ${c.resource === paths[0] ? "active" : ""}`} key={c.header}>
            <li className={`toc-item ${theme.colorScheme === "dark" ? "dark" : ""}`} style={{}}>
              <Link href={`/${c.resource}`}>{c.header}</Link>
            </li>
            {c.subheaders && (
              <ul className="toc-subheader">
                {c.subheaders.map((subheader) => (
                  <li key={subheader}>
                    <div
                      style={{
                        borderLeftColor:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[5]
                            : theme.colors.gray[1],
                      }}
                    >
                      <Link href="#">{subheader}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        ))}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
