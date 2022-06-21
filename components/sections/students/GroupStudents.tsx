import React from "react";
import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import { H3 } from "../../headings";
import Section from "../../Section";

export function GroupStudents() {
  return (
    <Section heading="Group Students by Grade" id="group-students-by-grade">
      <CodeBlock language="shell" aboveBlock="Example cURL Request">
        {`curl https://app.cornerstone-schools.org/api/students/group \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>"`}
      </CodeBlock>
      <CodeBlock language="javascript" aboveBlock="Example Javascript Request">
        {`const CStone = require("cstone-dc")
const cstone = new CStone({token: '<YOUR TOKEN HERE>'})

// Promise <Class[]>
const classes = cstone.students.group();

classes.then(c => console.log(c))`}
      </CodeBlock>
      <CodeBlock language="json" aboveBlock="Example JSON Response">
        {`[
  {
    "count": 15,
    "grade": 0,
    "students": [
      {
        "id": "62b1a2e2ddd0d3f3730f206d",
        "fullName": "Candice Harvey"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f206e",
        "fullName": "John Butler"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f206f",
        "fullName": "Diane Washington"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f2070",
        "fullName": "Martin Powell"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f2071",
        "fullName": "Brenda Richardson"
      },
      // 10 more students
    ]
  },
  {
    "count": 14,
    "grade": 0,
    "students": [
      {
        "id": "62b1a2e2ddd0d3f3730f2072",
        "fullName": "Michelle Adams"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f2073",
        "fullName": "Alexandra Norton"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f2074",
        "fullName": "Brian McCormick"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f2075",
        "fullName": "Theodore Phelps"
      },
      {
        "id": "62b1a2e2ddd0d3f3730f2076",
        "fullName": "Katherine Hawkins"
      },
      // 9 more students
    ]
  },
  // 11 more classes
]`}
      </CodeBlock>
      <p>Groups students by Grade</p>
      <H3>Request</H3>
      <Code>GET /students/group</Code>
      <H3>Parameters</H3>
      <p>There are no parameters with this request</p>
      <H3>Response</H3>
      <Code>Class[]</Code>
    </Section>
  );
}
