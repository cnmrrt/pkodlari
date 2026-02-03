import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import fs from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'consola';
import 'fast-xml-parser';

const postalData = defineEventHandler(async (event) => {
  const filePath = path.join(process.cwd(), "public", "pk.json");
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  }
  throw createError({
    statusCode: 404,
    statusMessage: "Postal data not found"
  });
});

export { postalData as default };
//# sourceMappingURL=postal-data.mjs.map
