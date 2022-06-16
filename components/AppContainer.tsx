import { AppShell } from "@mantine/core";
import TableOfContents from "./shell/TableOfContents";
import TopBar from "./shell/TopBar";

const AppContainer = (props: AppContainerProps) => {
  return (
    <AppShell navbar={<TableOfContents />} styles={{ main: { padding: 0 } }}>
      <div className="main-container">
        <TopBar />
        {props.children}
      </div>
    </AppShell>
  );
};

interface AppContainerProps {
  children: React.ReactNode;
}

export default AppContainer;
