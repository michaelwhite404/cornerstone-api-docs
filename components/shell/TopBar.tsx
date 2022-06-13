import { Button, Header, useMantineColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

export default function TopBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [language, setLanguage] = useLocalStorage({
    key: "language",
  });

  return (
    <Header fixed height={60}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          Header{" "}
          <Button
            // variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? "Toggle to light" : "Toggle to dark"}
          </Button>
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
