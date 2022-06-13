import { AppShell } from "@mantine/core";
import TableOfContents from "./shell/TableOfContents";
import TopBar from "./shell/TopBar";

const AppContainer = (props: AppContainerProps) => {
  return (
    <AppShell header={<TopBar />} navbar={<TableOfContents />}>
      <div className="main-container">{props.children}</div>
    </AppShell>
  );
};

interface AppContainerProps {
  children: React.ReactNode;
}

export default AppContainer;
