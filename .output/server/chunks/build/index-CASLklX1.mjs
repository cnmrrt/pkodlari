import { _ as __nuxt_component_0, s as slugify } from './server.mjs';
import { defineComponent, inject, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, ref, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { Loader2, Search, Map, Building2, MapPin } from 'lucide-vue-next';
import { u as useHead } from './v3-B2IqmCl5.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const query = ref("");
    const isFocused = ref(false);
    const results = computed(() => {
      if (!props.data || query.value.length < 2) return [];
      const lowerQuery = query.value.toLocaleLowerCase("tr");
      slugify(query.value);
      const items = [];
      Object.entries(props.data).forEach(([citySlug, cityItem]) => {
        if (cityItem.name.toLocaleLowerCase("tr").includes(lowerQuery)) {
          items.push({
            city: cityItem.name,
            citySlug,
            district: "",
            districtSlug: "",
            neighborhood: "",
            neighborhoodSlug: "",
            zipCode: "",
            type: "city"
          });
        }
        Object.entries(cityItem.districts).forEach(([distSlug, distItem]) => {
          if (distItem.name.toLocaleLowerCase("tr").includes(lowerQuery)) {
            items.push({
              city: cityItem.name,
              citySlug,
              district: distItem.name,
              districtSlug: distSlug,
              neighborhood: "",
              neighborhoodSlug: "",
              zipCode: "",
              type: "district"
            });
          }
          Object.entries(distItem.neighborhoods).forEach(([neighSlug, neighItem]) => {
            if (neighItem.name.toLocaleLowerCase("tr").includes(lowerQuery) || neighItem.zipCode.includes(query.value)) {
              items.push({
                city: cityItem.name,
                citySlug,
                district: distItem.name,
                districtSlug: distSlug,
                neighborhood: neighItem.name,
                neighborhoodSlug: neighSlug,
                zipCode: neighItem.zipCode,
                type: "neighborhood"
              });
            }
          });
        });
      });
      return items.slice(0, 6);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full max-w-xl mx-auto" }, _attrs))}><div class="${ssrRenderClass([isFocused.value ? "ring-2 ring-slate-900/5 border-slate-400" : "border-slate-200", "flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all"])}">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input type="text" placeholder="\u0130l, il\xE7e veya mahalle ismi yaz\u0131n..." class="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"${ssrRenderAttr("value", query.value)}></div>`);
      if (isFocused.value && query.value.length >= 2) {
        _push(`<div class="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-[60] overflow-hidden">`);
        if (results.value.length > 0) {
          _push(`<div class="divide-y divide-slate-100"><!--[-->`);
          ssrRenderList(results.value, (res, i) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: i,
              to: res.type === "city" ? `/city/${res.citySlug}` : res.type === "district" ? `/city/${res.citySlug}/${res.districtSlug}` : `/city/${res.citySlug}/${res.districtSlug}/${res.neighborhoodSlug}`,
              class: "flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="text-slate-400"${_scopeId}>`);
                  if (res.type === "city") {
                    _push2(ssrRenderComponent(unref(Map), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  } else if (res.type === "district") {
                    _push2(ssrRenderComponent(unref(Building2), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  }
                  _push2(`</div><div class="flex-1"${_scopeId}><div class="font-semibold text-sm text-slate-900"${_scopeId}>${ssrInterpolate(res.neighborhood || res.district || res.city)}</div><div class="text-[10px] text-slate-400 uppercase font-medium"${_scopeId}>${ssrInterpolate([res.city, res.district].filter(Boolean).join(" / "))}</div></div>`);
                  if (res.zipCode) {
                    _push2(`<div class="mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded"${_scopeId}>${ssrInterpolate(res.zipCode)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "text-slate-400" }, [
                      res.type === "city" ? (openBlock(), createBlock(unref(Map), {
                        key: 0,
                        class: "w-4 h-4"
                      })) : res.type === "district" ? (openBlock(), createBlock(unref(Building2), {
                        key: 1,
                        class: "w-4 h-4"
                      })) : (openBlock(), createBlock(unref(MapPin), {
                        key: 2,
                        class: "w-4 h-4"
                      }))
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "font-semibold text-sm text-slate-900" }, toDisplayString(res.neighborhood || res.district || res.city), 1),
                      createVNode("div", { class: "text-[10px] text-slate-400 uppercase font-medium" }, toDisplayString([res.city, res.district].filter(Boolean).join(" / ")), 1)
                    ]),
                    res.zipCode ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded"
                    }, toDisplayString(res.zipCode), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="p-8 text-center text-slate-400 text-sm">Sonu\xE7 bulunamad\u0131</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const postalData = inject("postalData");
    useHead({
      title: "T\xFCrkiye Posta Kodlar\u0131"
    });
    computed(() => {
      if (!(postalData == null ? void 0 : postalData.value)) return [];
      return Object.values(postalData.value).sort((a, b) => a.name.localeCompare(b.name, "tr"));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchBar = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      if (!unref(postalData)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 flex flex-col items-center justify-center" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(Loader2), { class: "w-8 h-8 text-slate-400 animate-spin" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500" }, _attrs))}><div class="text-center mb-12 py-12"><h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">T\xFCrkiye Posta Kodlar\u0131</h1><p class="text-slate-500 mb-10">H\u0131zl\u0131ca il\xE7e ve mahalle posta kodlar\u0131n\u0131 sorgulay\u0131n.</p>`);
        _push(ssrRenderComponent(_component_SearchBar, { data: unref(postalData) }, null, _parent));
        _push(`</div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
        ssrRenderList(unref(postalData), (cityItem, slug) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: slug,
            to: `/city/${slug}`,
            class: "soft-card p-4 rounded-xl text-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="font-semibold text-slate-900 text-sm truncate uppercase"${_scopeId}>${ssrInterpolate(cityItem.name)}</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider"${_scopeId}>${ssrInterpolate(Object.keys(cityItem.districts || {}).length)} \u0130L\xC7E </div>`);
              } else {
                return [
                  createVNode("div", { class: "font-semibold text-slate-900 text-sm truncate uppercase" }, toDisplayString(cityItem.name), 1),
                  createVNode("div", { class: "text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider" }, toDisplayString(Object.keys(cityItem.districts || {}).length) + " \u0130L\xC7E ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CASLklX1.mjs.map
