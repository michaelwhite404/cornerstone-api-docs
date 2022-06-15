import { NextPage } from "next";
import Head from "next/head";
import Code from "../components/Code";
import CodeBlock from "../components/CodeBlock";
import { H1, H2, H3 } from "../components/headings";
import Table, { TableProps } from "../components/Table";

const modelTable: TableProps = {
  headers: [
    {
      label: "Field",
      key: "field",
    },
    {
      label: "Type",
      key: "type",
    },
    {
      label: "Description",
      key: "description",
    },
  ],
  data: [
    { field: <Code>_id</Code>, type: "ObjectId", description: "The student's id" },
    { field: <Code>firstName</Code>, type: "String", description: "The student's first name" },
    { field: <Code>lastName</Code>, type: "String", description: "The student's last name" },
    { field: <Code>fullName</Code>, type: "String", description: "The student's full name" },
    {
      field: <Code>status</Code>,
      type: "Student Status",
      description: "The student's current status",
    },
    { field: <Code>grade</Code>, type: "Number", description: "The student's current grade" },
    { field: <Code>schoolEmail</Code>, type: "String", description: "The student's school email" },
    {
      field: <Code>personalEmail</Code>,
      type: "String",
      description: "The student's personal email",
    },
    { field: <Code>customID</Code>, type: "String", description: "The student's RenWeb ID" },
    { field: <Code>mainPhoto</Code>, type: "String", description: "The student's photo" },
    {
      field: <Code>slug</Code>,
      type: "String",
      description: " The student's URL ending identifier",
    },
    {
      field: <Code>aftercare</Code>,
      type: "Boolean",
      description: "Whether the student is in aftercare of not",
    },
  ],
};

const Students: NextPage = () => {
  return (
    <>
      <Head>
        <title>Students | Cornerstone Developer Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <H1>Students</H1>
      <H2 id="model">Model</H2>
      <Table headers={modelTable.headers} data={modelTable.data} />
      <H2>Get All Students</H2>
      <p>Lists all students</p>
      <H3>Request</H3>
      <Code>GET /students</Code>
      <CodeBlock aboveBlock="Example Request" language="shell">
        {`curl https://app.cornerstone-schools.org/api/students \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>" \\
  -H 'Content-Type: application/json'  `}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Request" language="javascript">
        {`const CStone = require("cstone-dc")
const cstone = new CStone({token: '<YOUR TOKEN HERE>'})

// Promise <[ Students ]>
const students = cstone.list({
  status: "Active"
})

students.then(s => console.log(s))
`}
      </CodeBlock>
      <H3>Path Parameters</H3>
      <p>There are no path parameters for this request</p>
      <H3>Query Parameters</H3>
    </>
  );
};

export default Students;
