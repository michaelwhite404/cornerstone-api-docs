import { Button, Header, useMantineColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import ThemeToggle from "../ThemeToggle";

export default function TopBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [language, setLanguage] = useLocalStorage({
    key: "language",
    getInitialValueInEffect: true,
  });

  return (
    <Header fixed height={60}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          <ThemeToggle />
        </div>
        <div>
          Language: {language}
          <Button onClick={() => setLanguage("shell")}>curl</Button>
          <Button onClick={() => setLanguage("javascript")}>JavaScript</Button>
        </div>
      </div>
    </Header>
  );
}
