import { Fragment } from "react";
import { format as prettyFormat } from "pretty-format";
import stringifyObject from "stringify-object";
import { ResourceSectionProps } from "../types";
import Code from "./Code";
import CodeBlock from "./CodeBlock";
import { H2, H3 } from "./headings";
import ParameterTable from "./ParameterTable";
import Table from "./Table";
import CodeParam from "./CodeParam";

export default function ResourceSection(props: ResourceSectionProps) {
  const { path, method } = props.request;
  const { javascript } = props.codeBlocks;

  const getHeaders = () => {
    const { headers } = props.codeBlocks.shell;
    if (!headers) return "";
    if (!Array.isArray(headers)) {
      return ` \\\n -H ${headers}`;
    }
    return headers.map((h) => ` \\\n  -H ${h}`).join("");
  };

  const RequestCode = () => {
    const arr = path.split("/").slice(1);
    const PATH = arr.map((part, i) => {
      if (part.startsWith(":"))
        return (
          <Fragment key={i}>
            /<span className="route-param">{part}</span>
          </Fragment>
        );
      return <Fragment key={i}>/{part}</Fragment>;
    });
    return (
      <Code>
        {method} {PATH}
      </Code>
    );
  };

  const getPath = () => {
    let thisPath: string = path;
    if (!props.parameters) return thisPath;
    props.parameters.forEach((p) => {
      thisPath = thisPath.replace(`:${p.name}`, p.example);
    });
    return thisPath;
  };

  const createParamObject = () => {
    const paramsObj: { [x: string]: any } = {};
    props.parameters?.forEach((p) => {
      paramsObj[p.name] = p.example;
    });
    if (props.data) paramsObj.data = props.data;
    return paramsObj;
  };

  const jsParamObj = stringifyObject(createParamObject(), {
    singleQuotes: false,
    indent: "  ",
  });

  const getShellData = () => {
    if (!props.data) return "";
    const shellDataStr = prettyFormat(props.data, {
      printBasicPrototype: false,
      indent: 4,
    });
    const str = shellDataStr.slice(0, -1) + "  " + shellDataStr.slice(-1);
    return ` \\\n  --data-raw '${str}'`;
  };

  return (
    <section id={props.id}>
      <H2 hash={props.id}>{props.heading}</H2>
      <CodeBlock language="shell" aboveBlock="Example cURL Request">
        {`curl${
          method !== "GET" ? ` -X ${method}` : ""
        } https://app.cornerstone-schools.org/api${getPath()} \\\n  -H "Authorization: Bearer <YOUR TOKEN HERE>"${getHeaders()}${getShellData()}`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Request" language="javascript">
        {`const CStone = require("cstone-dc");
const cstone = new CStone({token: "<YOUR TOKEN HERE>"});

// Promise <${javascript.returnType}>
const ${javascript.variableName} = cstone.${javascript.resource}(${jsParamObj});

${javascript.variableName}.then((${javascript.variableName.slice(
          0,
          1
        )}) => console.log(${javascript.variableName.slice(0, 1)}))`}
      </CodeBlock>
      <CodeBlock language="json" aboveBlock="Example JSON Response">
        {props.codeBlocks.response}
      </CodeBlock>
      <p>{props.description}</p>
      <H3>Request</H3>
      <RequestCode />
      <H3>Parameters</H3>
      {props.parameters && props.parameters.length > 0 ? (
        <ParameterTable data={props.parameters} />
      ) : (
        <p>There are no parameters with this request</p>
      )}
      <H3>Response</H3>
      {props.response.type === "code" && <Code>{props.response.text}</Code>}
      {props.response.type === "table" && (
        <Table
          headers={[
            { label: "Name", key: "name" },
            { label: "Description", key: "description" },
          ]}
          data={props.response.data.map((d) => ({
            name: <CodeParam text={d.name} type={d.type} />,
            description: d.description,
          }))}
        />
      )}
    </section>
  );
}
