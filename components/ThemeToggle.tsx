import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { ActionIcon, Button, useMantineColorScheme, useMantineTheme } from "@mantine/core";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === "dark" ? SunIcon : MoonIcon;

  return (
    <ActionIcon
      styles={() => ({ root: { borderRadius: 8 } })}
      size={32}
      variant="default"
      onClick={() => toggleColorScheme()}
    >
      <Icon width={24} />
    </ActionIcon>
  );
}
