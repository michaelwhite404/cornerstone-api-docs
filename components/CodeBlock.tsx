import { useLocalStorage } from "@mantine/hooks";
import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeBlock(props: CodeBlockProps) {
  const [currentLanguage] = useLocalStorage({
    key: "language",
    getInitialValueInEffect: true,
  });
  const backgroundColor = "#f6f8f9";
  return (
    <div
      className="highlight"
      style={{
        display: props.language === "json" || props.language === currentLanguage ? "block" : "none",
      }}
      data-language={props.language}
    >
      <div
        style={{
          clear: "right",
          float: "right",
          width: "40%",
          marginRight: 15,
          marginBottom: 20,
        }}
      >
        <span style={{ fontWeight: 500 }}>{props.aboveBlock}</span>
        <div
          style={{
            backgroundColor,
            padding: 5,
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          <SyntaxHighlighter
            language={props.language === "shell" ? "bash" : props.language}
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
  language: ProgrammingLanguage;
  aboveBlock?: ReactNode;
}

type ProgrammingLanguage = "shell" | "json" | "javascript";
