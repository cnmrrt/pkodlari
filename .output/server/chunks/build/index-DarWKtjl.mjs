import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './v3-nkHqSgkI.mjs';
import { u as usePageSeo } from './usePageSeo-DXv1_ikA.mjs';
import './server.mjs';
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
import 'lucide-vue-next';
import 'perfect-debounce';

const pageTitle = "Bal\u0131kesir Posta Kodlar\u0131";
const pageDesc = "Bal\u0131kesir iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Anasayfa",
                item: "https://pkodlari.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Bal\u0131kesir",
                item: "https://pkodlari.com/balikesir"
              }
            ]
          })
        }
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex items-center gap-4"><a href="/" class="text-slate-400 hover:text-slate-900 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon w-5 h-5"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a><div><h1 class="text-3xl font-bold text-slate-900 tracking-tight"> Bal\u0131kesir Posta Kodlar\u0131 </h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">20 \u0130L\xC7E</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><a href="/balikesir/altieylul" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Alt\u0131eyl\xFCl</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 95 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/ayvalik" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ayval\u0131k</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 34 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/balya" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Balya</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 46 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/bandirma" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Band\u0131rma</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 55 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/bigadic" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bigadi\xE7</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 80 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/burhaniye" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Burhaniye</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 40 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/dursunbey" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Dursunbey</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 110 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/edremit" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Edremit</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 47 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/erdek" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Erdek</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 28 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/gomec" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">G\xF6me\xE7</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 13 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/gonen" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">G\xF6nen</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 101 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/havran" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Havran</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 34 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/ivrindi" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">\u0130vrindi</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 70 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/karesi" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Karesi</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 70 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/kepsut" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kepsut</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 69 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/manyas" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Manyas</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 50 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/marmara" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Marmara</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 14 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/savastepe" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Sava\u015Ftepe</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 50 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/sindirgi" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">S\u0131nd\u0131rg\u0131</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 75 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/balikesir/susurluk" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Susurluk</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 54 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/balikesir/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DarWKtjl.mjs.map
