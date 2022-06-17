import React from "react";
import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import { H3 } from "../../headings";
import Section from "../../Section";

export default function Parameters() {
  return (
    <Section heading="Parameters" id="parameters">
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
      <CodeBlock language="shell">{`curl https://app.cornerstone-schools.org/api/ \\
  -H "Content-Type: application/json" \\
  --data-binary $'{ "key": "value" }'`}</CodeBlock>
      <CodeBlock language="javascript">const CStone = require(&quot;cstone-dc&quot;)</CodeBlock>
      <H3>Request Body</H3>
      <p>
        All other requests will have their parameters passed in as part of the JSON-formatted
        request body. <Code>POST</Code>, <Code>PUT</Code> and <Code>PATCH</Code> requests including
        JSON-formatted request bodies should ensure the <Code>Content-Type</Code> header is set to{" "}
        <Code>application/json</Code>.
      </p>
    </Section>
  );
}
