import Code from "./Code";

export default function CodeParam(props: CodeParamProps) {
  const { text, type, required } = props;
  return (
    <div>
      <Code>{text}</Code>
      <span className="param-type">{type}</span>
      {required && <div className="param-required">required</div>}
    </div>
  );
}

interface CodeParamProps {
  text: string;
  type: string;
  required?: boolean;
}
