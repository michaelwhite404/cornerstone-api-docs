import { useRouter } from "next/router";
import React from "react";
import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import { H3 } from "../../headings";
import Section from "../../Section";
import Table from "../../Table";

export function GetSingleStudent() {
  const router = useRouter();
  return (
    <Section heading="Get Single Student" id="get-single-student">
      <CodeBlock aboveBlock="Example cURL Request" language="shell">
        {`curl https://app.cornerstone-schools.org/api/students/5f43ba6edca18d644cbf6c65 \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>"`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example JS Request" language="javascript">
        {`const CStone = require("cstone-dc")
const cstone = new CStone({token: '<YOUR TOKEN HERE>'})

// Promise <Student>
const student = cstone.students.get({
  studentId: "5f43ba6edca18d644cbf6c65"
})

student.then(s => console.log(s))`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Response" language="json">
        {`{
  "_id": "5f43ba6edca18d644cbf6c65",
  "firstName": "Anastasia",
  "lastName": "Clark",
  "fullName": "Anastasia Clark",
  "grade": 11,
  "schoolEmail": "anastasia.clark@cornerstone-schools.org",
  "customID": null,
  "status": "Inactive",
  "slug": "anastasia-clark",
  "aftercare": false,
}`}
      </CodeBlock>
      <p>Get a single student</p>
      <H3>Request</H3>
      <Code>
        GET /students/<span className="route-param">:studentId</span>
      </Code>
      <H3>Path Parameters</H3>
      <Table
        headers={[
          { label: "Parameters", key: "parameters" },
          { label: "Description", key: "description" },
        ]}
        data={[
          {
            parameters: (
              <>
                <Code>studentId</Code>
                <span className="param-type">String</span>
                <div className="param-required">required</div>
              </>
            ),
            description: "The id of the student to find",
          },
        ]}
      />
      <H3>Query Parameters</H3>
      <p>There are no query parameters for this request</p>
      <H3>Response</H3>
      <Code>
        <span onClick={() => router.push("#model")}>Student</span>
      </Code>
    </Section>
  );
}
