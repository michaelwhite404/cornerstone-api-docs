import { ResourceSectionProps } from "../../../types";
import ResourceSection from "../../ResourceSection";

const props: ResourceSectionProps = {
  heading: "Update Device",
  id: "update-device",
  description: "Updates device properties",
  resource: "devices",
  request: {
    method: "PATCH",
    path: "/device/:deviceId",
  },
  codeBlocks: {
    shell: {
      headers: `"content-type: application/json"`,
    },
    javascript: {
      resource: "devices.update",
      returnType: "Device",
      variableName: "device",
    },
    response: `{
  "_id": "62b352db01e85857874bd104",
  "name": "AP 01",
  "brand": "Apple",
  "model": "Apple M2 Macbook Pro",
  "serialNumber": "C02L13ECF8J2",
  "macAddress": "AA:81:4C:5D:F9:16",
  "status": "Not Available",
  "deviceType": "laptop",
  "checkedOut": false,
  "slug": "ap-01",
  "checkouts": [],
  "errorLogs": [],
}`,
  },
  response: {
    type: "code",
    text: "Device",
  },
  parameters: [
    {
      name: "deviceId",
      description: "The id of the device to find",
      type: "String",
      in: "path",
      example: "62b352db01e85857874bd104",
      required: true,
    },
    {
      name: "data",
      description: "An object of fields to update",
      type: "Object",
      in: "body",
      example: "",
      required: true,
    },
  ],
  data: {
    name: "Apple M2 Macbook Pro",
    status: "Not Available",
  },
};

export const UpdateDevice = () => <ResourceSection {...props} />;
