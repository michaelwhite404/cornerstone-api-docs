import { NextPage } from "next";
import { H1 } from "../components/headings";
import {
  CreateDevice,
  DeviceModel,
  GetAllDevices,
  GetDevice,
  UpdateDevice,
} from "../components/sections/devices";

const Devices: NextPage = () => {
  return (
    <>
      <H1>Devices</H1>
      <DeviceModel />
      <GetAllDevices />
      <GetDevice />
      <CreateDevice />
      <UpdateDevice />
    </>
  );
};

export default Devices;
