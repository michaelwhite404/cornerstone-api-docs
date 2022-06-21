import React from "react";
import Code from "../../Code";
import CodeBlock from "../../CodeBlock";
import { H3 } from "../../headings";
import Section from "../../Section";

export const GetAllDevices = () => {
  return (
    <Section heading="Get All Devices" id="get-all-devices">
      <CodeBlock language="shell" aboveBlock="Example cURL Request">
        {`curl https://app.cornerstone-schools.org/api/devices \\
  -H "Authorization: Bearer <YOUR TOKEN HERE>"
`}
      </CodeBlock>
      <CodeBlock language="javascript" aboveBlock="Example Javascript Request">
        {`const CStone = require("cstone-dc")
const cstone = new CStone({token: '<YOUR TOKEN HERE>'})

// Promise <[Device]>
const devices = cstone.device.list();

devices.then(device => console.log(device));`}
      </CodeBlock>
      <CodeBlock language="json" aboveBlock="Example JSON Response">
        {`[
  {
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
  },        
  {
    "_id": "5f437327dca18d644cbf6b54",
    "name": "AC 32",
    "brand": "Acer",
    "model": "Acer Chromebook 11 (C732, C732T, C732L, C732LT)",
    "serialNumber": "NXGUKAA001920164877600",
    "macAddress": "04:EA:56:42:8B:0A",
    "status": "Available",
    "deviceType": "chromebook",
    "checkedOut": false,
    "autoUpdateExpiration": "June 2024",
    "slug": "ac-32",
    "lastCheckOut": "2020-08-27T14:48:53.743Z",
    "lastUser": {
      "_id": "5f43ba6edca18d644cbf6c6b",
      "fullName": "Kynnedy Roseboro",
      "grade": 11
    },
    "lastCheckIn": "2021-06-21T19:51:48.115Z",
    "directoryId": "3305c082-cfb4-4f82-8838-dd6f6a7b8266",
    "checkouts": [
      {
        "checkedIn": true,
        "_id": "6018ee989d3d431ba835523e",
        "device": "5f437327dca18d644cbf6b54",
        "checkOutDate": "2020-08-27T14:48:53.743Z",
        "deviceUser": {
          "_id": "5f43ba6edca18d644cbf6c6b",
          "fullName": "Kynnedy Roseboro",
        },
        "teacherCheckOut": {
          "_id": "5f46c201ed966900171f2afd",
          "fullName": "Michael White",
        },
        "checkInDate": "2021-06-21T19:51:48.122Z",
        "teacherCheckIn": {
          "_id": "602ad79296edc009f45d092b",
          "fullName": "Rachel Baber",
        },
        "status": "Checked In",
        "id": "6018ee989d3d431ba835523e"
      }
    ],
    "errorLogs": [],
  },
  // 98 more devices
]`}
      </CodeBlock>
      <p>Retrieve all devices</p>
      <H3>Request</H3>
      <Code>GET /devices</Code>
      <H3>Parameters</H3>

      <H3>Response</H3>
      <Code>[Device]</Code>
    </Section>
  );
};
