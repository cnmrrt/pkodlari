import { d as defineCachedEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const postalData_get = defineCachedEventHandler(async (event) => {
  const data = await $fetch("https://pkodlari.com/pk.json");
  return data;
}, {
  maxAge: 60 * 60,
  // 1 hour
  name: "postal-data"
});

export { postalData_get as default };
//# sourceMappingURL=postal-data.get.mjs.map
