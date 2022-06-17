import React from "react";
import httpVerbs from "../../../utils/httpVerbs";
import Section from "../../Section";
import Table from "../../Table";

const tableHeaders = [
  { label: "Verb", key: "method" },
  { label: "Description", key: "description" },
];

export function HttpVerbs() {
  return (
    <Section heading="HTTP Verbs" id="http-verbs">
      <Table headers={tableHeaders} data={httpVerbs} />
    </Section>
  );
}
