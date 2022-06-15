import Code from "../../components/Code";
import { TableProps } from "../../components/Table";

export const modelTable: TableProps = {
  headers: [
    {
      label: "Field",
      key: "field",
    },
    {
      label: "Type",
      key: "type",
    },
    {
      label: "Description",
      key: "description",
    },
  ],
  data: [
    { field: <Code>_id</Code>, type: "ObjectId", description: "The student's id" },
    { field: <Code>firstName</Code>, type: "String", description: "The student's first name" },
    { field: <Code>lastName</Code>, type: "String", description: "The student's last name" },
    { field: <Code>fullName</Code>, type: "String", description: "The student's full name" },
    {
      field: <Code>status</Code>,
      type: "Student Status",
      description: "The student's current status",
    },
    { field: <Code>grade</Code>, type: "Number", description: "The student's current grade" },
    { field: <Code>schoolEmail</Code>, type: "String", description: "The student's school email" },
    {
      field: <Code>personalEmail</Code>,
      type: "String",
      description: "The student's personal email",
    },
    { field: <Code>customID</Code>, type: "String", description: "The student's RenWeb ID" },
    { field: <Code>mainPhoto</Code>, type: "String", description: "The student's photo" },
    {
      field: <Code>slug</Code>,
      type: "String",
      description: " The student's URL ending identifier",
    },
    {
      field: <Code>aftercare</Code>,
      type: "Boolean",
      description: "Whether the student is in aftercare of not",
    },
  ],
};
