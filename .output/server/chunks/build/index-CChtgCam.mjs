import { u as useRoute, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, inject, ref, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Search, ChevronRight, MapPin } from 'lucide-vue-next';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const postalData = inject("postalData");
    const filter = ref("");
    const citySlug = computed(() => route.params.city);
    const districtSlug = computed(() => route.params.district);
    const cityItem = computed(() => {
      var _a;
      return (_a = postalData == null ? void 0 : postalData.value) == null ? void 0 : _a[citySlug.value];
    });
    const districtItem = computed(() => {
      var _a;
      return (_a = cityItem.value) == null ? void 0 : _a.districts[districtSlug.value];
    });
    useHead({
      title: computed(() => districtItem.value ? `${districtItem.value.name} Posta Kodlar\u0131 | Rehber` : "\u0130l\xE7e Bulunamad\u0131")
    });
    const isValid = computed(() => !!districtItem.value);
    const neighs = computed(() => {
      if (!isValid.value) return [];
      const items = Object.entries(districtItem.value.neighborhoods);
      return items.filter(([, n]) => n.name.toLocaleLowerCase("tr").includes(filter.value.toLocaleLowerCase("tr"))).sort(([, a], [, b]) => a.name.localeCompare(b.name, "tr"));
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"><div class="flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${citySlug.value}`,
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
        _push(`<div><h1 class="text-3xl font-bold text-slate-900 uppercase tracking-tight">${ssrInterpolate(districtItem.value.name)} Posta Kodlar\u0131</h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">${ssrInterpolate(cityItem.value.name)}</p></div></div><div class="relative w-full md:w-64">`);
        _push(ssrRenderComponent(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, null, _parent));
        _push(`<input type="text" placeholder="Mahallelerde ara..." class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"${ssrRenderAttr("value", filter.value)}></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(neighs.value, ([nSlug, nItem]) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: nSlug,
            to: `/${citySlug.value}/${districtSlug.value}/${nSlug}`,
            class: "soft-card p-5 flex items-center justify-between group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="min-w-0 pr-4"${_scopeId}><h4 class="font-semibold text-slate-900 uppercase truncate text-base"${_scopeId}>${ssrInterpolate(nItem.name)}</h4><p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"${_scopeId}>MAHALLE</p></div><div class="flex items-center gap-3"${_scopeId}><span class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"${_scopeId}>${ssrInterpolate(nItem.zipCode)}</span>`);
                _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "min-w-0 pr-4" }, [
                    createVNode("h4", { class: "font-semibold text-slate-900 uppercase truncate text-base" }, toDisplayString(nItem.name), 1),
                    createVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5" }, "MAHALLE")
                  ]),
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("span", { class: "mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm" }, toDisplayString(nItem.zipCode), 1),
                    createVNode(unref(ChevronRight), { class: "w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (neighs.value.length === 0) {
          _push(`<div class="col-span-full p-12 text-center text-slate-400 text-sm">Sonu\xE7 bulunamad\u0131</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (districtItem.value.mapCode) {
          _push(`<div class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"><div class="mb-4 flex items-center gap-2 px-2">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3></div>`);
          if (districtItem.value.mapCode.trim().startsWith("<")) {
            _push(`<div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full">${(_a = districtItem.value.mapCode) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", districtItem.value.mapCode)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[city]/[district]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CChtgCam.mjs.map
