export default function Table(props: TableProps) {
  const { headers, data } = props;
  return (
    <table className="custom-table" cellSpacing="0" cellPadding="0">
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

interface TableProps {
  headers: TableHeader[];
  data: any[];
}

interface TableHeader {
  label: string;
  key: string;
}
