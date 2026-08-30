import { u as useAsyncData, f as findMapValue, s as slugify } from './asyncData-gHCZgazS.mjs';
import { computed, toValue, reactive, watch } from 'vue';
import { x as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { a as useRequestFetch } from './usePageSeo-CgmHQHjs.mjs';
import { f as fetchDefaults } from './server.mjs';

const findValue = (obj, possibleKeys) => {
  if (!obj || typeof obj !== "object") return null;
  const normalize = (s) => s.toLocaleLowerCase("tr").replace(/\s+/g, "").replace(/[ıığüşöç]/g, (m) => ({ \u0131: "i", \u011F: "g", \u00FC: "u", \u015F: "s", \u00F6: "o", \u00E7: "c" })[m] || m);
  const normalizedPossible = possibleKeys.map(normalize);
  for (const key of Object.keys(obj)) {
    if (normalizedPossible.includes(normalize(key))) return obj[key];
  }
  return null;
};
function transformPostalData(response) {
  const transformed = {};
  const entries = Array.isArray(response) ? response : Object.values(response);
  entries.forEach((item) => {
    if (!item || typeof item !== "object") return;
    const city = findValue(item, ["il", "city", "\u0130L", "\u015Fehir"]);
    const dist = findValue(item, ["ilce", "district", "\u0130L\xC7E", "\u0130l\xE7e"]);
    const neigh = findValue(item, ["mahalle", "neighborhood", "semt", "MAHALLE"]);
    const zip = findValue(item, ["posta_kodu", "zip", "pk", "POSTA KODU", "PK", "postaKodu"]);
    const map = findMapValue(item);
    if (!city) return;
    const cityStr = String(city).trim().toLocaleUpperCase("tr");
    const distStr = String(dist || "MERKEZ").trim().toLocaleUpperCase("tr");
    const neighStr = String(neigh || "MERKEZ").trim().toLocaleUpperCase("tr");
    const citySlug = slugify(cityStr);
    const distSlug = slugify(distStr);
    const neighSlug = slugify(neighStr);
    const codeStr = String(zip || "00000").trim();
    if (!transformed[citySlug]) {
      transformed[citySlug] = { name: cityStr, districts: {} };
    }
    if (!transformed[citySlug].districts[distSlug]) {
      transformed[citySlug].districts[distSlug] = { name: distStr, neighborhoods: {} };
    }
    transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
      name: neighStr,
      zipCode: codeStr,
      mapCode: map
    };
    if (map && !transformed[citySlug].mapCode) {
      transformed[citySlug].mapCode = map;
    }
    if (map && !transformed[citySlug].districts[distSlug].mapCode) {
      transformed[citySlug].districts[distSlug].mapCode = map;
    }
  });
  return transformed;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    const resolvedOptions = { signal, ..._fetchOptions };
    for (const key2 of MAYBE_REF_OR_GETTER_OPTION_KEYS) {
      if (typeof resolvedOptions[key2] === "function") {
        resolvedOptions[key2] = toValue(resolvedOptions[key2]);
      }
    }
    return _$fetch(_request.value, resolvedOptions);
  }, _asyncDataOptions);
  return asyncData;
}
const MAYBE_REF_OR_GETTER_OPTION_KEYS = ["method", "baseURL", "query", "params", "body", "headers"];
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const entries = [];
      for (const entry of value.entries()) {
        const [key, val] = entry;
        entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
      }
      segments.push(hash(entries));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}

export { transformPostalData as t, useFetch as u };
//# sourceMappingURL=fetch-DwpLd3Ta.mjs.map
