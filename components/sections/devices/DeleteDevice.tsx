import { ResourceSectionProps } from "../../../types";
import ResourceSection from "../../ResourceSection";

const props: ResourceSectionProps = {
  heading: "Delete Device",
  id: "delete-device",
  description: "Delete a device",
  resource: "devices",
  request: {
    method: "DELETE",
    path: "/device/:deviceId",
  },
  codeBlocks: {
    javascript: {
      resource: "devices.delete",
      returnType: "{ message: string }",
      variableName: "res",
    },
    response: `{ "message": "1 device has been deleted" }`,
  },
  response: {
    type: "table",
    data: [
      { name: "message", description: "A message describing the delete event", type: "String" },
    ],
  },
  parameters: [
    {
      name: "deviceId",
      description: "The id of the device to delete",
      in: "path",
      type: "String",
      required: true,
      example: "62b352db01e85857874bd104",
    },
  ],
};

export const DeleteDevice = () => <ResourceSection {...props} />;
