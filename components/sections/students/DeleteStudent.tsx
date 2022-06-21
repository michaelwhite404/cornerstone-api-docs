import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import CodeParam from "../../CodeParam";
import { H3 } from "../../headings";
import Section from "../../Section";
import Table from "../../Table";

export function DeleteStudent() {
  return (
    <Section heading="Delete Student" id="delete-student">
      <CodeBlock language="shell" aboveBlock="Example cURL Request">
        {`curl -X DELETE https://app.cornerstone-schools.org/api/students/5f43ba6edca18d644cbf6c65 \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>"`}
      </CodeBlock>
      <CodeBlock language="javascript" aboveBlock="Example cURL Request">
        {`const CStone = require("cstone-dc");
const cstone = new CStone({token: '<YOUR TOKEN HERE>'});

// Promise <{message: string}>
const response = cstone.students.delete({
  studentId: "5f43ba6edca18d644cbf6c65"

});

response.then(r => console.log(r.message));
`}
      </CodeBlock>
      <CodeBlock language="json" aboveBlock="Example JSON Response">
        {`{ message: "1 student has been deleted" }`}
      </CodeBlock>
      <p>Delete a student</p>
      <H3>Request</H3>
      <Code>
        DELETE /students/<span className="route-param">:studentId</span>
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
            description: "The id of the student to delete",
          },
        ]}
      />
      <H3>Response</H3>
      <Table
        headers={[
          { label: "Name", key: "name" },
          { label: "Description", key: "description" },
        ]}
        data={[
          {
            name: <CodeParam text="message" type="String" />,
            description: "A message describing the the event",
          },
        ]}
      />
    </Section>
  );
}
