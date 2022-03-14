import { Links, Meta, Scripts } from "remix";

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
        Component level error.
        <Scripts />
      </body>
    </html>
  );
}

const Home = () => {
  return <></>
};

export default Home; 
