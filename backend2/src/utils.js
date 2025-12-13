import fs from "fs";
import path from "path";

export const readJSON = (filename) => {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const raw = fs.readFileSync(filePath);
  return JSON.parse(raw);
};

export const writeJSON = (filename, data) => {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
