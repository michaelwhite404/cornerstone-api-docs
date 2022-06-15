import { MantineTheme, Navbar as MantineNavbar, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import slugify from "slugify";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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
  const path = router.pathname.substring(1);
  const activeId = useIntersectionObserver();

  // useEffect(() => {
  //   window.location.replace(`#${activeId}`);
  // }, [activeId, path]);

  return (
    <MantineNavbar fixed width={{ base: 250 }} className="table-of-contents">
      <MantineNavbar.Section>
        {contents.map((c) => (
          <TOCSection
            content={c}
            theme={theme}
            active={c.resource === path}
            activeId={activeId}
            key={c.header}
          />
        ))}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

function TOCSection({
  content,
  theme,
  active,
  activeId,
}: {
  content: NavbarContent;
  theme: MantineTheme;
  active: boolean;
  activeId: string;
}) {
  return (
    <ul className={`toc-header ${active ? "active" : ""}`} key={content.header}>
      <li
        className={`toc-item ${theme.colorScheme === "dark" ? "dark" : ""} ${
          active && activeId === "" ? "active" : ""
        }`}
      >
        <Link href={`/${content.resource}`}>{content.header}</Link>
      </li>
      {content.subheaders && (
        <ul
          className="toc-subheader"
          style={{
            display: active ? "block" : "none",
          }}
        >
          {content.subheaders.map((subheader) => {
            const refId = slugify(subheader, { lower: true });
            return (
              <li
                className={`toc-item ${activeId === refId ? "active" : ""} ${
                  theme.colorScheme === "dark" ? "dark" : ""
                }`}
                key={subheader}
              >
                <div
                  style={{
                    borderLeftColor:
                      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
                    height: 32,
                  }}
                >
                  <Link href={`/${content.resource}#${refId}`}>{subheader}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </ul>
  );
}
