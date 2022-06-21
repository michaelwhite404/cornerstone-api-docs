import { NextPage } from "next";
import { H1 } from "../components/headings";
import { DeviceModel, GetAllDevices } from "../components/sections/devices";

const Devices: NextPage = () => {
  return (
    <>
      <H1>Devices</H1>
      <DeviceModel />
      <GetAllDevices />
    </>
  );
};

export default Devices;
