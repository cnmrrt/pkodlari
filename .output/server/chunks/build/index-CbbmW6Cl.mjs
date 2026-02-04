import { u as useAsyncData, s as slugify, t as titleCase, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: adanaData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("adana-specific-data", async () => {
      const response = await $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/posta_kodlari_duzenlenmis/adana.json");
      const cityObj = {
        name: "ADANA",
        districts: {}
      };
      response.forEach((item) => {
        const distStr = String(item.ilce || "MERKEZ").trim().toLocaleUpperCase("tr");
        const neighStr = String(item.mahalle || "MERKEZ").trim().toLocaleUpperCase("tr");
        const distSlug = slugify(distStr);
        const neighSlug = slugify(neighStr);
        const codeStr = String(item.postaKodu || "00000").trim();
        if (!cityObj.districts[distSlug]) {
          cityObj.districts[distSlug] = {
            name: distStr,
            neighborhoods: {}
          };
        }
        cityObj.districts[distSlug].neighborhoods[neighSlug] = {
          name: neighStr,
          zipCode: codeStr
        };
      });
      return cityObj;
    })), __temp = await __temp, __restore(), __temp);
    useHead({
      title: computed(() => adanaData.value ? `${titleCase(adanaData.value.name)} Posta Kodlar\u0131` : "City Not Found"),
      meta: [
        {
          name: "description",
          content: computed(() => adanaData.value ? `${titleCase(adanaData.value.name)} iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!` : "")
        }
      ],
      script: [
        {
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
                "name": "Adana",
                "item": `https://postakodu.com/adana`
              }
            ]
          })
        }
      ]
    });
    const districts = computed(() => {
      if (!adanaData.value) return [];
      return Object.entries(adanaData.value.districts).sort(([, a], [, b]) => a.name.localeCompare(b.name, "tr"));
    });
    const isValid = computed(() => !!adanaData.value);
    return (_ctx, _push, _parent, _attrs) => {
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
        _push(`<div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(unref(adanaData).name))} Posta Kodlar\u0131</h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">${ssrInterpolate(districts.value.length)} \u0130L\xC7E</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(districts.value, ([distSlug, distItem]) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: distSlug,
            to: `/adana/${distSlug}`,
            class: "soft-card p-6 rounded-xl flex items-center justify-between"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><h3 class="font-bold text-slate-900 text-lg"${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(distItem.name))}</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"${_scopeId}>${ssrInterpolate(Object.keys(distItem.neighborhoods || {}).length)} mahalle</p></div>`);
                _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5 text-slate-300" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-bold text-slate-900 text-lg" }, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(distItem.name)), 1),
                    createVNode("p", { class: "text-xs text-slate-400 font-medium uppercase tracking-wider" }, toDisplayString(Object.keys(distItem.neighborhoods || {}).length) + " mahalle", 1)
                  ]),
                  createVNode(unref(ChevronRight), { class: "w-5 h-5 text-slate-300" })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adana/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CbbmW6Cl.mjs.map
