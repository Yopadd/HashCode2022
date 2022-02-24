import fs from "fs/promises";
import { resolve } from "path";

export async function parseInput(
  file: string
): Promise<[string, [[string, string[]], [string, string[]]][]]> {
  const input = await fs.readFile(resolve(`./input_data/${file}`), "utf8");
  const [header, lines] = parseLines(input);
  const groups = parseGroups(lines);
  const parsedGroups = parseGroup(groups);
  return [header, parsedGroups];
}

export function parseLines(input: string): [string, string[]] {
  const lines = input.split("\n");
  const header = lines.shift() as string;
  return [header, lines.filter((line) => line !== "")];
}

export function parseGroups(lines: string[]): [string, string][] {
  const groups = [];
  for (let i = 0; i < lines.length; i += 2) {
    groups.push([lines[i], lines[i + 1]] as [string, string]);
  }
  return groups;
}

export function parseGroup(
  groups: [string, string][]
): [[string, string[]], [string, string[]]][] {
  return groups.map((group) => {
    return group.map((str) => {
      const words = str.split(" ");
      const head = words.shift() as string;
      return [head, words];
    }) as [[string, string[]], [string, string[]]];
  });
}
