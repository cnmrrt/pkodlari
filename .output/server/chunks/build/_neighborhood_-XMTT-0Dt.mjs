import { a as useRoute, u as useAsyncData, s as slugify, t as titleCase, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, computed, ref, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { ChevronRight, MapPin, Check, Copy, Share2 } from 'lucide-vue-next';
import { u as useHead } from './v3-nkHqSgkI.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const distSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const copied = ref(false);
    const { data: ankaraData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("ankara-specific-data", async () => {
      const response = await $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/posta_kodlari_duzenlenmis/ankara.json");
      const cityObj = {
        name: "ANKARA",
        districts: {}
      };
      response.forEach((item) => {
        const dStr = String(item.ilce || "MERKEZ").trim().toLocaleUpperCase("tr");
        const nStr = String(item.mahalle || "MERKEZ").trim().toLocaleUpperCase("tr");
        const dSlug = slugify(dStr);
        const nSlug = slugify(nStr);
        const codeStr = String(item.postaKodu || "00000").trim();
        if (!cityObj.districts[dSlug]) {
          cityObj.districts[dSlug] = {
            name: dStr,
            neighborhoods: {}
          };
        }
        cityObj.districts[dSlug].neighborhoods[nSlug] = {
          name: nStr,
          zipCode: codeStr
        };
      });
      return cityObj;
    })), __temp = await __temp, __restore(), __temp);
    const districtItem = computed(() => {
      var _a;
      return (_a = ankaraData.value) == null ? void 0 : _a.districts[distSlug.value];
    });
    const neighItem = computed(() => {
      var _a;
      return (_a = districtItem.value) == null ? void 0 : _a.neighborhoods[neighborhoodSlug.value];
    });
    useHead({
      title: computed(() => neighItem.value ? `${titleCase(neighItem.value.name)} Posta Kodu` : "Posta Kodu Bulunamad\u0131"),
      meta: [
        {
          name: "description",
          content: computed(() => {
            if (!districtItem.value || !neighItem.value) return "";
            return `Ankara ilinin ${titleCase(districtItem.value.name)} il\xE7esine ba\u011Fl\u0131 ${titleCase(neighItem.value.name)}'nin posta kodunu g\xF6rmek i\xE7in t\u0131klay\u0131n!`;
          })
        }
      ],
      script: [
        computed(() => {
          if (!districtItem.value || !neighItem.value) return {};
          return {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Anasayfa",
                  "item": `https://postakodu.com/`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Ankara",
                  "item": `https://postakodu.com/ankara`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": titleCase(districtItem.value.name),
                  "item": `https://postakodu.com/ankara/${distSlug.value}`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": titleCase(neighItem.value.name),
                  "item": `https://postakodu.com/ankara/${distSlug.value}/${neighborhoodSlug.value}`
                }
              ]
            })
          };
        })
      ]
    });
    const isValid = computed(() => !!neighItem.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-2xl mx-auto" }, _attrs))}><nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2">`);
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
          to: "/ankara",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ANKARA`);
            } else {
              return [
                createTextVNode("ANKARA")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/ankara/${distSlug.value}`,
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(districtItem.value.name))}`);
            } else {
              return [
                createTextVNode(toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(districtItem.value.name)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav><div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm"><div class="text-center mb-10"><div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-6 h-6 text-slate-900" }, null, _parent));
        _push(`</div><h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(neighItem.value.name))}</h1><p class="text-slate-500 font-medium uppercase tracking-widest text-sm">${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(districtItem.value.name))}, ANKARA</p></div><div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden"><div class="relative z-10"><p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p><div class="mono text-7xl font-bold text-slate-900 mb-8">${ssrInterpolate(neighItem.value.zipCode)}</div><button class="${ssrRenderClass([copied.value ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800", "flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">${ssrInterpolate(neighItem.value.zipCode.substring(0, 2))}</div></div></div><div class="mt-8 flex justify-center"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` PAYLA\u015E </button></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">Veri Bulunamad\u0131!</h2><p class="text-sm mb-4">Arad\u0131\u011F\u0131n\u0131z mahalle bilgisine ula\u015F\u0131lamad\u0131. L\xFCtfen adresi kontrol edin.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ankara/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_-XMTT-0Dt.mjs.map
