import { ResourceSectionProps } from "../../../types";
import ResourceSection from "../../ResourceSection";

const props: ResourceSectionProps = {
  heading: "Create Device",
  id: "create-device",
  description: "Creates a device",
  resource: "device",
  request: {
    method: "POST",
    path: "/devices",
  },
  parameters: [
    {
      name: "data",
      description: "The fields used to create a device",
      type: "Object",
      in: "body",
      required: true,
      example: "",
    },
  ],
  response: {
    type: "code",
    text: "Device",
  },
  data: {
    name: "AP 01",
    brand: "Apple",
    model: "Apple M1 Macbook Pro",
    serialNumber: "C02L13ECF8J2",
    macAddress: "AA:81:4C:5D:F9:16",
    status: "Available",
    device: "laptop",
  },
  codeBlocks: {
    shell: {
      headers: "",
    },
    javascript: {
      resource: "devices.create",
      returnType: "Device",
      variableName: "device",
    },
    response: `{
  "_id": "62b352db01e85857874bd104",
  "name": "AP 01",
  "brand": "Apple",
  "model": "Apple M1 Macbook Pro",
  "serialNumber": "C02L13ECF8J2",
  "macAddress": "AA:81:4C:5D:F9:16",
  "status": "Available",
  "deviceType": "laptop",
  "checkedOut": false,
  "slug": "ap-01",
  "checkouts": [],
  "errorLogs": [],
}`,
  },
};

export const CreateDevice = () => <ResourceSection {...props} />;
