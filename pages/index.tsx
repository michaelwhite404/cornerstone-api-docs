import { Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import httpVerbs from "../utils/httpVerbs";
import Code from "../components/Code";
import Table from "../components/Table";
import { H1, H2, H3 } from "../components/headings";
import CodeBlock from "../components/CodeBlock";

const tableHeaders = [
  { label: "Verb", key: "method" },
  { label: "Description", key: "description" },
];

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
      <H2>HTTP Verbs</H2>
      <Table headers={tableHeaders} data={httpVerbs} />
      <H2>Parameters</H2>
      <p>Requests may have both required and/or optional parameters.</p>
      <p>
        Depending on the HTTP verb, the parameters may be in either the URL itself, or in the
        request body.
      </p>
      <H3>Route Params</H3>
      <p>
        Route params will be defined as part of the path for a given API endpoint. They will be
        highlighted in a separate color, and prefixed with a colon ( <Code>:</Code> ) for easy
        visibility.
      </p>
      <p>For example:</p>
      <Code>
        GET /textbooks/<span className="route-param">:textbook_id</span>/books
      </Code>
      <p>
        In this example, <Code>textbook_id</Code> is the route param.
      </p>
      <H3>Query String</H3>
      <p>
        <Code>GET</Code> requests will have their parameters passed in via the query string.
      </p>
      <p>For example:</p>
      <p>
        <Code>/info?foo=bar&abc=123</Code>
      </p>
      <p>
        In this example, the query string contains two parameters, <Code>foo</Code> and{" "}
        <Code>abc</Code>.
      </p>
      <CodeBlock language="shell">{codeStr}</CodeBlock>
      <CodeBlock language="javascript">function ME() &#123; &#125;</CodeBlock>
      <H3>Request Body</H3>
      <p>
        All other requests will have their parameters passed in as part of the JSON-formatted
        request body. <Code>POST</Code>, <Code>PUT</Code> and <Code>PATCH</Code> requests including
        JSON-formatted request bodies should ensure the <Code>Content-Type</Code> header is set to{" "}
        <Code>application/json</Code>.
      </p>
    </>
  );
};

export default Home;
