import { useMantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import classnames from "classnames";
import React from "react";

const languages = ["shell", "javascript"];

export default function LanguageSelector() {
  const theme = useMantineTheme();
  const [language, setLanguage] = useLocalStorage({
    key: "language",
    defaultValue: "shell",
    getInitialValueInEffect: true,
  });
  return (
    <div className={classnames("language-selector", { dark: theme.colorScheme === "dark" })}>
      {languages.map((l) => (
        <div
          key={l}
          className={classnames("language-option", { active: language === l })}
          onClick={() => setLanguage(l)}
        >
          {l}
        </div>
      ))}
    </div>
  );
}
