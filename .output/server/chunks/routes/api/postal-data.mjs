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

let cachedData = null;
const slugify = (s) => {
  return String(s).toLocaleLowerCase("tr").replace(/[ıığüşöç]/g, (m) => ({ "\u0131": "i", "\u011F": "g", "\xFC": "u", "\u015F": "s", "\xF6": "o", "\xE7": "c" })[m] || m).replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
};
const findValue = (obj, possibleKeys) => {
  if (!obj || typeof obj !== "object") return null;
  const normalize = (s) => s.toLocaleLowerCase("tr").replace(/\s+/g, "").replace(/[ıığüşöç]/g, (m) => ({ "\u0131": "i", "\u011F": "g", "\xFC": "u", "\u015F": "s", "\xF6": "o", "\xE7": "c" })[m] || m);
  const normalizedPossible = possibleKeys.map(normalize);
  for (const key of Object.keys(obj)) {
    if (normalizedPossible.includes(normalize(key))) return obj[key];
  }
  return null;
};
const postalData = defineEventHandler(async (event) => {
  if (cachedData) {
    return cachedData;
  }
  const filePath = path.join(process.cwd(), "public", "pk.json");
  if (fs.existsSync(filePath)) {
    console.log("[Postal Data API] Initializing cache...");
    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const transformed = {};
    const entries = Array.isArray(raw) ? raw : Object.values(raw);
    entries.forEach((item) => {
      if (!item || typeof item !== "object") return;
      const city = findValue(item, ["il", "city", "\u0130L", "\u015Fehir"]);
      const dist = findValue(item, ["ilce", "district", "\u0130L\xC7E", "\u0130l\xE7e"]);
      const neigh = findValue(item, ["mahalle", "neighborhood", "semt", "MAHALLE"]);
      const zip = findValue(item, ["posta_kodu", "zip", "pk", "POSTA KODU", "PK"]);
      const map = findValue(item, ["harita", "map", "iframe", "google_map", "embed"]);
      if (city) {
        const cityStr = String(city).trim().toLocaleUpperCase("tr");
        const distStr = String(dist || "MERKEZ").trim().toLocaleUpperCase("tr");
        const neighStr = String(neigh || "MERKEZ").trim().toLocaleUpperCase("tr");
        const citySlug = slugify(cityStr);
        const distSlug = slugify(distStr);
        const neighSlug = slugify(neighStr);
        const codeStr = String(zip || "00000").trim();
        const mapStr = map ? String(map) : void 0;
        if (!transformed[citySlug]) {
          transformed[citySlug] = {
            name: cityStr,
            districts: {}
          };
        }
        if (!transformed[citySlug].districts[distSlug]) {
          transformed[citySlug].districts[distSlug] = {
            name: distStr,
            neighborhoods: {}
          };
        }
        transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
          name: neighStr,
          zipCode: codeStr,
          mapCode: mapStr
        };
        if (mapStr && !transformed[citySlug].mapCode) {
          transformed[citySlug].mapCode = mapStr;
        }
        if (mapStr && !transformed[citySlug].districts[distSlug].mapCode) {
          transformed[citySlug].districts[distSlug].mapCode = mapStr;
        }
      }
    });
    cachedData = transformed;
    console.log("[Postal Data API] Cache initialized.");
    return transformed;
  }
  throw createError({
    statusCode: 404,
    statusMessage: "Postal data not found"
  });
});

export { postalData as default };
//# sourceMappingURL=postal-data.mjs.map
