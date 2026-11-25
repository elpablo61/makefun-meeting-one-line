// The Meeting That Should Have Been One Line
// Writes the single winning sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 11:02, Dewi read aloud the slide Budi emailed at 10:58, word for word, to the people Budi emailed it to.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
// One sentence, 107 bytes, no trailing newline: the gate counts 1-200 chars.
writeFileSync(outFile, LINE, "utf8");
