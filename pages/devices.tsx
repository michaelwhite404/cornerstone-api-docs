import { NextPage } from "next";
import { H1 } from "../components/headings";
import { DeviceModel, GetAllDevices, GetDevice } from "../components/sections/devices";

const Devices: NextPage = () => {
  return (
    <>
      <H1>Devices</H1>
      <DeviceModel />
      <GetAllDevices />
      <GetDevice />
    </>
  );
};

export default Devices;
