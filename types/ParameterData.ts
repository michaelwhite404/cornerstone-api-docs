export interface ParameterData {
  name: string;
  type: string;
  in: string;
  required?: boolean;
  description: string;
  example: string;
}

// interface BodyParameter {
//   in: "body";
//   required: true;
//   example: Object;
// }
