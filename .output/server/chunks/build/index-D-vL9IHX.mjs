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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Adana Posta Kodlar\u0131",
      meta: [
        {
          name: "description",
          content: "Adana iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!"
        }
      ],
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
                name: "Adana",
                item: "https://pkodlari.com/adana"
              }
            ]
          })
        }
      ]
    });
    usePageSeo({
      title: "Adana Posta Kodlar\u0131",
      description: "Adana iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex items-center gap-4"><a href="/" class="text-slate-400 hover:text-slate-900 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon w-5 h-5"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a><div><h1 class="text-3xl font-bold text-slate-900 tracking-tight"> Adana Posta Kodlar\u0131 </h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">15 \u0130L\xC7E</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><a href="/adana/aladag" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Alada\u011F</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 31 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/ceyhan" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ceyhan</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 154 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/cukurova" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">\xC7ukurova</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 27 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/feke" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Feke</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 48 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/imamoglu" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">\u0130mamo\u011Flu</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 27 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/karaisali" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Karaisal\u0131</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 57 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/karatas" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Karata\u015F</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 43 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/kozan" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kozan</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 103 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/pozanti" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Pozant\u0131</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 21 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/saimbeyli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Saimbeyli</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 28 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/saricam" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Sar\u0131\xE7am</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 69 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/seyhan" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Seyhan</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 96 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/tufanbeyli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Tufanbeyli</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 33 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/yumurtalik" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Yumurtal\u0131k</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 24 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/adana/yuregir" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Y\xFCre\u011Fir</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 107 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>`);
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
//# sourceMappingURL=index-D-vL9IHX.mjs.map
