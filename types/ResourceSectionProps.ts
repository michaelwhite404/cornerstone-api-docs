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
  response?: any;
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
