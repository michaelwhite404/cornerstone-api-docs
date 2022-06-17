import type { NextPage } from "next";
import Head from "next/head";
import { H1 } from "../components/headings";
import { HttpVerbs } from "../components/sections/home";
import Parameters from "../components/sections/home/Parameters";

const codeStr = `curl https://app.cornerstone-schools.org/api/ \\
  -H "Content-Type: application/json" \\
  --data-binary $'{ "key": "value" }'`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cornerstone Developer Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <H1>Cornerstone API Reference</H1>
      <p>
        The Cornerstone API is a HTTP JSON API and allows you to programatically add, update,
        retrieve, and delete records from various resources, allowing you to connect data.
      </p>
      <p>
        You can access the API directly via HTTP, via the official JavaScript API client, or via any
        third-party integrations for your language of choice.
      </p>
      <HttpVerbs />
      <Parameters />
    </>
  );
};

export default Home;
