import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const defineSitemapEventHandler = defineEventHandler;

const sitemapUrls = defineSitemapEventHandler(async () => {
  const response = await $fetch("https://pkodlari.com/pk.json");
  const urls = [];
  const entries = Array.isArray(response) ? response : Object.values(response);
  const slugify = (s) => {
    return String(s).toLocaleLowerCase("tr").replace(/[ıığüşöç]/g, (m) => ({ "\u0131": "i", "\u011F": "g", "\xFC": "u", "\u015F": "s", "\xF6": "o", "\xE7": "c" })[m] || m).replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  };
  const cities = /* @__PURE__ */ new Set();
  const districts = /* @__PURE__ */ new Set();
  const neighborhoods = /* @__PURE__ */ new Set();
  const findValue = (obj, possibleKeys) => {
    if (!obj || typeof obj !== "object") return null;
    const normalize = (s) => s.toLocaleLowerCase("tr").replace(/\s+/g, "").replace(/[ıığüşöç]/g, (m) => ({ "\u0131": "i", "\u011F": "g", "\xFC": "u", "\u015F": "s", "\xF6": "o", "\xE7": "c" })[m] || m);
    const normalizedPossible = possibleKeys.map(normalize);
    for (const key of Object.keys(obj)) {
      if (normalizedPossible.includes(normalize(key))) return obj[key];
    }
    return null;
  };
  entries.forEach((item) => {
    if (!item || typeof item !== "object") return;
    const city = findValue(item, ["il", "city", "\u0130L", "\u015Fehir"]);
    const dist = findValue(item, ["ilce", "district", "\u0130L\xC7E", "\u0130l\xE7e"]);
    const neigh = findValue(item, ["mahalle", "neighborhood", "semt", "MAHALLE"]);
    if (city) {
      const citySlug = slugify(String(city).trim());
      const distSlug = slugify(String(dist || "MERKEZ").trim());
      const neighSlug = slugify(String(neigh || "MERKEZ").trim());
      cities.add(`/${citySlug}`);
      districts.add(`/${citySlug}/${distSlug}`);
      neighborhoods.add(`/${citySlug}/${distSlug}/${neighSlug}`);
    }
  });
  cities.forEach((url) => urls.push({ loc: url, changefreq: "monthly", priority: 0.8 }));
  districts.forEach((url) => urls.push({ loc: url, changefreq: "monthly", priority: 0.6 }));
  neighborhoods.forEach((url) => urls.push({ loc: url, changefreq: "monthly", priority: 0.5 }));
  return urls;
});

export { sitemapUrls as default };
//# sourceMappingURL=sitemap-urls.mjs.map
