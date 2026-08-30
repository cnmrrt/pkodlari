import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, getCurrentInstance, inject, getCurrentScope, useSSRContext, defineComponent, ref, h, createApp, computed, unref, provide, shallowReactive, isVNode, createCommentVNode, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, defineAsyncComponent, mergeProps, toRef, Suspense, Fragment, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw } from 'vue';
import { p as parseURL, e as encodePath, l as decodePath, c as createError$1, m as hasProtocol, n as isScriptProtocol, o as joinURL, w as withQuery, s as sanitizeStatusCode, q as getContext, $ as $fetch, r as createHooks, t as executeAsync, v as defu } from '../nitro/nitro.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
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
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
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
        return "3.21.11";
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
function isScopeWithinInstance(instance) {
  const instanceScope = instance.scope;
  let scope = getCurrentScope();
  while (scope) {
    if (scope === instanceScope) {
      return true;
    }
    scope = scope.parent;
  }
  return false;
}
const useRoute = () => {
  if (hasInjectionContext()) {
    const instance = getCurrentInstance();
    if (!instance || isScopeWithinInstance(instance)) {
      return inject(PageRouteSymbol, useNuxtApp()._route);
    }
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
const HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
const HTML_ATTR_ENCODE_MAP = {
  "&": "%26",
  '"': "%22",
  "'": "%27",
  "<": "%3C",
  ">": "%3E"
};
function encodeForHtmlAttr(value) {
  return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
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
        const encodedHeader = encodeURL(location2, isExternalHost);
        const encodedLoc = encodeForHtmlAttr(encodedHeader);
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
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    const pathname = url.pathname.replace(/^\/{2,}/, "/");
    return pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
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
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function freezeHead(head) {
  const realPush = head.push;
  head.push = () => ({ dispose: () => {
  }, patch: () => {
  }, _poll: () => {
  } });
  return () => {
    head.push = realPush;
  };
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    if (nuxtApp.ssrContext.islandContext) {
      const unfreeze = freezeHead(head);
      nuxtApp.hooks.hookOnce("app:created", unfreeze);
    }
    nuxtApp.vueApp.use(head);
  }
});
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
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
const VALID_TAG_RE = /^[a-z][a-z0-9-]*$/i;
function sanitizeTag(tag, fallback) {
  return tag && VALID_TAG_RE.test(tag) ? tag : fallback;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const router = useRouter();
    const hashScrollBehaviour = router.options?.scrollBehaviorType ?? "auto";
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
    if (from === START_LOCATION) {
      return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
    }
    return new Promise((resolve) => {
      const doScroll = () => {
        requestAnimationFrame(() => {
          if (router.currentRoute.value.fullPath !== to.fullPath) {
            resolve(false);
            return;
          }
          resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        });
      };
      nuxtApp.hooks.hookOnce("page:loading:end", () => {
        const transitionPromise = nuxtApp["~transitionPromise"];
        if (transitionPromise) {
          transitionPromise.then(doScroll);
        } else {
          doScroll();
        }
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
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
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
const sensitiveMatcher = (m, p) => {
  return [];
};
const foldedMatcher = sensitiveMatcher;
const decodeRoutePath = function decodeRoutePath2(path) {
  if (!path.includes("%")) return path;
  const queryIndex = path.indexOf("?");
  const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
  try {
    return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
  } catch {
    return path;
  }
};
const normalizePath = (path, fold) => {
  if (typeof path !== "string") {
    return path;
  }
  const decoded = decodeRoutePath(path);
  return fold ? decoded.toLowerCase() : decoded;
};
const _routeRulesMatcher = (path) => routerOptions.sensitive ? defu({}, ...sensitiveMatcher("", normalizePath(path, false)).map((r) => r.data).reverse()) : defu({}, ...foldedMatcher("", normalizePath(path, true)).map((r) => r.data).reverse());
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
    component: () => import('./index-B6-K8IXs.mjs')
  },
  {
    name: "es",
    path: "/es",
    component: () => import('./index-DDxgJDAC.mjs')
  },
  {
    name: "mus",
    path: "/mus",
    component: () => import('./index-DAC4yrdN.mjs')
  },
  {
    name: "van",
    path: "/van",
    component: () => import('./index-BCivbRhJ.mjs')
  },
  {
    name: "agri",
    path: "/agri",
    component: () => import('./index-D-LNAjPF.mjs')
  },
  {
    name: "bolu",
    path: "/bolu",
    component: () => import('./index-C78F9uIf.mjs')
  },
  {
    name: "kars",
    path: "/kars",
    component: () => import('./index-CQwZ912l.mjs')
  },
  {
    name: "ordu",
    path: "/ordu",
    component: () => import('./index-BNf4orpd.mjs')
  },
  {
    name: "rize",
    path: "/rize",
    component: () => import('./index-BR0v2YKI.mjs')
  },
  {
    name: "usak",
    path: "/usak",
    component: () => import('./index-BXIIXJ5f.mjs')
  },
  {
    name: "adana",
    path: "/adana",
    component: () => import('./index-Grg87PNH.mjs')
  },
  {
    name: "aydin",
    path: "/aydin",
    component: () => import('./index-NpH5cKkD.mjs')
  },
  {
    name: "bursa",
    path: "/bursa",
    component: () => import('./index-B1ULKYg7.mjs')
  },
  {
    name: "corum",
    path: "/corum",
    component: () => import('./index-Dx4jE5HN.mjs')
  },
  {
    name: "duzce",
    path: "/duzce",
    component: () => import('./index-BpHKJV2g.mjs')
  },
  {
    name: "igdir",
    path: "/igdir",
    component: () => import('./index-B362I2Ce.mjs')
  },
  {
    name: "izmir",
    path: "/izmir",
    component: () => import('./index-BXaz25yS.mjs')
  },
  {
    name: "kilis",
    path: "/kilis",
    component: () => import('./index-CtLhw6Iw.mjs')
  },
  {
    name: "konya",
    path: "/konya",
    component: () => import('./index-BMOXuwgc.mjs')
  },
  {
    name: "mugla",
    path: "/mugla",
    component: () => import('./index-BltSCoNj.mjs')
  },
  {
    name: "nigde",
    path: "/nigde",
    component: () => import('./index-COb9vOsg.mjs')
  },
  {
    name: "siirt",
    path: "/siirt",
    component: () => import('./index-D0CKf5yj.mjs')
  },
  {
    name: "sivas",
    path: "/sivas",
    component: () => import('./index-B4wdOxPw.mjs')
  },
  {
    name: "tokat",
    path: "/tokat",
    component: () => import('./index-DmMkrpHp.mjs')
  },
  {
    name: "city",
    path: "/:city()",
    component: () => import('./index-C_khOK7c.mjs')
  },
  {
    name: "amasya",
    path: "/amasya",
    component: () => import('./index-COaqt7rv.mjs')
  },
  {
    name: "ankara",
    path: "/ankara",
    component: () => import('./index-ro4qZd3f.mjs')
  },
  {
    name: "artvin",
    path: "/artvin",
    component: () => import('./index-Db54vplR.mjs')
  },
  {
    name: "bartin",
    path: "/bartin",
    component: () => import('./index-CDAJW9JK.mjs')
  },
  {
    name: "batman",
    path: "/batman",
    component: () => import('./index-D7fsDX7p.mjs')
  },
  {
    name: "bingol",
    path: "/bingol",
    component: () => import('./index-C9ibibSJ.mjs')
  },
  {
    name: "bitlis",
    path: "/bitlis",
    component: () => import('./index-CN__dRIH.mjs')
  },
  {
    name: "burdur",
    path: "/burdur",
    component: () => import('./index-CNQJ0qGs.mjs')
  },
  {
    name: "edirne",
    path: "/edirne",
    component: () => import('./index-BievF1eH.mjs')
  },
  {
    name: "elazig",
    path: "/elazig",
    component: () => import('./index-6_MI9KHd.mjs')
  },
  {
    name: "manisa",
    path: "/manisa",
    component: () => import('./index-BNoNHEZE.mjs')
  },
  {
    name: "mardin",
    path: "/mardin",
    component: () => import('./index-D8D3pz6k.mjs')
  },
  {
    name: "mersin",
    path: "/mersin",
    component: () => import('./index-DU7qRE9o.mjs')
  },
  {
    name: "samsun",
    path: "/samsun",
    component: () => import('./index-lH7B1-Zg.mjs')
  },
  {
    name: "sirnak",
    path: "/sirnak",
    component: () => import('./index-pkvwR9fM.mjs')
  },
  {
    name: "yalova",
    path: "/yalova",
    component: () => import('./index-PGql7s8h.mjs')
  },
  {
    name: "yozgat",
    path: "/yozgat",
    component: () => import('./index-ByU0TM0N.mjs')
  },
  {
    name: "aksaray",
    path: "/aksaray",
    component: () => import('./index-CFLoNoIr.mjs')
  },
  {
    name: "antalya",
    path: "/antalya",
    component: () => import('./index-0I9G4W5t.mjs')
  },
  {
    name: "ardahan",
    path: "/ardahan",
    component: () => import('./index-B5uyhLjS.mjs')
  },
  {
    name: "bayburt",
    path: "/bayburt",
    component: () => import('./index-BmvAAI87.mjs')
  },
  {
    name: "bilecik",
    path: "/bilecik",
    component: () => import('./index-8-izVGAv.mjs')
  },
  {
    name: "cankiri",
    path: "/cankiri",
    component: () => import('./index-bFG7SiPb.mjs')
  },
  {
    name: "denizli",
    path: "/denizli",
    component: () => import('./index-CtEjgGvC.mjs')
  },
  {
    name: "erzurum",
    path: "/erzurum",
    component: () => import('./index-C8Loewnf.mjs')
  },
  {
    name: "giresun",
    path: "/giresun",
    component: () => import('./index-nGAp14h4.mjs')
  },
  {
    name: "hakkari",
    path: "/hakkari",
    component: () => import('./index-Bjn1msfd.mjs')
  },
  {
    name: "isparta",
    path: "/isparta",
    component: () => import('./index-BpVa9RL5.mjs')
  },
  {
    name: "karabuk",
    path: "/karabuk",
    component: () => import('./index-dIWfCGlb.mjs')
  },
  {
    name: "karaman",
    path: "/karaman",
    component: () => import('./index-C4EzKjPd.mjs')
  },
  {
    name: "kayseri",
    path: "/kayseri",
    component: () => import('./index-CQgT2ulH.mjs')
  },
  {
    name: "kocaeli",
    path: "/kocaeli",
    component: () => import('./index-CPpZgFIg.mjs')
  },
  {
    name: "kutahya",
    path: "/kutahya",
    component: () => import('./index-DpXTVQT6.mjs')
  },
  {
    name: "malatya",
    path: "/malatya",
    component: () => import('./index-C_ZkO8-i.mjs')
  },
  {
    name: "sakarya",
    path: "/sakarya",
    component: () => import('./index-CwXshJ2G.mjs')
  },
  {
    name: "trabzon",
    path: "/trabzon",
    component: () => import('./index-Ch0JW4Df.mjs')
  },
  {
    name: "adiyaman",
    path: "/adiyaman",
    component: () => import('./index-BuqxYnEJ.mjs')
  },
  {
    name: "erzincan",
    path: "/erzincan",
    component: () => import('./index-DhEPFt0q.mjs')
  },
  {
    name: "istanbul",
    path: "/istanbul",
    component: () => import('./index-DpLG6CRX.mjs')
  },
  {
    name: "kirsehir",
    path: "/kirsehir",
    component: () => import('./index-CyjUZOaR.mjs')
  },
  {
    name: "nevsehir",
    path: "/nevsehir",
    component: () => import('./index-BY4EeoxE.mjs')
  },
  {
    name: "osmaniye",
    path: "/osmaniye",
    component: () => import('./index-CSX9lE82.mjs')
  },
  {
    name: "tekirdag",
    path: "/tekirdag",
    component: () => import('./index-CeSgTywr.mjs')
  },
  {
    name: "balikesir",
    path: "/balikesir",
    component: () => import('./index-ZLxkx8a1.mjs')
  },
  {
    name: "canakkale",
    path: "/canakkale",
    component: () => import('./index-9iX446rW.mjs')
  },
  {
    name: "es-madrid",
    path: "/es/madrid",
    component: () => import('./index-dlWaHEK-.mjs')
  },
  {
    name: "eskisehir",
    path: "/eskisehir",
    component: () => import('./index-C8dcyRfb.mjs')
  },
  {
    name: "gaziantep",
    path: "/gaziantep",
    component: () => import('./index-DQjYPbZJ.mjs')
  },
  {
    name: "gumushane",
    path: "/gumushane",
    component: () => import('./index-mNquzBOw.mjs')
  },
  {
    name: "kastamonu",
    path: "/kastamonu",
    component: () => import('./index-9S-ljnIe.mjs')
  },
  {
    name: "kirikkale",
    path: "/kirikkale",
    component: () => import('./index-Dz2UUIUX.mjs')
  },
  {
    name: "telefon-kodlari",
    path: "/telefon-kodlari",
    component: () => import('./telefon-kodlari-sByVZl_e.mjs')
  },
  {
    name: "zonguldak",
    path: "/zonguldak",
    component: () => import('./index-DtoVs_Xa.mjs')
  },
  {
    name: "diyarbakir",
    path: "/diyarbakir",
    component: () => import('./index-Dn4WtyrO.mjs')
  },
  {
    name: "kirklareli",
    path: "/kirklareli",
    component: () => import('./index-C6jHhV7X.mjs')
  },
  {
    name: "ankara-ayas",
    path: "/ankara/ayas",
    component: () => import('./index-DyX9LP1f.mjs')
  },
  {
    name: "ankara-bala",
    path: "/ankara/bala",
    component: () => import('./index-Blh47Ppn.mjs')
  },
  {
    name: "izmir-konak",
    path: "/izmir/konak",
    component: () => import('./index-FFWrP_fX.mjs')
  },
  {
    name: "rize-cayeli",
    path: "/rize/cayeli",
    component: () => import('./index-nv1ZF9jR.mjs')
  },
  {
    name: "ankara-cubuk",
    path: "/ankara/cubuk",
    component: () => import('./index-CvepedFB.mjs')
  },
  {
    name: "ankara-evren",
    path: "/ankara/evren",
    component: () => import('./index-CcMSS6E0.mjs')
  },
  {
    name: "ankara-gudul",
    path: "/ankara/gudul",
    component: () => import('./index-DiTsn_dC.mjs')
  },
  {
    name: "ankara-mamak",
    path: "/ankara/mamak",
    component: () => import('./index-ye1TvgvK.mjs')
  },
  {
    name: "sivas-kangal",
    path: "/sivas/kangal",
    component: () => import('./index-CTb7zane.mjs')
  },
  {
    name: "tokat-merkez",
    path: "/tokat/merkez",
    component: () => import('./index-D5AvgNu4.mjs')
  },
  {
    name: "adana-yuregir",
    path: "/adana/yuregir",
    component: () => import('./index-DHPMuaLX.mjs')
  },
  {
    name: "ankara-akyurt",
    path: "/ankara/akyurt",
    component: () => import('./index-BpKu3eOu.mjs')
  },
  {
    name: "ankara-sincan",
    path: "/ankara/sincan",
    component: () => import('./index-oeDL95H-.mjs')
  },
  {
    name: "istanbul-eyup",
    path: "/istanbul/eyup",
    component: () => import('./index-CZ42Se3o.mjs')
  },
  {
    name: "istanbul-sile",
    path: "/istanbul/sile",
    component: () => import('./index-B6U8-KEA.mjs')
  },
  {
    name: "izmir-bergama",
    path: "/izmir/bergama",
    component: () => import('./index-w5uATe2m.mjs')
  },
  {
    name: "izmir-bornova",
    path: "/izmir/bornova",
    component: () => import('./index-E8FqKu5B.mjs')
  },
  {
    name: "adiyaman-besni",
    path: "/adiyaman/besni",
    component: () => import('./index-Btu7V_Lj.mjs')
  },
  {
    name: "afyonkarahisar",
    path: "/afyonkarahisar",
    component: () => import('./index-BzoQe2XZ.mjs')
  },
  {
    name: "ankara-cankaya",
    path: "/ankara/cankaya",
    component: () => import('./index-DMXM3NNU.mjs')
  },
  {
    name: "ankara-elmadag",
    path: "/ankara/elmadag",
    component: () => import('./index-D_WSfsYz.mjs')
  },
  {
    name: "ankara-golbasi",
    path: "/ankara/golbasi",
    component: () => import('./index-BW9bXNlD.mjs')
  },
  {
    name: "ankara-haymana",
    path: "/ankara/haymana",
    component: () => import('./index-DBqknaTm.mjs')
  },
  {
    name: "ankara-kalecik",
    path: "/ankara/kalecik",
    component: () => import('./index-BNFNv4vC.mjs')
  },
  {
    name: "ankara-polatli",
    path: "/ankara/polatli",
    component: () => import('./index-AO3tSk1U.mjs')
  },
  {
    name: "giresun-alucra",
    path: "/giresun/alucra",
    component: () => import('./index-DsFJnlIW.mjs')
  },
  {
    name: "giresun-espiye",
    path: "/giresun/espiye",
    component: () => import('./index-DJ0dgxur.mjs')
  },
  {
    name: "giresun-gorele",
    path: "/giresun/gorele",
    component: () => import('./index-rhD_vmT8.mjs')
  },
  {
    name: "istanbul-fatih",
    path: "/istanbul/fatih",
    component: () => import('./index-CdDS05HI.mjs')
  },
  {
    name: "istanbul-sisli",
    path: "/istanbul/sisli",
    component: () => import('./index-DDdjfxRF.mjs')
  },
  {
    name: "istanbul-tuzla",
    path: "/istanbul/tuzla",
    component: () => import('./index-BtxQnqMQ.mjs')
  },
  {
    name: "kastamonu-arac",
    path: "/kastamonu/arac",
    component: () => import('./index-CO_grX75.mjs')
  },
  {
    name: "kastamonu-cide",
    path: "/kastamonu/cide",
    component: () => import('./index-wPY2c08Y.mjs')
  },
  {
    name: "mus-district",
    path: "/mus/:district()",
    component: () => import('./index-Bfoaf_RZ.mjs')
  },
  {
    name: "van-district",
    path: "/van/:district()",
    component: () => import('./index-AFKGif74.mjs')
  },
  {
    name: "agri-district",
    path: "/agri/:district()",
    component: () => import('./index-7AXl6n3Z.mjs')
  },
  {
    name: "ankara-altindag",
    path: "/ankara/altindag",
    component: () => import('./index-BfkjDq5c.mjs')
  },
  {
    name: "ankara-kecioren",
    path: "/ankara/kecioren",
    component: () => import('./index-C3ZKvMq5.mjs')
  },
  {
    name: "ankara-nallihan",
    path: "/ankara/nallihan",
    component: () => import('./index-CIOtjViG.mjs')
  },
  {
    name: "artvin-yusufeli",
    path: "/artvin/yusufeli",
    component: () => import('./index-D92iM7U7.mjs')
  },
  {
    name: "balikesir-gonen",
    path: "/balikesir/gonen",
    component: () => import('./index-DIxv4aaZ.mjs')
  },
  {
    name: "bolu-district",
    path: "/bolu/:district()",
    component: () => import('./index-B13q639C.mjs')
  },
  {
    name: "istanbul-adalar",
    path: "/istanbul/adalar",
    component: () => import('./index-CKcvXEpf.mjs')
  },
  {
    name: "istanbul-beykoz",
    path: "/istanbul/beykoz",
    component: () => import('./index-DXdrtwm-.mjs')
  },
  {
    name: "istanbul-kartal",
    path: "/istanbul/kartal",
    component: () => import('./index-DJyq6Jj6.mjs')
  },
  {
    name: "istanbul-pendik",
    path: "/istanbul/pendik",
    component: () => import('./index-CUlUIvSe.mjs')
  },
  {
    name: "kars-district",
    path: "/kars/:district()",
    component: () => import('./index-DwYXkkXC.mjs')
  },
  {
    name: "kastamonu-abana",
    path: "/kastamonu/abana",
    component: () => import('./index-CPK3wVhT.mjs')
  },
  {
    name: "kastamonu-daday",
    path: "/kastamonu/daday",
    component: () => import('./index-DJk_NDm0.mjs')
  },
  {
    name: "kastamonu-tosya",
    path: "/kastamonu/tosya",
    component: () => import('./index-A0k4W6a3.mjs')
  },
  {
    name: "ordu-district",
    path: "/ordu/:district()",
    component: () => import('./index-BjTAN0BA.mjs')
  },
  {
    name: "rize-district",
    path: "/rize/:district()",
    component: () => import('./index-6KPM6QyV.mjs')
  },
  {
    name: "usak-district",
    path: "/usak/:district()",
    component: () => import('./index-BJ_g0crl.mjs')
  },
  {
    name: "adana-district",
    path: "/adana/:district()",
    component: () => import('./index-ixWaWHqh.mjs')
  },
  {
    name: "ankara-beypazari",
    path: "/ankara/beypazari",
    component: () => import('./index-BjrvLraH.mjs')
  },
  {
    name: "ankara-camlidere",
    path: "/ankara/camlidere",
    component: () => import('./index-7ByNsnvC.mjs')
  },
  {
    name: "ankara-etimesgut",
    path: "/ankara/etimesgut",
    component: () => import('./index-Bop5kRJX.mjs')
  },
  {
    name: "ankara-pursaklar",
    path: "/ankara/pursaklar",
    component: () => import('./index-slC4iA44.mjs')
  },
  {
    name: "aydin-district",
    path: "/aydin/:district()",
    component: () => import('./index-TWaw0lwb.mjs')
  },
  {
    name: "bursa-district",
    path: "/bursa/:district()",
    component: () => import('./index-DjjowuFQ.mjs')
  },
  {
    name: "corum-district",
    path: "/corum/:district()",
    component: () => import('./index-nS5BeTFU.mjs')
  },
  {
    name: "duzce-district",
    path: "/duzce/:district()",
    component: () => import('./index-CSy7PKNR.mjs')
  },
  {
    name: "giresun-bulancak",
    path: "/giresun/bulancak",
    component: () => import('./index-DUV_JkHA.mjs')
  },
  {
    name: "igdir-district",
    path: "/igdir/:district()",
    component: () => import('./index-DUgcLRtw.mjs')
  },
  {
    name: "istanbul-avcilar",
    path: "/istanbul/avcilar",
    component: () => import('./index-vsSrbW_C.mjs')
  },
  {
    name: "istanbul-beyoglu",
    path: "/istanbul/beyoglu",
    component: () => import('./index-BgUvnftQ.mjs')
  },
  {
    name: "istanbul-catalca",
    path: "/istanbul/catalca",
    component: () => import('./index-DwJKQa4q.mjs')
  },
  {
    name: "istanbul-esenler",
    path: "/istanbul/esenler",
    component: () => import('./index-DAxyFTHU.mjs')
  },
  {
    name: "istanbul-kadikoy",
    path: "/istanbul/kadikoy",
    component: () => import('./index-CLRMiAMU.mjs')
  },
  {
    name: "istanbul-maltepe",
    path: "/istanbul/maltepe",
    component: () => import('./index-CkPl-XtI.mjs')
  },
  {
    name: "istanbul-sariyer",
    path: "/istanbul/sariyer",
    component: () => import('./index-DlLFd_d9.mjs')
  },
  {
    name: "istanbul-silivri",
    path: "/istanbul/silivri",
    component: () => import('./index-BIjIZThM.mjs')
  },
  {
    name: "istanbul-uskudar",
    path: "/istanbul/uskudar",
    component: () => import('./index-BhZmpaXD.mjs')
  },
  {
    name: "izmir-district",
    path: "/izmir/:district()",
    component: () => import('./index-BzZ6T7j4.mjs')
  },
  {
    name: "kilis-district",
    path: "/kilis/:district()",
    component: () => import('./index-DJxb_ZcB.mjs')
  },
  {
    name: "konya-district",
    path: "/konya/:district()",
    component: () => import('./index-DcKr0EM1.mjs')
  },
  {
    name: "mugla-district",
    path: "/mugla/:district()",
    component: () => import('./index-CiVD1UCz.mjs')
  },
  {
    name: "nigde-district",
    path: "/nigde/:district()",
    component: () => import('./index-CWsgl7U1.mjs')
  },
  {
    name: "siirt-district",
    path: "/siirt/:district()",
    component: () => import('./index-EDMjR8ix.mjs')
  },
  {
    name: "sivas-district",
    path: "/sivas/:district()",
    component: () => import('./index-BRvJ1n-9.mjs')
  },
  {
    name: "sivas-koyulhisar",
    path: "/sivas/koyulhisar",
    component: () => import('./index-ChA2pc4x.mjs')
  },
  {
    name: "tokat-district",
    path: "/tokat/:district()",
    component: () => import('./index-BHA2zeHi.mjs')
  },
  {
    name: "city-district",
    path: "/:city()/:district()",
    component: () => import('./index-Bac5y5V4.mjs')
  },
  {
    name: "amasya-district",
    path: "/amasya/:district()",
    component: () => import('./index-CiFa-YDg.mjs')
  },
  {
    name: "ankara-district",
    path: "/ankara/:district()",
    component: () => import('./index-DuU57KKk.mjs')
  },
  {
    name: "artvin-district",
    path: "/artvin/:district()",
    component: () => import('./index-CinSKmjk.mjs')
  },
  {
    name: "bartin-district",
    path: "/bartin/:district()",
    component: () => import('./index-Cjd0QkCR.mjs')
  },
  {
    name: "batman-district",
    path: "/batman/:district()",
    component: () => import('./index-HF4VX0La.mjs')
  },
  {
    name: "bingol-district",
    path: "/bingol/:district()",
    component: () => import('./index-BbR0OFLN.mjs')
  },
  {
    name: "bitlis-district",
    path: "/bitlis/:district()",
    component: () => import('./index-CA7zeH-Z.mjs')
  },
  {
    name: "burdur-district",
    path: "/burdur/:district()",
    component: () => import('./index-nGKMKbF3.mjs')
  },
  {
    name: "edirne-district",
    path: "/edirne/:district()",
    component: () => import('./index-tZxSxPL9.mjs')
  },
  {
    name: "elazig-district",
    path: "/elazig/:district()",
    component: () => import('./index-DtQM5-HB.mjs')
  },
  {
    name: "istanbul-atasehir",
    path: "/istanbul/atasehir",
    component: () => import('./index-CXasKUea.mjs')
  },
  {
    name: "istanbul-bagcilar",
    path: "/istanbul/bagcilar",
    component: () => import('./index-DaRYKxSx.mjs')
  },
  {
    name: "istanbul-bakirkoy",
    path: "/istanbul/bakirkoy",
    component: () => import('./index-CStBk-oF.mjs')
  },
  {
    name: "istanbul-besiktas",
    path: "/istanbul/besiktas",
    component: () => import('./index-clJNdRzD.mjs')
  },
  {
    name: "istanbul-cekmekoy",
    path: "/istanbul/cekmekoy",
    component: () => import('./index-Cx_CkfIU.mjs')
  },
  {
    name: "istanbul-esenyurt",
    path: "/istanbul/esenyurt",
    component: () => import('./index-Cz3a1KdN.mjs')
  },
  {
    name: "istanbul-gungoren",
    path: "/istanbul/gungoren",
    component: () => import('./index-r3iLTqaU.mjs')
  },
  {
    name: "istanbul-umraniye",
    path: "/istanbul/umraniye",
    component: () => import('./index-Dqz4hgI8.mjs')
  },
  {
    name: "kastamonu-azdavay",
    path: "/kastamonu/azdavay",
    component: () => import('./index-VLTIBfWI.mjs')
  },
  {
    name: "kastamonu-bozkurt",
    path: "/kastamonu/bozkurt",
    component: () => import('./index-BeLvIDTD.mjs')
  },
  {
    name: "kastamonu-inebolu",
    path: "/kastamonu/inebolu",
    component: () => import('./index-CQO2Ys_8.mjs')
  },
  {
    name: "manisa-district",
    path: "/manisa/:district()",
    component: () => import('./index-BrK67igJ.mjs')
  },
  {
    name: "mardin-district",
    path: "/mardin/:district()",
    component: () => import('./index-CFgX5QIu.mjs')
  },
  {
    name: "mersin-district",
    path: "/mersin/:district()",
    component: () => import('./index-Cn3QPfA7.mjs')
  },
  {
    name: "samsun-district",
    path: "/samsun/:district()",
    component: () => import('./index-CIG0KHxu.mjs')
  },
  {
    name: "sirnak-district",
    path: "/sirnak/:district()",
    component: () => import('./index-D4pZ7pu1.mjs')
  },
  {
    name: "yalova-district",
    path: "/yalova/:district()",
    component: () => import('./index-BwZgTpBJ.mjs')
  },
  {
    name: "yozgat-district",
    path: "/yozgat/:district()",
    component: () => import('./index-C1lwfMe0.mjs')
  },
  {
    name: "aksaray-district",
    path: "/aksaray/:district()",
    component: () => import('./index-DpGY_aX_.mjs')
  },
  {
    name: "ankara-yenimahalle",
    path: "/ankara/yenimahalle",
    component: () => import('./index-CuZ0XnkX.mjs')
  },
  {
    name: "antalya-district",
    path: "/antalya/:district()",
    component: () => import('./index-CRHxyTD4.mjs')
  },
  {
    name: "ardahan-district",
    path: "/ardahan/:district()",
    component: () => import('./index-BM-ko5Zx.mjs')
  },
  {
    name: "balikesir-bandirma",
    path: "/balikesir/bandirma",
    component: () => import('./index-DIRYiWkY.mjs')
  },
  {
    name: "balikesir-sindirgi",
    path: "/balikesir/sindirgi",
    component: () => import('./index-C1OCeELX.mjs')
  },
  {
    name: "bayburt-district",
    path: "/bayburt/:district()",
    component: () => import('./index-DcuaPwN5.mjs')
  },
  {
    name: "bilecik-district",
    path: "/bilecik/:district()",
    component: () => import('./index-Caaj64Fo.mjs')
  },
  {
    name: "cankiri-district",
    path: "/cankiri/:district()",
    component: () => import('./index-CrG34ROo.mjs')
  },
  {
    name: "denizli-district",
    path: "/denizli/:district()",
    component: () => import('./index-tA2wOalA.mjs')
  },
  {
    name: "erzurum-district",
    path: "/erzurum/:district()",
    component: () => import('./index-Dk8huk0U.mjs')
  },
  {
    name: "gaziantep-sahinbey",
    path: "/gaziantep/sahinbey",
    component: () => import('./index-WEGV-bsL.mjs')
  },
  {
    name: "giresun-district",
    path: "/giresun/:district()",
    component: () => import('./index-Df6aegP2.mjs')
  },
  {
    name: "hakkari-district",
    path: "/hakkari/:district()",
    component: () => import('./index-B3dzWXvK.mjs')
  },
  {
    name: "isparta-district",
    path: "/isparta/:district()",
    component: () => import('./index-D5OLsjZO.mjs')
  },
  {
    name: "istanbul-kagithane",
    path: "/istanbul/kagithane",
    component: () => import('./index-B6Nz_PnZ.mjs')
  },
  {
    name: "karabuk-district",
    path: "/karabuk/:district()",
    component: () => import('./index-BofCSdAB.mjs')
  },
  {
    name: "karaman-district",
    path: "/karaman/:district()",
    component: () => import('./index-DJa_YLYl.mjs')
  },
  {
    name: "kastamonu-taskopru",
    path: "/kastamonu/taskopru",
    component: () => import('./index-B28DW9Dk.mjs')
  },
  {
    name: "kayseri-district",
    path: "/kayseri/:district()",
    component: () => import('./index-B3pstQ94.mjs')
  },
  {
    name: "kocaeli-district",
    path: "/kocaeli/:district()",
    component: () => import('./index-Bu-ARy4u.mjs')
  },
  {
    name: "kutahya-district",
    path: "/kutahya/:district()",
    component: () => import('./index-ASqZHouy.mjs')
  },
  {
    name: "malatya-district",
    path: "/malatya/:district()",
    component: () => import('./index-CrI15L3o.mjs')
  },
  {
    name: "sakarya-district",
    path: "/sakarya/:district()",
    component: () => import('./index-CLpqQRNk.mjs')
  },
  {
    name: "trabzon-district",
    path: "/trabzon/:district()",
    component: () => import('./index-C-TsQZII.mjs')
  },
  {
    name: "adiyaman-district",
    path: "/adiyaman/:district()",
    component: () => import('./index-DzqJFx6U.mjs')
  },
  {
    name: "ankara-kizilcahamam",
    path: "/ankara/kizilcahamam",
    component: () => import('./index-jdewKTIB.mjs')
  },
  {
    name: "balikesir-burhaniye",
    path: "/balikesir/burhaniye",
    component: () => import('./index-B9Ae24vz.mjs')
  },
  {
    name: "balikesir-dursunbey",
    path: "/balikesir/dursunbey",
    component: () => import('./index-BFVs1Wqt.mjs')
  },
  {
    name: "erzincan-district",
    path: "/erzincan/:district()",
    component: () => import('./index-CE2grF4J.mjs')
  },
  {
    name: "istanbul-district",
    path: "/istanbul/:district()",
    component: () => import('./index-y07dURMM.mjs')
  },
  {
    name: "istanbul-arnavutkoy",
    path: "/istanbul/arnavutkoy",
    component: () => import('./index-WfdFWgIh.mjs')
  },
  {
    name: "istanbul-basaksehir",
    path: "/istanbul/basaksehir",
    component: () => import('./index-Cjg3TZx_.mjs')
  },
  {
    name: "istanbul-bayrampasa",
    path: "/istanbul/bayrampasa",
    component: () => import('./index-HfJCJMHs.mjs')
  },
  {
    name: "istanbul-beylikduzu",
    path: "/istanbul/beylikduzu",
    component: () => import('./index-DeN4krGt.mjs')
  },
  {
    name: "istanbul-sancaktepe",
    path: "/istanbul/sancaktepe",
    component: () => import('./index-B-y-q9rm.mjs')
  },
  {
    name: "istanbul-sultangazi",
    path: "/istanbul/sultangazi",
    component: () => import('./index-N1LSRcdg.mjs')
  },
  {
    name: "kastamonu-devrekani",
    path: "/kastamonu/devrekani",
    component: () => import('./index-BYci6uGL.mjs')
  },
  {
    name: "kirsehir-district",
    path: "/kirsehir/:district()",
    component: () => import('./index-B-aJq3f9.mjs')
  },
  {
    name: "nevsehir-district",
    path: "/nevsehir/:district()",
    component: () => import('./index-CZE0S-7_.mjs')
  },
  {
    name: "osmaniye-district",
    path: "/osmaniye/:district()",
    component: () => import('./index-g3NACepJ.mjs')
  },
  {
    name: "tekirdag-district",
    path: "/tekirdag/:district()",
    component: () => import('./index-COQ4IIqq.mjs')
  },
  {
    name: "ankara-ayas-neighborhood",
    path: "/ankara/ayas/:neighborhood()",
    component: () => import('./_neighborhood_-CVI4sx0U.mjs')
  },
  {
    name: "ankara-bala-neighborhood",
    path: "/ankara/bala/:neighborhood()",
    component: () => import('./_neighborhood_-BobD3QJn.mjs')
  },
  {
    name: "ankara-kahramankazan",
    path: "/ankara/kahramankazan",
    component: () => import('./index-B7dyWBdn.mjs')
  },
  {
    name: "balikesir-district",
    path: "/balikesir/:district()",
    component: () => import('./index-DrVb5l0M.mjs')
  },
  {
    name: "canakkale-district",
    path: "/canakkale/:district()",
    component: () => import('./index-DRftQlR4.mjs')
  },
  {
    name: "es-madrid-district",
    path: "/es/madrid/:district()",
    component: () => import('./index-Bx4a2ddW.mjs')
  },
  {
    name: "eskisehir-district",
    path: "/eskisehir/:district()",
    component: () => import('./index-B9ZOr-eo.mjs')
  },
  {
    name: "gaziantep-district",
    path: "/gaziantep/:district()",
    component: () => import('./index-XDUQK2p1.mjs')
  },
  {
    name: "gumushane-district",
    path: "/gumushane/:district()",
    component: () => import('./index-BJZTKHgD.mjs')
  },
  {
    name: "istanbul-sultanbeyli",
    path: "/istanbul/sultanbeyli",
    component: () => import('./index-B1MymV4O.mjs')
  },
  {
    name: "istanbul-zeytinburnu",
    path: "/istanbul/zeytinburnu",
    component: () => import('./index-CHJD00QR.mjs')
  },
  {
    name: "kastamonu-district",
    path: "/kastamonu/:district()",
    component: () => import('./index-BuQaXKn5.mjs')
  },
  {
    name: "kirikkale-district",
    path: "/kirikkale/:district()",
    component: () => import('./index-C4c8nTLF.mjs')
  },
  {
    name: "rize-cayeli-neighborhood",
    path: "/rize/cayeli/:neighborhood()",
    component: () => import('./_neighborhood_-Bi8IeG_y.mjs')
  },
  {
    name: "zonguldak-district",
    path: "/zonguldak/:district()",
    component: () => import('./index-2bk3O_hw.mjs')
  },
  {
    name: "ankara-cubuk-neighborhood",
    path: "/ankara/cubuk/:neighborhood()",
    component: () => import('./_neighborhood_-DTBP00T7.mjs')
  },
  {
    name: "ankara-evren-neighborhood",
    path: "/ankara/evren/:neighborhood()",
    component: () => import('./_neighborhood_-B-f9ml9-.mjs')
  },
  {
    name: "ankara-gudul-neighborhood",
    path: "/ankara/gudul/:neighborhood()",
    component: () => import('./_neighborhood_-Tt2pXQTe.mjs')
  },
  {
    name: "ankara-mamak-neighborhood",
    path: "/ankara/mamak/:neighborhood()",
    component: () => import('./_neighborhood_-zswfCRsX.mjs')
  },
  {
    name: "diyarbakir-district",
    path: "/diyarbakir/:district()",
    component: () => import('./index-BdV4Dw6l.mjs')
  },
  {
    name: "istanbul-bahcelievler",
    path: "/istanbul/bahcelievler",
    component: () => import('./index-BZVbViIO.mjs')
  },
  {
    name: "istanbul-buyukcekmece",
    path: "/istanbul/buyukcekmece",
    component: () => import('./index-CbBySUh-.mjs')
  },
  {
    name: "istanbul-kucukcekmece",
    path: "/istanbul/kucukcekmece",
    component: () => import('./index-C3ZSZFc1.mjs')
  },
  {
    name: "kastamonu-catalzeytin",
    path: "/kastamonu/catalzeytin",
    component: () => import('./index-27otfrvp.mjs')
  },
  {
    name: "kirklareli-district",
    path: "/kirklareli/:district()",
    component: () => import('./index-D4YGZAG1.mjs')
  },
  {
    name: "sivas-kangal-neighborhood",
    path: "/sivas/kangal/:neighborhood()",
    component: () => import('./_neighborhood_-Dwq5IedN.mjs')
  },
  {
    name: "adana-yuregir-neighborhood",
    path: "/adana/yuregir/:neighborhood()",
    component: () => import('./_neighborhood_-DZP10JT9.mjs')
  },
  {
    name: "ankara-akyurt-neighborhood",
    path: "/ankara/akyurt/:neighborhood()",
    component: () => import('./_neighborhood_-D9OHrLef.mjs')
  },
  {
    name: "ankara-sereflikochisar",
    path: "/ankara/sereflikochisar",
    component: () => import('./index-G4kbqk4E.mjs')
  },
  {
    name: "ankara-sincan-neighborhood",
    path: "/ankara/sincan/:neighborhood()",
    component: () => import('./_neighborhood_-DBdOVCoB.mjs')
  },
  {
    name: "istanbul-eyup-neighborhood",
    path: "/istanbul/eyup/:neighborhood()",
    component: () => import('./_neighborhood_-DeCjEpFL.mjs')
  },
  {
    name: "istanbul-gaziosmanpasa",
    path: "/istanbul/gaziosmanpasa",
    component: () => import('./index-B0pw3RYl.mjs')
  },
  {
    name: "istanbul-sile-neighborhood",
    path: "/istanbul/sile/:neighborhood()",
    component: () => import('./_neighborhood_-CJ7_E-81.mjs')
  },
  {
    name: "izmir-bergama-neighborhood",
    path: "/izmir/bergama/:neighborhood()",
    component: () => import('./_neighborhood_-vUgA6ARM.mjs')
  },
  {
    name: "izmir-bornova-neighborhood",
    path: "/izmir/bornova/:neighborhood()",
    component: () => import('./_neighborhood_-UALdCw8U.mjs')
  },
  {
    name: "adiyaman-besni-neighborhood",
    path: "/adiyaman/besni/:neighborhood()",
    component: () => import('./_neighborhood_-Dl6zJ86V.mjs')
  },
  {
    name: "ankara-cankaya-neighborhood",
    path: "/ankara/cankaya/:neighborhood()",
    component: () => import('./_neighborhood_-BN115ZVF.mjs')
  },
  {
    name: "ankara-elmadag-neighborhood",
    path: "/ankara/elmadag/:neighborhood()",
    component: () => import('./_neighborhood_-B19LLAS9.mjs')
  },
  {
    name: "ankara-golbasi-neighborhood",
    path: "/ankara/golbasi/:neighborhood()",
    component: () => import('./_neighborhood_-Co7AO8Fi.mjs')
  },
  {
    name: "ankara-haymana-neighborhood",
    path: "/ankara/haymana/:neighborhood()",
    component: () => import('./_neighborhood_-BWBVpEa1.mjs')
  },
  {
    name: "ankara-kalecik-neighborhood",
    path: "/ankara/kalecik/:neighborhood()",
    component: () => import('./_neighborhood_-DcQqrr-j.mjs')
  },
  {
    name: "ankara-polatli-neighborhood",
    path: "/ankara/polatli/:neighborhood()",
    component: () => import('./_neighborhood_-Qe3BWG90.mjs')
  },
  {
    name: "giresun-alucra-neighborhood",
    path: "/giresun/alucra/:neighborhood()",
    component: () => import('./_neighborhood_-S3kahvKL.mjs')
  },
  {
    name: "giresun-espiye-neighborhood",
    path: "/giresun/espiye/:neighborhood()",
    component: () => import('./_neighborhood_-C90zWt71.mjs')
  },
  {
    name: "giresun-gorele-neighborhood",
    path: "/giresun/gorele/:neighborhood()",
    component: () => import('./_neighborhood_-feodJ-UC.mjs')
  },
  {
    name: "istanbul-fatih-neighborhood",
    path: "/istanbul/fatih/:neighborhood()",
    component: () => import('./_neighborhood_-BAImf8qk.mjs')
  },
  {
    name: "istanbul-sisli-neighborhood",
    path: "/istanbul/sisli/:neighborhood()",
    component: () => import('./_neighborhood_-DuFVxR7W.mjs')
  },
  {
    name: "istanbul-tuzla-neighborhood",
    path: "/istanbul/tuzla/:neighborhood()",
    component: () => import('./_neighborhood_-C9PDdlUj.mjs')
  },
  {
    name: "kastamonu-arac-neighborhood",
    path: "/kastamonu/arac/:neighborhood()",
    component: () => import('./_neighborhood_-DNlk-jGY.mjs')
  },
  {
    name: "kastamonu-cide-neighborhood",
    path: "/kastamonu/cide/:neighborhood()",
    component: () => import('./_neighborhood_-BCwWTHDx.mjs')
  },
  {
    name: "mus-district-neighborhood",
    path: "/mus/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-sALlzPzD.mjs')
  },
  {
    name: "van-district-neighborhood",
    path: "/van/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BWl_73Z0.mjs')
  },
  {
    name: "agri-district-neighborhood",
    path: "/agri/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DGaxz3kI.mjs')
  },
  {
    name: "ankara-altindag-neighborhood",
    path: "/ankara/altindag/:neighborhood()",
    component: () => import('./_neighborhood_-8pbTkxTW.mjs')
  },
  {
    name: "ankara-kecioren-neighborhood",
    path: "/ankara/kecioren/:neighborhood()",
    component: () => import('./_neighborhood_-Yemwd1vR.mjs')
  },
  {
    name: "ankara-nallihan-neighborhood",
    path: "/ankara/nallihan/:neighborhood()",
    component: () => import('./_neighborhood_-BurTV_sJ.mjs')
  },
  {
    name: "artvin-yusufeli-neighborhood",
    path: "/artvin/yusufeli/:neighborhood()",
    component: () => import('./_neighborhood_--iN0_YIC.mjs')
  },
  {
    name: "balikesir-gonen-neighborhood",
    path: "/balikesir/gonen/:neighborhood()",
    component: () => import('./_neighborhood_-BvfubwnW.mjs')
  },
  {
    name: "bolu-district-neighborhood",
    path: "/bolu/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-C4r8LeE7.mjs')
  },
  {
    name: "istanbul-adalar-neighborhood",
    path: "/istanbul/adalar/:neighborhood()",
    component: () => import('./_neighborhood_-D2aWCjr-.mjs')
  },
  {
    name: "istanbul-beykoz-neighborhood",
    path: "/istanbul/beykoz/:neighborhood()",
    component: () => import('./_neighborhood_-oNKg-3FK.mjs')
  },
  {
    name: "istanbul-kartal-neighborhood",
    path: "/istanbul/kartal/:neighborhood()",
    component: () => import('./_neighborhood_-NM5Xg4yo.mjs')
  },
  {
    name: "istanbul-pendik-neighborhood",
    path: "/istanbul/pendik/:neighborhood()",
    component: () => import('./_neighborhood_-lQPjgkKY.mjs')
  },
  {
    name: "kars-district-neighborhood",
    path: "/kars/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CvJywdaP.mjs')
  },
  {
    name: "kastamonu-abana-neighborhood",
    path: "/kastamonu/abana/:neighborhood()",
    component: () => import('./_neighborhood_-mBLmvcfV.mjs')
  },
  {
    name: "kastamonu-daday-neighborhood",
    path: "/kastamonu/daday/:neighborhood()",
    component: () => import('./_neighborhood_-CJOQRMWx.mjs')
  },
  {
    name: "kastamonu-tosya-neighborhood",
    path: "/kastamonu/tosya/:neighborhood()",
    component: () => import('./_neighborhood_-DXRTyCEo.mjs')
  },
  {
    name: "ordu-district-neighborhood",
    path: "/ordu/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-1WYLDR9B.mjs')
  },
  {
    name: "rize-district-neighborhood",
    path: "/rize/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Ui9i8Q8M.mjs')
  },
  {
    name: "usak-district-neighborhood",
    path: "/usak/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-XtrPDW-f.mjs')
  },
  {
    name: "adana-district-neighborhood",
    path: "/adana/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Dba-zXy0.mjs')
  },
  {
    name: "afyonkarahisar-district",
    path: "/afyonkarahisar/:district()",
    component: () => import('./index-BZVGXlth.mjs')
  },
  {
    name: "ankara-beypazari-neighborhood",
    path: "/ankara/beypazari/:neighborhood()",
    component: () => import('./_neighborhood_-CLTdcp7n.mjs')
  },
  {
    name: "ankara-camlidere-neighborhood",
    path: "/ankara/camlidere/:neighborhood()",
    component: () => import('./_neighborhood_-pa1VmsBE.mjs')
  },
  {
    name: "ankara-etimesgut-neighborhood",
    path: "/ankara/etimesgut/:neighborhood()",
    component: () => import('./_neighborhood_-Cje7wH1x.mjs')
  },
  {
    name: "ankara-pursaklar-neighborhood",
    path: "/ankara/pursaklar/:neighborhood()",
    component: () => import('./_neighborhood_-D1lrj6oi.mjs')
  },
  {
    name: "aydin-district-neighborhood",
    path: "/aydin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-I1-HlY0n.mjs')
  },
  {
    name: "bursa-district-neighborhood",
    path: "/bursa/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-B2ngTOnB.mjs')
  },
  {
    name: "corum-district-neighborhood",
    path: "/corum/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DW_P-2Fq.mjs')
  },
  {
    name: "duzce-district-neighborhood",
    path: "/duzce/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-fuMrEqaw.mjs')
  },
  {
    name: "giresun-bulancak-neighborhood",
    path: "/giresun/bulancak/:neighborhood()",
    component: () => import('./_neighborhood_-CRha9UoZ.mjs')
  },
  {
    name: "igdir-district-neighborhood",
    path: "/igdir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BKrA5AYu.mjs')
  },
  {
    name: "istanbul-avcilar-neighborhood",
    path: "/istanbul/avcilar/:neighborhood()",
    component: () => import('./_neighborhood_-CJRWdS38.mjs')
  },
  {
    name: "istanbul-beyoglu-neighborhood",
    path: "/istanbul/beyoglu/:neighborhood()",
    component: () => import('./_neighborhood_-D_VLAjh5.mjs')
  },
  {
    name: "istanbul-catalca-neighborhood",
    path: "/istanbul/catalca/:neighborhood()",
    component: () => import('./_neighborhood_-C5o4PBrj.mjs')
  },
  {
    name: "istanbul-esenler-neighborhood",
    path: "/istanbul/esenler/:neighborhood()",
    component: () => import('./_neighborhood_-CvFogrmS.mjs')
  },
  {
    name: "istanbul-kadikoy-neighborhood",
    path: "/istanbul/kadikoy/:neighborhood()",
    component: () => import('./_neighborhood_-BDrou9zt.mjs')
  },
  {
    name: "istanbul-maltepe-neighborhood",
    path: "/istanbul/maltepe/:neighborhood()",
    component: () => import('./_neighborhood_-BAuJw9-M.mjs')
  },
  {
    name: "istanbul-sariyer-neighborhood",
    path: "/istanbul/sariyer/:neighborhood()",
    component: () => import('./_neighborhood_-s3QAf_OE.mjs')
  },
  {
    name: "istanbul-silivri-neighborhood",
    path: "/istanbul/silivri/:neighborhood()",
    component: () => import('./_neighborhood_-DAx22Kyx.mjs')
  },
  {
    name: "istanbul-uskudar-neighborhood",
    path: "/istanbul/uskudar/:neighborhood()",
    component: () => import('./_neighborhood_-5Ob52nFh.mjs')
  },
  {
    name: "izmir-district-neighborhood",
    path: "/izmir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DsNQFi17.mjs')
  },
  {
    name: "kilis-district-neighborhood",
    path: "/kilis/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BOt460iZ.mjs')
  },
  {
    name: "konya-district-neighborhood",
    path: "/konya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Cvg8gxrL.mjs')
  },
  {
    name: "mugla-district-neighborhood",
    path: "/mugla/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Bo01WeUY.mjs')
  },
  {
    name: "nigde-district-neighborhood",
    path: "/nigde/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-1PW3L3zY.mjs')
  },
  {
    name: "siirt-district-neighborhood",
    path: "/siirt/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DaQjTIKW.mjs')
  },
  {
    name: "sivas-district-neighborhood",
    path: "/sivas/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D-cP3LJQ.mjs')
  },
  {
    name: "sivas-koyulhisar-neighborhood",
    path: "/sivas/koyulhisar/:neighborhood()",
    component: () => import('./_neighborhood_-CnNHvrRM.mjs')
  },
  {
    name: "tokat-district-neighborhood",
    path: "/tokat/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-xYYd4VAF.mjs')
  },
  {
    name: "city-district-neighborhood",
    path: "/:city()/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-C00dHGKn.mjs')
  },
  {
    name: "amasya-district-neighborhood",
    path: "/amasya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-ysM1qSkC.mjs')
  },
  {
    name: "ankara-district-neighborhood",
    path: "/ankara/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BCag5L3D.mjs')
  },
  {
    name: "artvin-district-neighborhood",
    path: "/artvin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BluGklvf.mjs')
  },
  {
    name: "bartin-district-neighborhood",
    path: "/bartin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CHmHBKL6.mjs')
  },
  {
    name: "batman-district-neighborhood",
    path: "/batman/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BWrl2twZ.mjs')
  },
  {
    name: "bingol-district-neighborhood",
    path: "/bingol/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CsSdqK8a.mjs')
  },
  {
    name: "bitlis-district-neighborhood",
    path: "/bitlis/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-X0OyRFWt.mjs')
  },
  {
    name: "burdur-district-neighborhood",
    path: "/burdur/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CFTld-Cy.mjs')
  },
  {
    name: "edirne-district-neighborhood",
    path: "/edirne/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DlKs1_6L.mjs')
  },
  {
    name: "elazig-district-neighborhood",
    path: "/elazig/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-tkbk9vkq.mjs')
  },
  {
    name: "istanbul-atasehir-neighborhood",
    path: "/istanbul/atasehir/:neighborhood()",
    component: () => import('./_neighborhood_-DEkYak8O.mjs')
  },
  {
    name: "istanbul-bagcilar-neighborhood",
    path: "/istanbul/bagcilar/:neighborhood()",
    component: () => import('./_neighborhood_-Cy9XtyOG.mjs')
  },
  {
    name: "istanbul-bakirkoy-neighborhood",
    path: "/istanbul/bakirkoy/:neighborhood()",
    component: () => import('./_neighborhood_-CU5uHUwe.mjs')
  },
  {
    name: "istanbul-besiktas-neighborhood",
    path: "/istanbul/besiktas/:neighborhood()",
    component: () => import('./_neighborhood_-B5dSGtcp.mjs')
  },
  {
    name: "istanbul-cekmekoy-neighborhood",
    path: "/istanbul/cekmekoy/:neighborhood()",
    component: () => import('./_neighborhood_-ipxd7d8j.mjs')
  },
  {
    name: "istanbul-esenyurt-neighborhood",
    path: "/istanbul/esenyurt/:neighborhood()",
    component: () => import('./_neighborhood_-e2KpVyTQ.mjs')
  },
  {
    name: "istanbul-gungoren-neighborhood",
    path: "/istanbul/gungoren/:neighborhood()",
    component: () => import('./_neighborhood_-CuDR1q9R.mjs')
  },
  {
    name: "istanbul-umraniye-neighborhood",
    path: "/istanbul/umraniye/:neighborhood()",
    component: () => import('./_neighborhood_-DOqjQaPK.mjs')
  },
  {
    name: "kastamonu-azdavay-neighborhood",
    path: "/kastamonu/azdavay/:neighborhood()",
    component: () => import('./_neighborhood_-Cr-i4BJ8.mjs')
  },
  {
    name: "kastamonu-bozkurt-neighborhood",
    path: "/kastamonu/bozkurt/:neighborhood()",
    component: () => import('./_neighborhood_-oBxk9Hv4.mjs')
  },
  {
    name: "kastamonu-inebolu-neighborhood",
    path: "/kastamonu/inebolu/:neighborhood()",
    component: () => import('./_neighborhood_-C0NEXubN.mjs')
  },
  {
    name: "manisa-district-neighborhood",
    path: "/manisa/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Ibz_ZYCN.mjs')
  },
  {
    name: "mardin-district-neighborhood",
    path: "/mardin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BTTxIGOT.mjs')
  },
  {
    name: "mersin-district-neighborhood",
    path: "/mersin/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-ymN4EpSn.mjs')
  },
  {
    name: "samsun-district-neighborhood",
    path: "/samsun/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CIouZwfB.mjs')
  },
  {
    name: "sirnak-district-neighborhood",
    path: "/sirnak/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DXTnK8qE.mjs')
  },
  {
    name: "yalova-district-neighborhood",
    path: "/yalova/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DxGMCZc6.mjs')
  },
  {
    name: "yozgat-district-neighborhood",
    path: "/yozgat/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CaxA3QiO.mjs')
  },
  {
    name: "aksaray-district-neighborhood",
    path: "/aksaray/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-B30voM31.mjs')
  },
  {
    name: "ankara-yenimahalle-neighborhood",
    path: "/ankara/yenimahalle/:neighborhood()",
    component: () => import('./_neighborhood_-D6-FIfIq.mjs')
  },
  {
    name: "antalya-district-neighborhood",
    path: "/antalya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-COWfHGqP.mjs')
  },
  {
    name: "ardahan-district-neighborhood",
    path: "/ardahan/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-pDD36I8_.mjs')
  },
  {
    name: "balikesir-bandirma-neighborhood",
    path: "/balikesir/bandirma/:neighborhood()",
    component: () => import('./_neighborhood_-DRJ6FBNA.mjs')
  },
  {
    name: "balikesir-sindirgi-neighborhood",
    path: "/balikesir/sindirgi/:neighborhood()",
    component: () => import('./_neighborhood_-COHlg1qs.mjs')
  },
  {
    name: "bayburt-district-neighborhood",
    path: "/bayburt/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-HUmf-U_u.mjs')
  },
  {
    name: "bilecik-district-neighborhood",
    path: "/bilecik/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CVIndcJ2.mjs')
  },
  {
    name: "cankiri-district-neighborhood",
    path: "/cankiri/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CwVukn_f.mjs')
  },
  {
    name: "denizli-district-neighborhood",
    path: "/denizli/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BY4IegG7.mjs')
  },
  {
    name: "erzurum-district-neighborhood",
    path: "/erzurum/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DEiaiNiX.mjs')
  },
  {
    name: "gaziantep-sahinbey-neighborhood",
    path: "/gaziantep/sahinbey/:neighborhood()",
    component: () => import('./_neighborhood_-Bng2qZ5i.mjs')
  },
  {
    name: "giresun-district-neighborhood",
    path: "/giresun/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-Dsb8XEqZ.mjs')
  },
  {
    name: "hakkari-district-neighborhood",
    path: "/hakkari/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BVTrLim-.mjs')
  },
  {
    name: "isparta-district-neighborhood",
    path: "/isparta/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DX3R4K0A.mjs')
  },
  {
    name: "istanbul-kagithane-neighborhood",
    path: "/istanbul/kagithane/:neighborhood()",
    component: () => import('./_neighborhood_-8H4oFG5v.mjs')
  },
  {
    name: "karabuk-district-neighborhood",
    path: "/karabuk/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DIAO360Z.mjs')
  },
  {
    name: "karaman-district-neighborhood",
    path: "/karaman/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DeRcn3k9.mjs')
  },
  {
    name: "kastamonu-taskopru-neighborhood",
    path: "/kastamonu/taskopru/:neighborhood()",
    component: () => import('./_neighborhood_-IrG4bL-Q.mjs')
  },
  {
    name: "kayseri-district-neighborhood",
    path: "/kayseri/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CniycSsp.mjs')
  },
  {
    name: "kocaeli-district-neighborhood",
    path: "/kocaeli/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CddsGsnL.mjs')
  },
  {
    name: "kutahya-district-neighborhood",
    path: "/kutahya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DvvK5pVN.mjs')
  },
  {
    name: "malatya-district-neighborhood",
    path: "/malatya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CF-MyMrG.mjs')
  },
  {
    name: "sakarya-district-neighborhood",
    path: "/sakarya/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BdIGjygy.mjs')
  },
  {
    name: "trabzon-district-neighborhood",
    path: "/trabzon/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-b1fYjHw3.mjs')
  },
  {
    name: "adiyaman-district-neighborhood",
    path: "/adiyaman/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-B61ejw-y.mjs')
  },
  {
    name: "ankara-kizilcahamam-neighborhood",
    path: "/ankara/kizilcahamam/:neighborhood()",
    component: () => import('./_neighborhood_-Bzua9rn6.mjs')
  },
  {
    name: "balikesir-burhaniye-neighborhood",
    path: "/balikesir/burhaniye/:neighborhood()",
    component: () => import('./_neighborhood_-Dwr2bLMt.mjs')
  },
  {
    name: "balikesir-dursunbey-neighborhood",
    path: "/balikesir/dursunbey/:neighborhood()",
    component: () => import('./_neighborhood_-D18clwWj.mjs')
  },
  {
    name: "erzincan-district-neighborhood",
    path: "/erzincan/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D1kzzEpp.mjs')
  },
  {
    name: "istanbul-district-neighborhood",
    path: "/istanbul/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-P9H2-5Q3.mjs')
  },
  {
    name: "istanbul-arnavutkoy-neighborhood",
    path: "/istanbul/arnavutkoy/:neighborhood()",
    component: () => import('./_neighborhood_-KCT7gwJo.mjs')
  },
  {
    name: "istanbul-basaksehir-neighborhood",
    path: "/istanbul/basaksehir/:neighborhood()",
    component: () => import('./_neighborhood_-Xkvzr5F0.mjs')
  },
  {
    name: "istanbul-bayrampasa-neighborhood",
    path: "/istanbul/bayrampasa/:neighborhood()",
    component: () => import('./_neighborhood_-LLRxjvOG.mjs')
  },
  {
    name: "istanbul-beylikduzu-neighborhood",
    path: "/istanbul/beylikduzu/:neighborhood()",
    component: () => import('./_neighborhood_-DdE-VJv9.mjs')
  },
  {
    name: "istanbul-sancaktepe-neighborhood",
    path: "/istanbul/sancaktepe/:neighborhood()",
    component: () => import('./_neighborhood_-CI_Fezro.mjs')
  },
  {
    name: "istanbul-sultangazi-neighborhood",
    path: "/istanbul/sultangazi/:neighborhood()",
    component: () => import('./_neighborhood_-Cq2LjtmN.mjs')
  },
  {
    name: "kastamonu-devrekani-neighborhood",
    path: "/kastamonu/devrekani/:neighborhood()",
    component: () => import('./_neighborhood_-CTFkwpFQ.mjs')
  },
  {
    name: "kirsehir-district-neighborhood",
    path: "/kirsehir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-QqbbpnOt.mjs')
  },
  {
    name: "nevsehir-district-neighborhood",
    path: "/nevsehir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-d4E8tsg3.mjs')
  },
  {
    name: "osmaniye-district-neighborhood",
    path: "/osmaniye/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CJhC0uIx.mjs')
  },
  {
    name: "tekirdag-district-neighborhood",
    path: "/tekirdag/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CVo6Nx0O.mjs')
  },
  {
    name: "ankara-kahramankazan-neighborhood",
    path: "/ankara/kahramankazan/:neighborhood()",
    component: () => import('./_neighborhood_-DtBzC9TP.mjs')
  },
  {
    name: "balikesir-district-neighborhood",
    path: "/balikesir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-C7iY_qKR.mjs')
  },
  {
    name: "canakkale-district-neighborhood",
    path: "/canakkale/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BWuba9oP.mjs')
  },
  {
    name: "es-madrid-district-neighborhood",
    path: "/es/madrid/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-pBq0mPhl.mjs')
  },
  {
    name: "eskisehir-district-neighborhood",
    path: "/eskisehir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DZgbO6DR.mjs')
  },
  {
    name: "gaziantep-district-neighborhood",
    path: "/gaziantep/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BtzI7Kgt.mjs')
  },
  {
    name: "gumushane-district-neighborhood",
    path: "/gumushane/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-DAuI-yK-.mjs')
  },
  {
    name: "istanbul-sultanbeyli-neighborhood",
    path: "/istanbul/sultanbeyli/:neighborhood()",
    component: () => import('./_neighborhood_-DzuWw9-6.mjs')
  },
  {
    name: "istanbul-zeytinburnu-neighborhood",
    path: "/istanbul/zeytinburnu/:neighborhood()",
    component: () => import('./_neighborhood_-DKNJ-v86.mjs')
  },
  {
    name: "kastamonu-district-neighborhood",
    path: "/kastamonu/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BPRMqpr6.mjs')
  },
  {
    name: "kirikkale-district-neighborhood",
    path: "/kirikkale/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-BuxO7CtR.mjs')
  },
  {
    name: "zonguldak-district-neighborhood",
    path: "/zonguldak/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D_tYjb-A.mjs')
  },
  {
    name: "diyarbakir-district-neighborhood",
    path: "/diyarbakir/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-D8IjQHXv.mjs')
  },
  {
    name: "istanbul-bahcelievler-neighborhood",
    path: "/istanbul/bahcelievler/:neighborhood()",
    component: () => import('./_neighborhood_-Br9Lje5N.mjs')
  },
  {
    name: "istanbul-buyukcekmece-neighborhood",
    path: "/istanbul/buyukcekmece/:neighborhood()",
    component: () => import('./_neighborhood_-CNX2BdAL.mjs')
  },
  {
    name: "istanbul-kucukcekmece-neighborhood",
    path: "/istanbul/kucukcekmece/:neighborhood()",
    component: () => import('./_neighborhood_-BiItgpbI.mjs')
  },
  {
    name: "kastamonu-catalzeytin-neighborhood",
    path: "/kastamonu/catalzeytin/:neighborhood()",
    component: () => import('./_neighborhood_-C_mi8LRH.mjs')
  },
  {
    name: "kirklareli-district-neighborhood",
    path: "/kirklareli/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-CFp12iHh.mjs')
  },
  {
    name: "ankara-sereflikochisar-neighborhood",
    path: "/ankara/sereflikochisar/:neighborhood()",
    component: () => import('./_neighborhood_-DKXZGNTC.mjs')
  },
  {
    name: "istanbul-gaziosmanpasa-neighborhood",
    path: "/istanbul/gaziosmanpasa/:neighborhood()",
    component: () => import('./_neighborhood_-dbSzrVok.mjs')
  },
  {
    name: "ankara-cankaya-barbaros-mahallesi",
    path: "/ankara/cankaya/barbaros-mahallesi",
    component: () => import('./index-sXal3dQh.mjs')
  },
  {
    name: "istanbul-sariyer-maslak-mahallesi",
    path: "/istanbul/sariyer/maslak-mahallesi",
    component: () => import('./index-BViDE4NY.mjs')
  },
  {
    name: "afyonkarahisar-district-neighborhood",
    path: "/afyonkarahisar/:district()/:neighborhood()",
    component: () => import('./_neighborhood_-SEIt3Kyk.mjs')
  },
  {
    name: "ankara-cankaya-yasamkent-mahallesi",
    path: "/ankara/cankaya/yasamkent-mahallesi",
    component: () => import('./index-BTmzqzY2.mjs')
  },
  {
    name: "gaziantep-sahinbey-karatas-mahallesi",
    path: "/gaziantep/sahinbey/karatas-mahallesi",
    component: () => import('./index-Cgd5vaV1.mjs')
  },
  {
    name: "izmir-konak-mehmet-ali-akman-mahallesi",
    path: "/izmir/konak/mehmet-ali-akman-mahallesi",
    component: () => import('./index-DGiiwgJu.mjs')
  }
];
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
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
Object.assign(/* @__PURE__ */ Object.create(null), {});
const pageIslandRoutes = Object.assign(/* @__PURE__ */ Object.create(null), {});
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
      const lastTo = to.matched.at(-1)?.components?.default;
      const lastFrom = from.matched.at(-1)?.components?.default;
      if (lastTo === lastFrom) {
        const toKey = generateRouteKey$1({ route: to, Component: { type: lastTo } });
        const fromKey = generateRouteKey$1({ route: from, Component: { type: lastFrom } });
        if (toKey === fromKey) {
          syncCurrentRoute();
        }
        return;
      }
      if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) {
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
    const error = /* @__PURE__ */ useError();
    const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
    if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        {
          delete nuxtApp._middlewareTo;
        }
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
    const hasDeferredRoute = false;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext && !isServerPage) {
      return { provide: { router } };
    }
    function pushErroredRoute(to) {
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      {
        nuxtApp._middlewareTo = to;
      }
      if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
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
                pushErroredRoute(to);
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
    if (isServerPage) {
      router.beforeResolve((to) => {
        const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
        const actual = to.matched.find((m) => m.components?.default?.__nuxt_island)?.components?.default;
        if (!expected || expected !== actual?.__nuxt_island) {
          nuxtApp.ssrContext["~renderResponse"] = {
            statusCode: 400,
            statusMessage: "Invalid island request path"
          };
          return false;
        }
      });
    }
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      {
        delete nuxtApp._middlewareTo;
      }
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
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
        const pluginNavigatedAway = false;
        if (pluginNavigatedAway) ;
        else if (hasDeferredRoute) ;
        else {
          await router.replace({
            ...resolvedInitialRoute,
            force: true
          });
        }
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isSpanish = computed(() => route.path.startsWith("/es"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}>`);
      if (unref(isSpanish)) {
        _push(`<div class="header-content"><a href="/es" class="header-logo-link"><div class="header-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><span class="header-logo-text">Guía de Códigos Postales</span></a><nav><a href="/es">Ciudades</a></nav></div>`);
      } else {
        _push(`<div class="header-content"><a href="/" class="header-logo-link"><div class="header-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><span class="header-logo-text">Posta Kodu Rehberi</span></a><nav><a href="/">Şehirler</a><a href="/telefon-kodlari">Telefon Kodları</a><a href="https://postakodu.ptt.gov.tr/" target="_blank" rel="noopener">PTT Sorgulama</a></nav></div>`);
      }
      _push(`</header>`);
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
        default: markStableSlot((routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        })
      });
    };
  }
});
function markStableSlot(fn) {
  const wrapped = ((routeProps) => {
    const result = fn(routeProps);
    if (Array.isArray(result)) {
      return result;
    }
    if (result == null || !isVNode(result)) {
      return [createCommentVNode()];
    }
    return [result];
  });
  wrapped._n = true;
  return wrapped;
}
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$3;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
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
    const _Error404 = defineAsyncComponent(() => import('./error-404-CKb9zQN0.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-COi01_ML.mjs'));
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
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
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
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
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

export { _export_sfc as _, useRouter as a, useNuxtApp as b, useRuntimeConfig as c, nuxtLinkDefaults as d, entry_default as default, encodeRoutePath as e, fetchDefaults as f, asyncDataDefaults as g, createError as h, navigateTo as n, resolveRouteObject as r, sanitizeTag as s, tryUseNuxtApp as t, useRoute as u };
//# sourceMappingURL=server.mjs.map
