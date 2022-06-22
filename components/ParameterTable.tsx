import { ParameterData } from "../types";
import CodeParam from "./CodeParam";
import Table from "./Table";

export default function ParameterTable(props: ParameterTableProps) {
  const data = props.data.map((d) => ({
    name: <CodeParam type={d.type} text={d.name} required={d.required} />,
    in: d.in,
    description: d.description,
  }));

  return (
    <Table
      headers={[
        { label: "Name", key: "name" },
        { label: "In", key: "in" },
        { label: "Description", key: "description" },
      ]}
      data={data}
    />
  );
}

interface ParameterTableProps {
  data: ParameterData[];
}
