import { a as useRoute, t as titleCase, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, inject, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { ArrowLeft, ChevronRight, MapPin } from 'lucide-vue-next';
import { u as useHead } from './v3-nkHqSgkI.mjs';
import { u as usePageSeo } from './usePageSeo-DXv1_ikA.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const postalData = inject("postalData");
    const citySlug = computed(() => route.params.city);
    const cityItem = computed(() => {
      var _a;
      return (_a = postalData == null ? void 0 : postalData.value) == null ? void 0 : _a[citySlug.value];
    });
    const pageTitle = computed(
      () => cityItem.value ? `${titleCase(cityItem.value.name)} Posta Kodlar\u0131` : "\u015Eehir Bulunamad\u0131"
    );
    const pageDesc = computed(() => {
      if (!cityItem.value) return "Posta Kodu Rehberi";
      return `${titleCase(
        cityItem.value.name
      )} iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!`;
    });
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        computed(() => {
          if (!cityItem.value) return {};
          return {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Anasayfa",
                  item: `https://pkodlari.com/`
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: titleCase(cityItem.value.name),
                  item: `https://pkodlari.com/${citySlug.value}`
                }
              ]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    const districts = computed(() => {
      if (!cityItem.value) return [];
      return Object.entries(cityItem.value.districts).sort(
        ([, a], [, b]) => a.name.localeCompare(b.name, "tr")
      );
    });
    const isValid = computed(() => !!cityItem.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-slate-400 hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ArrowLeft), { class: "w-5 h-5" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(cityItem.value.name))} Posta Kodlar\u0131 </h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">${ssrInterpolate(districts.value.length)} \u0130L\xC7E </p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(districts.value, ([distSlug, distItem]) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: distSlug,
            to: `/${citySlug.value}/${distSlug}`,
            class: "soft-card p-6 rounded-xl flex items-center justify-between"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><h3 class="font-bold text-slate-900 text-lg"${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(distItem.name))}</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"${_scopeId}>${ssrInterpolate(Object.keys(distItem.neighborhoods || {}).length)} mahalle </p></div>`);
                _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5 text-slate-300" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-bold text-slate-900 text-lg" }, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(distItem.name)), 1),
                    createVNode("p", { class: "text-xs text-slate-400 font-medium uppercase tracking-wider" }, toDisplayString(Object.keys(distItem.neighborhoods || {}).length) + " mahalle ", 1)
                  ]),
                  createVNode(unref(ChevronRight), { class: "w-5 h-5 text-slate-300" })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
        if (cityItem.value.mapCode) {
          _push(`<div class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"><div class="mb-4 flex items-center gap-2 px-2">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3></div>`);
          if (cityItem.value.mapCode.trim().startsWith("<")) {
            _push(`<div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full">${(_a = cityItem.value.mapCode) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", cityItem.value.mapCode)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[city]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3wwJ_3AG.mjs.map
