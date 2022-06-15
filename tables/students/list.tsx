import Code from "../../components/Code";
import { TableProps } from "../../components/Table";

export const listQueryTable: TableProps = {
  headers: [
    { label: "Parameter", key: "parameter" },
    { label: "Description", key: "description" },
    { label: "Default", key: "default" },
  ],
  data: [
    {
      parameter: <Code>limit</Code>,
      description: "Limits the amount of students to return to the given number",
      default: 100,
    },
    {
      parameter: <Code>page</Code>,
      description: "-------------",
      default: 1,
    },
    {
      parameter: <Code>fields</Code>,
      description: "A comma seperated list of fields to limit each object to",
    },
    {
      parameter: <Code>sort</Code>,
      description:
        "A comma seperated list of fields to sort by. Adding a negative sign before a field will sort in descending order",
    },
  ],
};
