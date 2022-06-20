import React from "react";
import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import { H3 } from "../../headings";
import Section from "../../Section";
import Table from "../../Table";

export function CreateStudent() {
  return (
    <Section heading="Create Student" id="create-student">
      <CodeBlock language="shell" aboveBlock="Example cURL Request">
        {`curl -X POST https://app.cornerstone-schools.org/api/students \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>" \\
  -H "content-type: application/json" \\
  --data-raw '{
    "firstName": "Fake",
    "lastName": "Student",
    "schoolEmail": "fake.student@cornerstone-schools.org",
    "status": "Active",
    "grade": 7
  }'`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Javascript Request" language="javascript">
        {`const CStone = require("cstone-dc")
const cstone = new CStone({token: '<YOUR TOKEN HERE>'})

// Promise <Student>
const student = cstone.students.create({
  data: {
    firstName: "Fake",
    lastName: "Student",
    schoolEmail: "fake.student@cornerstone-schools.org",
    status: "Active",
    grade: 7
  }
})

student.then(s => console.log(s))
`}
      </CodeBlock>
      <CodeBlock language="json" aboveBlock="Example JSON Response">
        {`{
  "_id": "5f43ba6edca18d644cbf6c65",
  "firstName": "Fake",
  "lastName": "Student",
  "fullName": "Fake Student",
  "grade": 7,
  "schoolEmail": "fake.student@cornerstone-schools.org",
  "customID": null,
  "status": "Active",
  "slug": "fake-student",
  "aftercare": false,
}`}
      </CodeBlock>
      <p>Create a student</p>
      <H3>Request</H3>
      <Code>POST /students</Code>
      <H3>Parameters</H3>
      <Table
        headers={[
          { label: "Name", key: "name" },
          { label: "In", key: "in" },
          { label: "Description", key: "description" },
        ]}
        data={[
          {
            name: (
              <>
                <Code>data</Code>
                <span className="param-type">Object</span>
                <div className="param-required">required</div>
              </>
            ),
            in: "body",
            description: "The data used to create a student",
          },
        ]}
      />
      <H3>Response</H3>
      <Code>Student</Code>
    </Section>
  );
}
