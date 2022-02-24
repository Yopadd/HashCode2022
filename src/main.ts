import { parseInput } from "./parser";
import { writeResponse } from "./writer";

async function main() {
  const [, input] = await parseInput(process.argv[2]);

  await writeResponse();
}

main();
