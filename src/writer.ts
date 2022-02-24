import fs from "fs/promises";
import { resolve } from "path";

export function writeResponse(data: string) {
  return fs.writeFile(resolve(`./output_data/${process.argv[2]}`), data);
}
