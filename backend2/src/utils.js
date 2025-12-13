import fs from "fs";
import path from "path";

export const readJSON = (filename) => {
  // Changed from "src/data" to just "data"
  const filePath = path.join(process.cwd(), "data", filename);
  const raw = fs.readFileSync(filePath);
  return JSON.parse(raw);
};

export const writeJSON = (filename, data) => {
  const filePath = path.join(process.cwd(), "data", filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};