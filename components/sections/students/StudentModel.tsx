import React from "react";
import { modelTable } from "../../../tables/students";
import Section from "../../Section";
import Table from "../../Table";

export function StudentModel() {
  const { data, headers } = modelTable;
  return (
    <Section heading="Model" id="model">
      <Table headers={headers} data={data} />
    </Section>
  );
}
