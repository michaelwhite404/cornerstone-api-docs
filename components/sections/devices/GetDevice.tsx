import { ResourceSectionProps } from "../../../types";
import ResourceSection from "../../ResourceSection";

const props: ResourceSectionProps = {
  heading: "Get Device",
  id: "get-device",
  description: "Retrieves a device's properties",
  resource: "devices",
  request: {
    method: "GET",
    path: "/devices/:deviceId",
  },
  parameters: [
    {
      name: "deviceId",
      type: "String",
      in: "path",
      required: true,
      description: "The id of the device to find",
      example: "5f437327dca18d644cbf6b74",
    },
  ],
  response: {
    type: "table",
    data: [{ name: "device", type: "Device", description: "The queried device" }],
  },
  codeBlocks: {
    javascript: {
      resource: "devices.get",
      variableName: "device",
      returnType: "Device",
    },
    response: `{
  "_id": "5f437327dca18d644cbf6b74",
  "name": "AS 14",
  "brand": "ASUS",
  "model": "ASUS Chromebook C300SA / C301SA",
  "serialNumber": "H1N0CXIRR00B04C",
  "macAddress": "4C:80:93:C5:21:2D",
  "status": "Not Available",
  "deviceType": "chromebook",
  "checkedOut": false,
  "slug": "as-14",
  "autoUpdateExpiration": "June 2022",
  "checkouts": [],
  "errorLogs": [],
}`,
  },
};

export function GetDevice() {
  return <ResourceSection {...props} />;
}
