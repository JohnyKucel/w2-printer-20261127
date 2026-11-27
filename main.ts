import { mkdirSync, writeFileSync } from "node:fs";

const entry = "You call it a paper jam. I call it the only break I've had in six years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
