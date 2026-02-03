import { u as useRoute, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, inject, ref, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { ChevronRight, MapPin, Check, Copy, Info, Share2 } from 'lucide-vue-next';
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
  __name: "[neighborhood]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const postalData = inject("postalData");
    const copied = ref(false);
    const citySlug = computed(() => route.params.city);
    const districtSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const cityItem = computed(() => {
      var _a;
      return (_a = postalData == null ? void 0 : postalData.value) == null ? void 0 : _a[citySlug.value];
    });
    const districtItem = computed(() => {
      var _a;
      return (_a = cityItem.value) == null ? void 0 : _a.districts[districtSlug.value];
    });
    const neighItem = computed(() => {
      var _a;
      return (_a = districtItem.value) == null ? void 0 : _a.neighborhoods[neighborhoodSlug.value];
    });
    useHead({
      title: computed(() => neighItem.value ? `${neighItem.value.name} Posta Kodu | Rehber` : "Posta Kodu Bulunamad\u0131")
    });
    const isValid = computed(() => !!neighItem.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-2xl mx-auto py-8" }, _attrs))}><nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`T\xDCRK\u0130YE`);
            } else {
              return [
                createTextVNode("T\xDCRK\u0130YE")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/city/${citySlug.value}`,
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(cityItem.value.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(cityItem.value.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/city/${citySlug.value}/${districtSlug.value}`,
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(districtItem.value.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(districtItem.value.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav><div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm"><div class="text-center mb-10"><div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-6 h-6 text-slate-900" }, null, _parent));
        _push(`</div><h1 class="text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">${ssrInterpolate(neighItem.value.name)}</h1><p class="text-slate-500 font-medium uppercase tracking-widest text-sm">${ssrInterpolate(districtItem.value.name)}, ${ssrInterpolate(cityItem.value.name)}</p></div><div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden"><div class="relative z-10"><p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p><div class="mono text-7xl font-bold text-slate-900 mb-8">${ssrInterpolate(neighItem.value.zipCode)}</div><button class="${ssrRenderClass([copied.value ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800", "flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">${ssrInterpolate(neighItem.value.zipCode.substring(0, 2))}</div></div><div class="mt-12 grid grid-cols-1 gap-4"><div class="flex items-start gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">`);
        _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-blue-500 mt-0.5" }, null, _parent));
        _push(`<div><h4 class="text-sm font-bold text-slate-900 mb-1">Adres Yaz\u0131m\u0131 \xD6rne\u011Fi</h4><div class="text-sm text-slate-600 leading-relaxed italic">${ssrInterpolate(neighItem.value.name)} Mah. No:1 D:1<br> ${ssrInterpolate(neighItem.value.zipCode)} ${ssrInterpolate(districtItem.value.name)}/${ssrInterpolate(cityItem.value.name)}</div></div></div></div></div><div class="mt-8 flex justify-center"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` PAYLA\u015E </button></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">Veri Bulunamad\u0131!</h2><p class="text-sm mb-4">Arad\u0131\u011F\u0131n\u0131z mahalle bilgisine ula\u015F\u0131lamad\u0131. L\xFCtfen adresi kontrol edin.</p><div class="text-left text-xs font-mono bg-white p-4 rounded border border-red-100 overflow-auto max-h-64"><p><strong>URL Params:</strong> ${ssrInterpolate(unref(route).params)}</p><p><strong>City Valid:</strong> ${ssrInterpolate(!!cityItem.value ? "YES" : "NO")} (${ssrInterpolate(citySlug.value)})</p><p><strong>District Valid:</strong> ${ssrInterpolate(!!districtItem.value ? "YES" : "NO")} (${ssrInterpolate(districtSlug.value)})</p><p><strong>Neighborhood Request:</strong> &quot;${ssrInterpolate(neighborhoodSlug.value)}&quot;</p>`);
        if (districtItem.value) {
          _push(`<div><p><strong>Available Neighborhoods (First 5):</strong></p><ul><!--[-->`);
          ssrRenderList(Object.keys(districtItem.value.neighborhoods).slice(0, 5), (key) => {
            _push(`<li>${ssrInterpolate(key)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "mt-6 inline-block text-red-700 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ana Sayfaya D\xF6n`);
            } else {
              return [
                createTextVNode("Ana Sayfaya D\xF6n")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/city/[city]/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_-CFrYjDRf.mjs.map
