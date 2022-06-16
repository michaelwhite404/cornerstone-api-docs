import { Divider } from "@mantine/core";
import LanguageSelector from "../LanguageSelector";
import ThemeToggle from "../ThemeToggle";

export default function TopBar() {
  return (
    <div className="top-bar">
      <LanguageSelector />
      <Divider
        sx={{
          height: "auto",
          margin: "0 20px",
        }}
        orientation="vertical"
      />
      <ThemeToggle />
    </div>
  );
}
