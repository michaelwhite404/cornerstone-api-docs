import { modelTable } from "../../../tables/devices";
import Section from "../../Section";
import Table from "../../Table";

export function DeviceModel() {
  const { data, headers } = modelTable;
  return (
    <Section heading="Model" id="model">
      <Table headers={headers} data={data} />
    </Section>
  );
}
