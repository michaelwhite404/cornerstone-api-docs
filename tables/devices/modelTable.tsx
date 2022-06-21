import Code from "../../components/Code";
import CodeParam from "../../components/CodeParam";
import { TableProps } from "../../components/Table";

export const modelTable: TableProps = {
  headers: [
    {
      label: "Field",
      key: "field",
    },
    {
      label: "Description",
      key: "description",
    },
  ],
  data: [
    { field: <CodeParam type="ObjectId" text="_id" />, description: "The device id" },
    { field: <CodeParam type="String" text="name" />, description: "The device name" },
    { field: <CodeParam type="String" text="brand" />, description: "The device brand (Ex. HP)" },
    {
      field: <CodeParam type="String" text="model" />,
      description: "The device model (Ex. HP Chromebook 14 G5)",
    },
    {
      field: <CodeParam type="String" text="serialNumber" />,
      description: "The device serial number",
    },
    {
      field: <CodeParam type="String" text="macAddress" />,
      description: "The device mac address",
    },
    {
      field: <CodeParam type="String" text="serialNumber" />,
      description: "The device serial number",
    },
    {
      field: <CodeParam type="DeviceStatus" text="status" />,
      description: "The current status of the device",
    },
    {
      field: <CodeParam type="String" text="serialNumber" />,
      description: "The device serial number",
    },
    {
      field: <CodeParam type="String" text="deviceType" />,
      description: "The device serial number",
    },
    {
      field: <CodeParam type="String" text="slug" />,
      description: "The device URL ending identifier",
    },
    {
      field: <CodeParam type="String" text="autoUpdateExpiration" />,
      description: "The date the device stops auto-updating (Only used for Chromebooks)",
    },
    {
      field: <CodeParam type="Boolean" text="checkedOut" />,
      description: (
        <>
          <span style={{ fontStyle: "italic", color: "red" }}>
            Deprecated - Use status property.
          </span>
          <br />
          <br />
          Whether the device is currently checked out
        </>
      ),
    },
    {
      field: <CodeParam type="Date" text="dueDate" />,
      description: "The due date for a checked out device",
    },
    {
      field: <CodeParam type="Object" text="lastUser" />,
      description: "The due date for a checked out device",
    },
    {
      field: <CodeParam type="Object" text="teacherCheckOut" />,
      description: "The last teacher to check out a device",
    },
    {
      field: <CodeParam type="Object" text="teacherCheckIn" />,
      description: "The last teacher to check in a device",
    },
    {
      field: <CodeParam type="[Object]" text="checkouts" />,
      description: "An array of past checkouts from a device",
    },
    {
      field: <CodeParam type="[Object]" text="errorLogs" />,
      description: "An array of past errorlogs from a device",
    },
    {
      field: <CodeParam type="String" text="directoryId" />,
      description: "The id given to a Chromebook by Google",
    },
  ],
};
