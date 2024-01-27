import { writeFileSync } from "node:fs";
import { dirname } from "./database";
import { getDataHoliday } from "./model/holidayModel";

const main = async () => {
  const country = process.argv[2];

  const data = await getDataHoliday(country);
};

main();
