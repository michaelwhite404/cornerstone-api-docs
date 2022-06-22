import { ParameterData } from ".";

export interface ResourceSectionProps {
  heading: string;
  id: string;
  description: string;
  resource: string;
  request: {
    method: HTTPVerb;
    path: Path;
  };
  parameters?: ParameterData[];
  data?: Object;
  response: Response;
  codeBlocks: {
    shell: {
      headers?: string | string[];
    };
    javascript: {
      resource: string;
      variableName: string;
      returnType: string;
    };
    response: string;
  };
}

type HTTPVerb = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Path = `/${string}`;

interface CodeResponse {
  type: "code";
  text: string;
}

interface TableResponse {
  type: "table";
  data: { name: string; type: string; description: string }[];
}

type Response = CodeResponse | TableResponse;
