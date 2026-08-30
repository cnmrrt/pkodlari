import { _ as __nuxt_component_0 } from './nuxt-link-C5pz7yFL.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { ArrowLeft } from 'lucide-vue-next';
import { u as useAsyncData, s as slugify } from './asyncData-gHCZgazS.mjs';
import { u as useHead } from './v3-Dv9g0FGI.mjs';
import { u as usePageSeo } from './usePageSeo-CgmHQHjs.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'perfect-debounce';

const pageDesc = "Artvin iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: artvinData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "artvin-data",
      () => $fetch("https://pkodlari.com/data/artvin.json")
    )), __temp = await __temp, __restore(), __temp);
    const districts = computed(() => {
      if (!artvinData.value) return [];
      const districtMap = {};
      artvinData.value.forEach((item) => {
        const distName = item.ilce || "MERKEZ";
        const distSlug = slugify(distName);
        if (!districtMap[distSlug]) {
          districtMap[distSlug] = { name: distName, count: 0 };
        }
        districtMap[distSlug].count++;
      });
      return Object.entries(districtMap).sort(([, a], [, b]) => a.name.localeCompare(b.name, "tr"));
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const pageTitle = `Artvin Posta Kodlar\u0131 ve \u0130l\xE7eleri ${currentYear}`;
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
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
                "item": "https://pkodlari.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Artvin",
                "item": "https://pkodlari.com/artvin"
              }
            ]
          })
        }
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="cityTitleContainer">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeft), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ArrowLeft))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><h1>Artvin Posta Kodlar\u0131</h1><p>${ssrInterpolate(unref(districts).length)} \u0130L\xC7E</p></div></div><div class="districts"><a href="/artvin/ardanuc" class=""><div><h3>Ardanu\xE7</h3><p>200 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/arhavi" class=""><div><h3>Arhavi</h3><p>100 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/borcka" class=""><div><h3>Bor\xE7ka</h3><p>73 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/hopa" class=""><div><h3>Hopa</h3><p>30 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/kemalpasa" class=""><div><h3>Kemalpa\u015Fa</h3><p>16 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/merkez" class=""><div><h3>Merkez</h3><p>299 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/murgul" class=""><div><h3>Murgul</h3><p>21 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/savsat" class=""><div><h3>\u015Eav\u015Fat</h3><p>419 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/artvin/yusufeli" class=""><div><h3>Yusufeli</h3><p>674 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artvin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Db54vplR.mjs.map
