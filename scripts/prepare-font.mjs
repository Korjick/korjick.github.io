// Extract the regular face from the supplied TrueType collection for browsers.
// TTC table offsets are absolute; standalone TTF offsets must be rebuilt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const source = readFileSync(new URL("../public/fonts/Monocraft-nerd-fonts-patched.ttc", import.meta.url));
if (source.toString("ascii", 0, 4) !== "ttcf") throw new Error("Expected a TrueType collection");
const face = source.readUInt32BE(12);
const count = source.readUInt16BE(face + 4);
const records = [];
let size = 12 + count * 16;
for (let i = 0; i < count; i++) {
  const record = face + 12 + i * 16;
  const length = source.readUInt32BE(record + 12);
  records.push({ record, offset: size, length });
  size += (length + 3) & ~3;
}
const result = Buffer.alloc(size);
source.copy(result, 0, face, face + 12);
let headOffset;
for (const [i, { record, offset, length }] of records.entries()) {
  source.copy(result, 12 + i * 16, record, record + 16);
  result.writeUInt32BE(offset, 12 + i * 16 + 8);
  const originalOffset = source.readUInt32BE(record + 8);
  source.copy(result, offset, originalOffset, originalOffset + length);
  if (source.toString("ascii", record, record + 4) === "head") headOffset = offset;
}
if (headOffset === undefined) throw new Error("Missing font head table");
result.writeUInt32BE(0, headOffset + 8);
let checksum = 0;
for (let i = 0; i < result.length; i += 4) checksum = (checksum + result.readUInt32BE(i)) >>> 0;
result.writeUInt32BE((0xb1b0afba - checksum) >>> 0, headOffset + 8);
mkdirSync(new URL("../app/fonts/", import.meta.url), { recursive: true });
writeFileSync(new URL("../app/fonts/Monocraft.ttf", import.meta.url), result);
console.log(`Extracted Monocraft: ${result.length} bytes`);
