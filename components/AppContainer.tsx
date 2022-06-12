import { AppShell, Button, Navbar, Header, useMantineColorScheme } from "@mantine/core";

const AppContainer = (props: AppContainerProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <AppShell
      header={
        <Header height={60}>
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
      navbar={
        <Navbar width={{ base: 200 }}>
          <Navbar.Section>
            <ul>API Reference</ul>
          </Navbar.Section>
        </Navbar>
      }
    >
      {props.children}
    </AppShell>
  );
};

interface AppContainerProps {
  children: React.ReactNode;
}

export default AppContainer;
