import { ThemeProvider } from "styled-components";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "remix";
import GlobalStyle from "./styles/global";
import themes from "./styles/themes";
import Layout from "./components/Layout";


export function meta() {
  return { title: "Kamra", description: "web" };
}

export const unstable_shouldReload = () => false;

export function ErrorBoundary({ error }) {
  console.error(error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        Root error.
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  return (
  <html lang="en">
    <head>
      <meta title="Kamra" />
      <meta descriptions="webhome" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      {typeof document === "undefined"
        ? "__STYLES__"
      : null}
    </head>
    <ThemeProvider theme={themes.peach}>
      <GlobalStyle />
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </ThemeProvider>
  </html>
  );
}
