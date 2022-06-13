import { useMantineTheme } from "@mantine/core";

export default function Table(props: TableProps) {
  const theme = useMantineTheme();
  const { headers, data } = props;
  return (
    <table
      className={`custom-table ${theme.colorScheme === "dark" ? "dark" : ""}`}
      cellSpacing="0"
      cellPadding="0"
    >
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            {headers.map((header, i) => (
              <td key={i}>{d[header.key] || "-"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export interface TableProps {
  headers: TableHeader[];
  data: any[];
}

interface TableHeader {
  label: string;
  key: string;
}
