import { d as defineCachedEventHandler } from '../../../nitro/nitro.mjs';
import { getRouterParam, createError } from 'file:///Users/mac/Desktop/pkodlari/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/pathe/dist/index.mjs';

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
