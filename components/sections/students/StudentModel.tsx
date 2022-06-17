import React from "react";
import { modelTable } from "../../../tables/students";
import { H2 } from "../../headings";
import Table from "../../Table";

export function StudentModel() {
  return (
    <section id="model">
      <H2>Model</H2>
      <Table headers={modelTable.headers} data={modelTable.data} />
    </section>
  );
}
