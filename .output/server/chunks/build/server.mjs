import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, inject, getCurrentInstance, computed, toValue, onServerPrefetch, defineComponent, shallowRef, h, resolveComponent, ref, nextTick, unref, toRef, useSSRContext, Suspense, Fragment, createElementBlock, provide, cloneVNode, createApp, mergeProps, withCtx, createVNode, createTextVNode, shallowReactive, withAsyncContext, onErrorCaptured, resolveDynamicComponent, reactive, effectScope, defineAsyncComponent, getCurrentScope, isReadonly, isRef, isShallow, isReactive, toRaw } from 'vue';
import { p as parseQuery, m as getContext, n as hasProtocol, k as joinURL, w as withQuery, o as isScriptProtocol, c as createError$1, q as withTrailingSlash, r as withoutTrailingSlash, s as sanitizeStatusCode, $ as $fetch$1, t as createHooks, v as executeAsync, x as defu } from '../nitro/nitro.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { MapPin } from 'lucide-vue-next';
import { debounce } from 'perfect-debounce';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const matcher = (m, p) => {
  return [];
};
const _routeRulesMatcher = (path) => defu({}, ...matcher().map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-Csxd5I-A.mjs')
  },
  {
    name: "mus",
    path: "/mus",
    component: () => import('./index-CU7RAdF1.mjs')
  },
  {
    name: "van",
    path: "/van",
    component: () => import('./index-BvGfxmQH.mjs')
  },
  {
    name: "agri",
    path: "/agri",
    component: () => import('./index-T0oVSzsc.mjs')
  },
  {
    name: "bolu",
    path: "/bolu",
    component: () => import('./index-3Ft5g4ba.mjs')
  },
  {
    name: "kars",
    path: "/kars",
    component: () => import('./index-BKmpcvGV.mjs')
  },
  {
    name: "ordu",
    path: "/ordu",
    component: () => import('./index-DYJFMRAF.mjs')
  },
  {
    name: "rize",
    path: "/rize",
    component: () => import('./index-D23Etf3m.mjs')
  },
  {
    name: "usak",
    path: "/usak",
    component: () => import('./index-C3B-ahHH.mjs')
  },
  {
    name: "adana",
    path: "/adana",
    component: () => import('./index-D-vL9IHX.mjs')
  },
  {
    name: "aydin",
    path: "/aydin",
    component: () => import('./index-T9k-vAlB.mjs')
  },
  {
    name: "bursa",
    path: "/bursa",
    component: () => import('./index-EOUCozgc.mjs')
  },
  {
    name: "corum",
    path: "/corum",
    component: () => import('./index-ChacLvIh.mjs')
  },
  {
    name: "duzce",
    path: "/duzce",
    component: () => import('./index-YHUaWlM9.mjs')
  },
  {
    name: "igdir",
    path: "/igdir",
    component: () => import('./index-By-jFPiE.mjs')
  },
  {
    name: "izmir",
    path: "/izmir",
    component: () => import('./index-DwRToRl0.mjs')
  },
  {
    name: "kilis",
    path: "/kilis",
    component: () => import('./index-pnuOfoC3.mjs')
  },
  {
    name: "mugla",
    path: "/mugla",
    component: () => import('./index-RC_ojmDS.mjs')
  },
  {
    name: "nigde",
    path: "/nigde",
    component: () => import('./index-CDNWoqb-.mjs')
  },
  {
    name: "siirt",
    path: "/siirt",
    component: () => import('./index-C2RpH7At.mjs')
  },
  {
    name: "sivas",
    path: "/sivas",
    component: () => import('./index-B-SOy-WC.mjs')
  },
  {
    name: "tokat",
    path: "/tokat",
    component: () => import('./index-9MFBkbLz.mjs')
  },
  {
    name: "city",
    path: "/:city()",
    component: () => import('./index-3wwJ_3AG.mjs')
  },
  {
    name: "amasya",
    path: "/amasya",
    component: () => import('./index-CAKLIuOi.mjs')
  },
  {
    name: "ankara",
    path: "/ankara",
    component: () => import('./index-B_Cs1zz_.mjs')
  },
  {
    name: "artvin",
    path: "/artvin",
    component: () => import('./index-BkM2f0TE.mjs')
  },
  {
    name: "bartin",
    path: "/bartin",
    component: () => import('./index-BzTfOni8.mjs')
  },
  {
    name: "batman",
    path: "/batman",
    component: () => import('./index-QMleIsJ0.mjs')
  },
  {
    name: "bingol",
    path: "/bingol",
    component: () => import('./index-9BOYWKdY.mjs')
  },
  {
    name: "bitlis",
    path: "/bitlis",
    component: () => import('./index-ChGRCfD1.mjs')
  },
  {
    name: "burdur",
    path: "/burdur",
    component: () => import('./index-cBHf_bdQ.mjs')
  },
  {
    name: "edirne",
    path: "/edirne",
    component: () => import('./index-qcUkg6_b.mjs')
  },
  {
    name: "elazig",
    path: "/elazig",
    component: () => import('./index-DFu7zVtT.mjs')
  },
  {
    name: "manisa",
    path: "/manisa",
    component: () => import('./index-CG8hCWXc.mjs')
  },
  {
    name: "mardin",
    path: "/mardin",
    component: () => import('./index-CiurGFJa.mjs')
  },
  {
    name: "mersin",
    path: "/mersin",
    component: () => import('./index-Yjsgg8X7.mjs')
  },
  {
    name: "samsun",
    path: "/samsun",
    component: () => import('./index-DcOfkuVg.mjs')
  },
  {
    name: "sirnak",
    path: "/sirnak",
    component: () => import('./index-DnGfrqaV.mjs')
  },
  {
    name: "yalova",
    path: "/yalova",
    component: () => import('./index-CVpOyMCA.mjs')
  },
  {
    name: "yozgat",
    path: "/yozgat",
    component: () => import('./index-ClfflGbX.mjs')
  },
  {
    name: "aksaray",
    path: "/aksaray",
    component: () => import('./index-6CCe-_K4.mjs')
  },
  {
    name: "bilecik",
    path: "/bilecik",
    component: () => import('./index-BihhP9KP.mjs')
  },
  {
    name: "cankiri",
    path: "/cankiri",
    component: () => import('./index-5PKcbHPo.mjs')
  },
  {
    name: "denizli",
    path: "/denizli",
    component: () => import('./index-B23199Sv.mjs')
  },
  {
    name: "erzurum",
    path: "/erzurum",
    component: () => import('./index-C2Vc08aV.mjs')
  },
  {
    name: "giresun",
    path: "/giresun",
    component: () => import('./index-B_VT3p4r.mjs')
  },
  {
    name: "isparta",
    path: "/isparta",
    component: () => import('./index-BrHMkbGO.mjs')
  },
  {
    name: "karabuk",
    path: "/karabuk",
    component: () => import('./index-74RcJwd1.mjs')
  },
  {
    name: "karaman",
    path: "/karaman",
    component: () => import('./index-CQnAoXfq.mjs')
  },
  {
    name: "kayseri",
    path: "/kayseri",
    component: () => import('./index-CEMov-bf.mjs')
  },
  {
    name: "kocaeli",
    path: "/kocaeli",
    component: () => import('./index-DdXl3a_e.mjs')
  },
  {
    name: "kutahya",
    path: "/kutahya",
    component: () => import('./index-BKJf0w-0.mjs')
  },
  {
    name: "malatya",
    path: "/malatya",
    component: () => import('./index-UZirkTIW.mjs')
  },
  {
    name: "sakarya",
    path: "/sakarya",
    component: () => import('./index-D-KfuOLI.mjs')
  },
  {
    name: "trabzon",
    path: "/trabzon",
    component: () => import('./index-7qqybBEC.mjs')
  },
  {
    name: "adiyaman",
    path: "/adiyaman",
    component: () => import('./index-BlDdLyuo.mjs')
  },
  {
    name: "erzincan",
    path: "/erzincan",
    component: () => import('./index-Bcd8Ro6n.mjs')
  },
  {
    name: "istanbul",
    path: "/istanbul",
    component: () => import('./index-Bq-oq0D1.mjs')
  },
  {
    name: "kirsehir",
    path: "/kirsehir",
    component: () => import('./index-c7U3ikLw.mjs')
  },
  {
    name: "nevsehir",
    path: "/nevsehir",
    component: () => import('./index-Dee6hArp.mjs')
  },
  {
    name: "osmaniye",
    path: "/osmaniye",
    component: () => import('./index-C00kzr_N.mjs')
  },
  {
    name: "tekirdag",
    path: "/tekirdag",
    component: () => import('./index-CwAcYA5u.mjs')
  },
  {
    name: "balikesir",
    path: "/balikesir",
    component: () => import('./index-DarWKtjl.mjs')
  },
  {
    name: "canakkale",
    path: "/canakkale",
    component: () => import('./index-B6IOHNBr.mjs')
  },
  {
    name: "eskisehir",
    path: "/eskisehir",
    component: () => import('./index-BTg45Ufi.mjs')
  },
  {
    name: "gaziantep",
    path: "/gaziantep",
    component: () => import('./index-BOtJyb1V.mjs')
  },
  {
    name: "gumushane",
    path: "/gumushane",
    component: () => import('./index-CmFjHCXL.mjs')
  },
  {
    name: "kastamonu",
    path: "/kastamonu",
    component: () => import('./index-Dt2kLjDO.mjs')
  },
  {
    name: "kirikkale",
    path: "/kirikkale",
    component: () => import('./index-Drz0pqeP.mjs')
  },
  {
    name: "telefon-kodlari",
    path: "/telefon-kodlari",
    component: () => import('./telefon-kodlari-Bt4gZA80.mjs')
  },
  {
    name: "zonguldak",
    path: "/zonguldak",
    component: () => import('./index-DS0xp2nT.mjs')
  },
  {
    name: "diyarbakir",
    path: "/diyarbakir",
    component: () => import('./index-CSiGsx2i.mjs')
  },
  {
    name: "kirklareli",
    path: "/kirklareli",
    component: () => import('./index-C5bgb4RI.mjs')
  },
  {
    name: "afyonkarahisar",
    path: "/afyonkarahisar",
    component: () => import('./index-CajwX8B0.mjs')
  },
  {
    name: "mus-district",
    path: "/mus/:district()",
    component: () => import('./index-BGqAjwyC.mjs')
  },
  {
    name: "van-district",
    path: "/van/:district()",
    component: () => import('./index-Cdj0Zh1E.mjs')
  },
  {
    name: "agri-district",
    path: "/agri/:district()",
    component: () => import('./index-DPVj4VYA.mjs')
  },
  {
    name: "bolu-district",
    path: "/bolu/:district()",
    component: () => import('./index-H5iuwz4L.mjs')
  },
  {
    name: "kars-district",
    path: "/kars/:district()",
    component: () => import('./index-14RkqZC5.mjs')
  },
  {
    name: "ordu-district",
    path: "/ordu/:district()",
    component: () => import('./index-D1jsvTX5.mjs')
  },
  {
    name: "rize-district",
    path: "/rize/:district()",
    component: () => import('./index-CvMBkhXv.mjs')
  },
  {
    name: "usak-district",
    path: "/usak/:district()",
    component: () => import('./index-CF-g-nW9.mjs')
  },
  {
    name: "adana-district",
    path: "/adana/:district()",
    component: () => import('./index-CKa2fD_x.mjs')
  },
  {
    name: "aydin-district",
    path: "/aydin/:district()",
    component: () => import('./index-CYJA237p.mjs')
  },
  {
    name: "bursa-district",
    path: "/bursa/:district()",
    component: () => import('./index-Bjz-o_g_.mjs')
  },
  {
    name: "corum-district",
    path: "/corum/:district()",
    component: () => import('./index-Bb_OV5Hb.mjs')
  },
  {
    name: "duzce-district",
    path: "/duzce/:district()",
    component: () => import('./index-bKbZjdM3.mjs')
  },
  {
    name: "igdir-district",
    path: "/igdir/:district()",
    component: () => import('./index-BJvPv07r.mjs')
  },
  {
    name: "izmir-district",
    path: "/izmir/:district()",
    component: () => import('./index-DA5fFjQ-.mjs')
  },
  {
    name: "kilis-district",
    path: "/kilis/:district()",
    component: () => import('./index-DWcjG-kW.mjs')
  },
  {
    name: "mugla-district",
    path: "/mugla/:district()",
    component: () => import('./index-Bzupd1Z3.mjs')
  },
  {
    name: "nigde-district",
    path: "/nigde/:district()",
    component: () => import('./index-Cw-R6bMG.mjs')
  },
  {
    name: "siirt-district",
    path: "/siirt/:district()",
    component: () => import('./index-Cf5FdqGy.mjs')
  },
  {
    name: "sivas-district",
    path: "/sivas/:district()",
    component: () => import('./index-C5b7wAUC.mjs')
  },
  {
    name: "tokat-district",
    path: "/tokat/:district()",
    component: () => import('./index-CB7HZZ5Z.mjs')
  },
  {
    name: "city-district",
    path: "/:city()/:district()",
    component: () => import('./index-D0VZhPNH.mjs')
  },
  {
    name: "amasya-district",
    path: "/amasya/:district()",
    component: () => import('./index-4rF0kroe.mjs')
  },
  {
    name: "ankara-district",
    path: "/ankara/:district()",
    component: () => import('./index-C5ROhcou.mjs')
  },
  {
    name: "artvin-district",
    path: "/artvin/:district()",
    component: () => import('./index-C37FwSAU.mjs')
  },
  {
    name: "bartin-district",
    path: "/bartin/:district()",
    component: () => import('./index-CSRRhiys.mjs')
  },
  {
    name: "batman-district",
    path: "/batman/:district()",
    component: () => import('./index-D5G-ASWm.mjs')
  },
  {
    name: "bingol-district",
    path: "/bingol/:district()",
    component: () => import('./index-CzFmZuQn.mjs')
  },
  {
    name: "bitlis-district",
    path: "/bitlis/:district()",
    component: () => import('./index-C8Fd10y-.mjs')
  },
  {
    name: "burdur-district",
    path: "/burdur/:district()",
    component: () => import('./index-ridT3Pyz.mjs')
  },
  {
    name: "edirne-district",
    path: "/edirne/:district()",
    component: () => import('./index-DHtUM_Kg.mjs')
  },
  {
    name: "elazig-district",
    path: "/elazig/:district()",
    component: () => import('./index-BcWJlboI.mjs')
  },
  {
    name: "istanbul-umraniye",
    path: "/istanbul/umraniye",
    component: () => import('./index-yLKTsdmI.mjs')
  },
  {
    name: "manisa-district",
    path: "/manisa/:district()",
    component: () => import('./index-BnFPuqPW.mjs')
  },
  {
    name: "mardin-district",
    path: "/mardin/:district()",
    component: () => import('./index-CSg8Fmgy.mjs')
  },
  {
    name: "mersin-district",
    path: "/mersin/:district()",
    component: () => import('./index-F4B6EoUT.mjs')
  },
  {
    name: "samsun-district",
    path: "/samsun/:district()",
    component: () => import('./index-Bo2SOxeb.mjs')
  },
  {
    name: "sirnak-district",
    path: "/sirnak/:district()",
    component: () => import('./index-E2GjpWvV.mjs')
  },
  {
    name: "yalova-district",
    path: "/yalova/:district()",
    component: () => import('./index-CEQarN_z.mjs')
  },
  {
    name: "yozgat-district",
    path: "/yozgat/:district()",
    component: () => import('./index-7gvQqBin.mjs')
  },
  {
    name: "aksaray-district",
    path: "/aksaray/:district()",
    component: () => import('./index-CX5BesmW.mjs')
  },
  {
    name: "bilecik-district",
    path: "/bilecik/:district()",
    component: () => import('./index-Ges-MH3L.mjs')
  },
  {
    name: "cankiri-district",
    path: "/cankiri/:district()",
    component: () => import('./index-SgSdSkvJ.mjs')
  },
  {
    name: "denizli-district",
    path: "/denizli/:district()",
    component: () => import('./index-Cf-uDUcn.mjs')
  },
  {
    name: "erzurum-district",
    path: "/erzurum/:district()",
    component: () => import('./index-DvpcNWaq.mjs')
  },
  {
    name: "giresun-district",
    path: "/giresun/:district()",
    component: () => import('./index--SOXhpDq.mjs')
  },
  {
    name: "isparta-district",
    path: "/isparta/:district()",
    component: () => import('./index-WGPpXbj5.mjs')
  },
  {
    name: "karabuk-district",
    path: "/karabuk/:district()",
    component: () => import('./index-CLqxc6c5.mjs')
  },
  {
    name: "karaman-district",
    path: "/karaman/:district()",
    component: () => import('./index-XdQrZLh6.mjs')
  },
  {
    name: "kayseri-district",
    path: "/kayseri/:district()",
    component: () => import('./index-C3rqszkb.mjs')
  },
  {
    name: "kocaeli-district",
    path: "/kocaeli/:district()",
    component: () => import('./index-CbZRGVwc.mjs')
  },
  {
    name: "kutahya-district",
    path: "/kutahya/:district()",
    component: () => import('./index-CuBc4vue.mjs')
  },
  {
    name: "malatya-district",
    path: "/malatya/:district()",
    component: () => import('./index-CmcZkbLk.mjs')
  },
  {
    name: "sakarya-district",
    path: "/sakarya/:district()",
    component: () => import('./index-CCBu24n_.mjs')
  },
  {
    name: "trabzon-district",
    path: "/trabzon/:district()",
    component: () => import('./index-C47AKJeT.mjs')
  },
  {
    name: "adiyaman-district",
    path: "/adiyaman/:district()",
    component: () => import('./index-vm65FXKn.mjs')
  },
  {
    name: "erzincan-district",
    path: "/erzincan/:district()",
    component: () => import('./index-UE_yhhgn.mjs')
  },
  {
    name: "istanbul-district",
    path: "/istanbul/:district()",
    component: () => import('./index-6Ksn_6Go.mjs')
  },
  {
    name: "kirsehir-district",
    path: "/kirsehir/:district()",
    component: () => import('./index-B0HZ_fpc.mjs')
  },
  {
    name: "nevsehir-district",
    path: "/nevsehir/:district()",
    component: () => import('./index-DTxH-MoC.mjs')
  },
  {
    name: "osmaniye-district",
    path: "/osmaniye/:district()",
    component: () => import('./index-pDe9pI1O.mjs')
  },
  {
    name: "tekirdag-district",
    path: "/tekirdag/:district()",
    component: () => import('./index-Ctj5eqkS.mjs')
  },
  {
    name: "balikesir-district",
    path: "/balikesir/:district()",
    component: () => import('./index-nFfS_Nef.mjs')
  },
  {
    name: "canakkale-district",
    path: "/canakkale/:district()",
    component: () => import('./index-CTXb0FrQ.mjs')
  },
  {
    name: "eskisehir-district",
    path: "/eskisehir/:district()",
    component: () => import('./index-DmBT8cgp.mjs')
  },
  {
    name: "gaziantep-district",
    path: "/gaziantep/:district()",
    component: () => import('./index-DRq2FMZF.mjs')
  },
  {
    name: "gumushane-district",
    path: "/gumushane/:district()",
    component: () => import('./index-CnHKTZJQ.mjs')
  },
  {
    name: "kastamonu-district",
    path: "/kastamonu/:district()",
    component: () => import('./index-DODaBegz.mjs')
  },
  {
    name: "kirikkale-district",
    path: "/kirikkale/:district()",
    component: () => import('./index-BEQLkUjZ.mjs')
  },
  {
    name: "zonguldak-district",
    path: "/zonguldak/:district()",
    component: () => import('./index-CAjIA3Bd.mjs')
  },
  {
    name: "diyarbakir-district",
    path: "/diyarbakir/:district()",
    component: () => import('./index-BlDZNhLF.mjs')
  },
  {
    name: "kirklareli-district",
    path: "/kirklareli/:district()",
    component: () => import('./index-VCrjOZUG.mjs')
  },
  {
    name: "mus-district-neighborhood",
    path: "/mus/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BqIoUWmq.mjs')
  },
  {
    name: "van-district-neighborhood",
    path: "/van/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-RIn_dsqg.mjs')
  },
  {
    name: "agri-district-neighborhood",
    path: "/agri/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-4PhbKNjx.mjs')
  },
  {
    name: "bolu-district-neighborhood",
    path: "/bolu/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-GS9lweKm.mjs')
  },
  {
    name: "kars-district-neighborhood",
    path: "/kars/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BhHIxspQ.mjs')
  },
  {
    name: "ordu-district-neighborhood",
    path: "/ordu/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BNtF1XBO.mjs')
  },
  {
    name: "rize-district-neighborhood",
    path: "/rize/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BJE1BjlF.mjs')
  },
  {
    name: "usak-district-neighborhood",
    path: "/usak/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Bn7s5J3n.mjs')
  },
  {
    name: "adana-district-neighborhood",
    path: "/adana/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-B087YGNx.mjs')
  },
  {
    name: "afyonkarahisar-district",
    path: "/afyonkarahisar/:district()",
    component: () => import('./index-C8ei2-rd.mjs')
  },
  {
    name: "aydin-district-neighborhood",
    path: "/aydin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DhzRhPwr.mjs')
  },
  {
    name: "bursa-district-neighborhood",
    path: "/bursa/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BryTLmHE.mjs')
  },
  {
    name: "corum-district-neighborhood",
    path: "/corum/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CwQgZkKm.mjs')
  },
  {
    name: "duzce-district-neighborhood",
    path: "/duzce/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CVCqw05n.mjs')
  },
  {
    name: "igdir-district-neighborhood",
    path: "/igdir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-rPnNNF3f.mjs')
  },
  {
    name: "izmir-district-neighborhood",
    path: "/izmir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-B2I4QcTA.mjs')
  },
  {
    name: "kilis-district-neighborhood",
    path: "/kilis/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-grPWExOI.mjs')
  },
  {
    name: "mugla-district-neighborhood",
    path: "/mugla/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BCTT_idF.mjs')
  },
  {
    name: "nigde-district-neighborhood",
    path: "/nigde/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DkyzJGIu.mjs')
  },
  {
    name: "siirt-district-neighborhood",
    path: "/siirt/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CtmXF1WT.mjs')
  },
  {
    name: "sivas-district-neighborhood",
    path: "/sivas/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Du6SwirC.mjs')
  },
  {
    name: "tokat-district-neighborhood",
    path: "/tokat/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-1ZdaX4-H.mjs')
  },
  {
    name: "city-district-neighborhood",
    path: "/:city()/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CMdfL1rB.mjs')
  },
  {
    name: "amasya-district-neighborhood",
    path: "/amasya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-UZWhXYp2.mjs')
  },
  {
    name: "ankara-district-neighborhood",
    path: "/ankara/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-VlC1LcAq.mjs')
  },
  {
    name: "artvin-district-neighborhood",
    path: "/artvin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Ra1bGRD8.mjs')
  },
  {
    name: "bartin-district-neighborhood",
    path: "/bartin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CjDn8WWj.mjs')
  },
  {
    name: "batman-district-neighborhood",
    path: "/batman/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DrM33UEK.mjs')
  },
  {
    name: "bingol-district-neighborhood",
    path: "/bingol/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-C7OWrwJ-.mjs')
  },
  {
    name: "bitlis-district-neighborhood",
    path: "/bitlis/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-oSbeNgGb.mjs')
  },
  {
    name: "burdur-district-neighborhood",
    path: "/burdur/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BoImGEhp.mjs')
  },
  {
    name: "edirne-district-neighborhood",
    path: "/edirne/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CvgZ1lZm.mjs')
  },
  {
    name: "elazig-district-neighborhood",
    path: "/elazig/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-_s4_eZja.mjs')
  },
  {
    name: "manisa-district-neighborhood",
    path: "/manisa/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D94IJLdF.mjs')
  },
  {
    name: "mardin-district-neighborhood",
    path: "/mardin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-5qd72TuB.mjs')
  },
  {
    name: "mersin-district-neighborhood",
    path: "/mersin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-IMjCYOMu.mjs')
  },
  {
    name: "samsun-district-neighborhood",
    path: "/samsun/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D4NA8WGj.mjs')
  },
  {
    name: "sirnak-district-neighborhood",
    path: "/sirnak/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DFTugbup.mjs')
  },
  {
    name: "yalova-district-neighborhood",
    path: "/yalova/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-tVaqP29W.mjs')
  },
  {
    name: "yozgat-district-neighborhood",
    path: "/yozgat/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-9y0RveJ-.mjs')
  },
  {
    name: "aksaray-district-neighborhood",
    path: "/aksaray/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BACWFx41.mjs')
  },
  {
    name: "bilecik-district-neighborhood",
    path: "/bilecik/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-qImB20hg.mjs')
  },
  {
    name: "cankiri-district-neighborhood",
    path: "/cankiri/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DBG0vX_v.mjs')
  },
  {
    name: "denizli-district-neighborhood",
    path: "/denizli/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-B53PE7bp.mjs')
  },
  {
    name: "erzurum-district-neighborhood",
    path: "/erzurum/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CsZLLsUR.mjs')
  },
  {
    name: "giresun-district-neighborhood",
    path: "/giresun/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DRDP08a8.mjs')
  },
  {
    name: "isparta-district-neighborhood",
    path: "/isparta/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CiCFYm0C.mjs')
  },
  {
    name: "karabuk-district-neighborhood",
    path: "/karabuk/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DrU7QHoP.mjs')
  },
  {
    name: "karaman-district-neighborhood",
    path: "/karaman/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DW7lV-iM.mjs')
  },
  {
    name: "kayseri-district-neighborhood",
    path: "/kayseri/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BD56ZUGC.mjs')
  },
  {
    name: "kocaeli-district-neighborhood",
    path: "/kocaeli/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CylPPf9o.mjs')
  },
  {
    name: "kutahya-district-neighborhood",
    path: "/kutahya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DJAImq9h.mjs')
  },
  {
    name: "malatya-district-neighborhood",
    path: "/malatya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BmusRh2Q.mjs')
  },
  {
    name: "sakarya-district-neighborhood",
    path: "/sakarya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-ZUbbioop.mjs')
  },
  {
    name: "trabzon-district-neighborhood",
    path: "/trabzon/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BWG-AhX_.mjs')
  },
  {
    name: "adiyaman-district-neighborhood",
    path: "/adiyaman/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CufvX6Q3.mjs')
  },
  {
    name: "erzincan-district-neighborhood",
    path: "/erzincan/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BJZQuxhP.mjs')
  },
  {
    name: "istanbul-district-neighborhood",
    path: "/istanbul/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Bxp7MTvP.mjs')
  },
  {
    name: "kirsehir-district-neighborhood",
    path: "/kirsehir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BzSPEZ0L.mjs')
  },
  {
    name: "nevsehir-district-neighborhood",
    path: "/nevsehir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BnBX_sXB.mjs')
  },
  {
    name: "osmaniye-district-neighborhood",
    path: "/osmaniye/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BCIHwmea.mjs')
  },
  {
    name: "tekirdag-district-neighborhood",
    path: "/tekirdag/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CJjjo5dI.mjs')
  },
  {
    name: "balikesir-district-neighborhood",
    path: "/balikesir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CntYtKwh.mjs')
  },
  {
    name: "canakkale-district-neighborhood",
    path: "/canakkale/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CHIyGi4H.mjs')
  },
  {
    name: "eskisehir-district-neighborhood",
    path: "/eskisehir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-COMDK7Me.mjs')
  },
  {
    name: "gaziantep-district-neighborhood",
    path: "/gaziantep/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Blnn2ZNO.mjs')
  },
  {
    name: "gumushane-district-neighborhood",
    path: "/gumushane/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-C9eBQmzc.mjs')
  },
  {
    name: "kastamonu-district-neighborhood",
    path: "/kastamonu/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BpHwn-sF.mjs')
  },
  {
    name: "kirikkale-district-neighborhood",
    path: "/kirikkale/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D1IQPj0P.mjs')
  },
  {
    name: "zonguldak-district-neighborhood",
    path: "/zonguldak/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Bib5DnfI.mjs')
  },
  {
    name: "diyarbakir-district-neighborhood",
    path: "/diyarbakir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BhOj3eU-.mjs')
  },
  {
    name: "kirklareli-district-neighborhood",
    path: "/kirklareli/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BwbbtE3v.mjs')
  },
  {
    name: "afyonkarahisar-district-neighborhood",
    path: "/afyonkarahisar/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-9QRs2aPI.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = computed(() => {
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-slate-200 sticky top-0 z-50" }, _attrs))}><div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-slate-900 p-1.5 rounded-lg text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div><span class="font-bold text-slate-900 tracking-tight"${_scopeId}>Posta Kodu Rehberi</span>`);
          } else {
            return [
              createVNode("div", { class: "bg-slate-900 p-1.5 rounded-lg text-white" }, [
                createVNode(unref(MapPin), { class: "w-4 h-4" })
              ]),
              createVNode("span", { class: "font-bold text-slate-900 tracking-tight" }, "Posta Kodu Rehberi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="text-sm font-medium text-slate-500 flex gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-slate-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Şehirler`);
          } else {
            return [
              createTextVNode("Şehirler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/telefon-kodlari",
        class: "hover:text-slate-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Telefon Kodları`);
          } else {
            return [
              createTextVNode("Telefon Kodları")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://postakodu.ptt.gov.tr/" target="_blank" class="hover:text-slate-900 transition-colors">PTT Sorgulama</a></nav></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry2 = nuxtApp._asyncData[key.value];
      if (entry2?._abortController) {
        try {
          entry2._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry2._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        {
          asyncData.pending.value = false;
        }
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const slugify = (s) => {
  return String(s).toLocaleLowerCase("tr").replace(/[ıığüşöç]/g, (m) => ({ "ı": "i", "ğ": "g", "ü": "u", "ş": "s", "ö": "o", "ç": "c" })[m] || m).replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
};
const titleCase = (s) => {
  if (!s) return "";
  return s.toLocaleLowerCase("tr").replace(
    /(^|[^a-züığüşöçı])([a-züığüşöçı])/g,
    (match, p1, p2) => p1 + p2.toLocaleUpperCase("tr")
  );
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const findValue = (obj, possibleKeys) => {
      if (!obj || typeof obj !== "object") return null;
      const normalize = (s) => s.toLocaleLowerCase("tr").replace(/\s+/g, "").replace(/[ıığüşöç]/g, (m) => ({ "ı": "i", "ğ": "g", "ü": "u", "ş": "s", "ö": "o", "ç": "c" })[m] || m);
      const normalizedPossible = possibleKeys.map(normalize);
      for (const key of Object.keys(obj)) {
        if (normalizedPossible.includes(normalize(key))) return obj[key];
      }
      return null;
    };
    const { data: postalData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("postal-data", async () => {
      const response = await $fetch("/api/postal-data");
      const transformed = {};
      const entries = Array.isArray(response) ? response : Object.values(response);
      entries.forEach((item) => {
        if (!item || typeof item !== "object") return;
        const city = findValue(item, ["il", "city", "İL", "şehir"]);
        const dist = findValue(item, ["ilce", "district", "İLÇE", "İlçe"]);
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
      return transformed;
    })), __temp = await __temp, __restore(), __temp);
    provide("postalData", postalData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$3;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="max-w-5xl mx-auto px-6 py-8">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main><footer class="py-12 text-center text-slate-400 text-xs font-medium border-t border-slate-200 mt-20"> Posta Kodu Rehberi © ; ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} — Tüm hakları saklıdır. </footer></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-ByuK-X1V.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-Bfx37wjD.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { __nuxt_component_0 as _, useRoute as a, tryUseNuxtApp as b, useNuxtApp as c, entry_default as default, slugify as s, titleCase as t, useAsyncData as u };
//# sourceMappingURL=server.mjs.map
