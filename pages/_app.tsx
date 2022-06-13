import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { DeepPartial } from "@mantine/styles/lib/theme/types/DeepPartial";
import AppContainer from "../components/AppContainer";
import "../styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  useLocalStorage({
    key: "language",
    defaultValue: "shell",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const headings: DeepPartial<MantineTheme["headings"]> = {
    fontWeight: 400,
    sizes: {
      h1: { fontSize: 48 },
      h2: { fontSize: 32 },
      h3: { fontSize: 22 },
    },
  };

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme, headings }}>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
