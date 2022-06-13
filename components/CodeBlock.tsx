import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeBlock(props: CodeBlockProps) {
  const backgroundColor = "#f6f8f9";
  return (
    <div className="highlight">
      <div
        style={{
          clear: "right",
          float: "right",
          width: "40%",
          marginRight: 15,
        }}
      >
        {props.aboveBlock}
        <div
          style={{
            backgroundColor,
            padding: 5,
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          <SyntaxHighlighter
            language="bash"
            style={lightfair}
            customStyle={{ fontSize: 13.5, backgroundColor }}
          >
            {props.children}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

interface CodeBlockProps {
  children: string | string[];
  aboveBlock?: ReactNode;
}
