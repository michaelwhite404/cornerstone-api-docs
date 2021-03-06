import React from "react";
import { listQueryTable } from "../../../tables/students";
import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import { H2, H3 } from "../../headings";
import Section from "../../Section";
import Table from "../../Table";

export function GetAllStudents() {
  return (
    <Section heading="Get All Students" id="get-all-students">
      <CodeBlock aboveBlock="Example Request" language="shell">
        {`curl 'https://app.cornerstone-schools.org/api/students?status=Active&limit=2' \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>"`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Request" language="javascript">
        {`const CStone = require("cstone-dc")
const cstone = new CStone({token: '<YOUR TOKEN HERE>'})

// Promise <Student[]>
const students = cstone.students.list({
  status: "Active"
  limit: 2
});

students.then(s => console.log(s));
`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example JSON Response" language="json">
        {`[
  {
    "_id" : "61d5d74e7411400018e6eef9",
    "aftercare" : false,
    "firstName" : "Joshua",
    "fullName" : "Joshua Johnson",
    "grade" : 8,
    "id" : "61d5d74e7411400018e6eef9",
    "lastName" : "Johnson",
    "schoolEmail" : "joshua.johnson@cornerstone-schools.org",
    "slug" : "joshua-johnson",
    "status" : "Active"
  },
  {
    "_id" : "61d5c9797411400018e6edcd",
    "aftercare" : false,
    "firstName" : "Shayne",
    "fullName" : "Shayne Lyles",
    "grade" : 6,
    "id" : "61d5c9797411400018e6edcd",
    "lastName" : "Lyles",
    "schoolEmail" : "shayne.lyles@cornerstone-schools.org",
    "slug" : "shayne-lyles",
    "status" : "Active"
  }
]`}
      </CodeBlock>
      <p>Lists all students</p>
      <H3>Request</H3>
      <Code>GET /students</Code>
      <H3>Path Parameters</H3>
      <p>There are no path parameters for this request</p>
      <H3>Query Parameters</H3>
      <p>
        All of the fields in the student model can be used as query parameters. Here are additional
        query parameter that can be used:
      </p>
      <Table headers={listQueryTable.headers} data={listQueryTable.data}></Table>
      <H3>Response</H3>
      <Code>Student[]</Code>
    </Section>
  );
}
