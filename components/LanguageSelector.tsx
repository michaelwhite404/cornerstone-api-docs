import { useLocalStorage } from "@mantine/hooks";
import React from "react";

const languages = ["shell", "javascript"];

export default function LanguageSelector() {
  const [language, setLanguage] = useLocalStorage({
    key: "language",
    defaultValue: "shell",
    getInitialValueInEffect: true,
  });
  return (
    <div className="language-selector">
      {languages.map((l) => (
        <div key={l} className={language === l ? "active" : ""} onClick={() => setLanguage(l)}>
          {l}
        </div>
      ))}
    </div>
  );
}
