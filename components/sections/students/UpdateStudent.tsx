import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import CodeParam from "../../CodeParam";
import { H3 } from "../../headings";
import Section from "../../Section";
import Table from "../../Table";

export function UpdateStudent() {
  return (
    <Section heading="Update Student" id="update-student">
      <CodeBlock aboveBlock="Example cURL Request" language="shell">
        {`curl -X PATCH https://app.cornerstone-schools.org/api/students/5f43ba6edca18d644cbf6c65 \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>" \\
  -H "content-type: application/json" \\
  --data-raw '{
    "firstName": "Real",
    "grade": 8
  }'
        `}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Javascript Request" language="javascript">
        {`const CStone = require("cstone-dc");
const cstone = new CStone({token: '<YOUR TOKEN HERE>'});

// Promise <Student>
const student = cstone.students.update({
  studentId: "5f43ba6edca18d644cbf6c65"
  data: {
    firstName: "Real",
    grade: 8
  }
});

student.then(s => console.log(s));`}
      </CodeBlock>
      <CodeBlock aboveBlock="Example Response" language="json">
        {`{
  "_id": "5f43ba6edca18d644cbf6c65",
  "firstName": "Real",
  "lastName": "Student",
  "fullName": "Fake Student",
  "grade": 8,
  "schoolEmail": "fake.student@cornerstone-schools.org",
  "customID": null,
  "status": "Active",
  "slug": "fake-student",
  "aftercare": false,
}`}
      </CodeBlock>
      <p>Updates a student</p>
      <H3>Request</H3>
      <Code>
        PATCH /students/<span className="route-param">:studentId</span>
      </Code>
      <H3>Parameters</H3>
      <Table
        headers={[
          { label: "Name", key: "name" },
          { label: "In", key: "in" },
          { label: "Description", key: "description" },
        ]}
        data={[
          {
            name: <CodeParam text="studentId" type="String" required />,
            in: "path",
            description: "The id of the student to update",
          },
          {
            name: <CodeParam text="data" type="Object" required />,
            in: "body",
            description: "An object of fields to update",
          },
        ]}
      />
      <H3>Response</H3>
      <Code>Student</Code>
    </Section>
  );
}
