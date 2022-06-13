import { AppShell, Button, Header, useMantineColorScheme } from "@mantine/core";
import TableOfContents from "./shell/TableOfContents";

const AppContainer = (props: AppContainerProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <AppShell
      header={
        <Header fixed height={60}>
          Header{" "}
          <Button
            // variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? "Toggle to light" : "Toggle to dark"}
          </Button>
        </Header>
      }
      navbar={<TableOfContents />}
    >
      <div
        style={{
          marginLeft: 250,
          marginTop: 60,
          marginRight: "40%",
          paddingLeft: 15,
        }}
      >
        {props.children}
      </div>
    </AppShell>
  );
};

interface AppContainerProps {
  children: React.ReactNode;
}

export default AppContainer;
