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

const pageTitle = "Erzurum Posta Kodlar\u0131";
const pageDesc = "Erzurum iline ba\u011Fl\u0131 il\xE7e ve mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!";
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
                name: "Erzurum",
                item: "https://pkodlari.com/erzurum"
              }
            ]
          })
        }
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex items-center gap-4"><a href="/" class="text-slate-400 hover:text-slate-900 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon w-5 h-5"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a><div><h1 class="text-3xl font-bold text-slate-900 tracking-tight"> Erzurum Posta Kodlar\u0131 </h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">20 \u0130L\xC7E</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><a href="/erzurum/askale" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">A\u015Fkale</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 76 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/aziziye" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Aziziye</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 73 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/cat" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">\xC7at</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 45 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/hinis" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">H\u0131n\u0131s</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 98 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/horasan" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Horasan</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 87 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/ispir" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">\u0130spir</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 101 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/karacoban" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kara\xE7oban</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 27 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/karayazi" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Karayaz\u0131</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 75 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/koprukoy" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">K\xF6pr\xFCk\xF6y</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 42 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/narman" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Narman</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 46 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/oltu" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Oltu</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 72 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/olur" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Olur</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 43 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/palandoken" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Paland\xF6ken</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 26 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/pasinler" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Pasinler</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 72 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/pazaryolu" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Pazaryolu</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 44 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/senkaya" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">\u015Eenkaya</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 71 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/tekman" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Tekman</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 71 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/tortum" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Tortum</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 58 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/uzundere" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Uzundere</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 18 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/erzurum/yakutiye" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Yakutiye</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider"> 44 mahalle </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/erzurum/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C2Vc08aV.mjs.map
