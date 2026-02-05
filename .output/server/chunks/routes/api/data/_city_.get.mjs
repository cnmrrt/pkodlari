import { d as defineCachedEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _city__get = defineCachedEventHandler(async (event) => {
  const city = getRouterParam(event, "city");
  if (!city) {
    throw createError({
      statusCode: 400,
      statusMessage: "City parameter is required"
    });
  }
  try {
    const data = await $fetch(`https://pkodlari.com/data/${city}.json`);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "City data not found"
    });
  }
}, {
  maxAge: 60 * 60,
  // 1 hour
  name: "city-data",
  getKey: (event) => `city-data-${getRouterParam(event, "city")}`
});

export { _city__get as default };
//# sourceMappingURL=_city_.get.mjs.map
