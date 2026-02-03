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
  const postalData = await $fetch("/api/postal-data");
  const urls = [];
  Object.entries(postalData).forEach(([citySlug, cityItem]) => {
    urls.push({ loc: `/${citySlug}`, changefreq: "monthly", priority: 0.8 });
    Object.entries(cityItem.districts).forEach(([distSlug, distItem]) => {
      urls.push({ loc: `/${citySlug}/${distSlug}`, changefreq: "monthly", priority: 0.6 });
      Object.keys(distItem.neighborhoods).forEach((neighSlug) => {
        urls.push({ loc: `/${citySlug}/${distSlug}/${neighSlug}`, changefreq: "monthly", priority: 0.5 });
      });
    });
  });
  return urls;
});

export { sitemapUrls as default };
//# sourceMappingURL=sitemap-urls.mjs.map
