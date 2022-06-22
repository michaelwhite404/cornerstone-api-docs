export const section = {
  heading: "",
  id: "",
  description: "",
  request: {
    method: "METHOD",
    url: "",
  },
  parameters: "",
  response: "",
  codeBlocks: {
    shell: "",
    javascript: "",
  },
};

interface ResourceSection {
  heading: string;
  id: string;
  description: string;
  request: {
    method: string;
    url: string;
  };
  parameters: any;
  response: any;
  codeBlocks: {
    shell: string;
    javascript: string;
  };
}
