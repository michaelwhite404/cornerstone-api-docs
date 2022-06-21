import { NextPage } from "next";
import H1 from "../components/headings/H1";
import { DeviceModel } from "../components/sections/devices";

const Devices: NextPage = () => {
  return (
    <>
      <H1>Devices</H1>
      <DeviceModel />
    </>
  );
};

export default Devices;
