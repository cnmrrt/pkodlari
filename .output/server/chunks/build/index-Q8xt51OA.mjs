import { u as useRoute, a as useAsyncData, s as slugify, t as titleCase, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
import { u as useHead } from './composables-DS4h4PXI.mjs';
import { u as usePageSeo } from './usePageSeo-Dfhdqak8.mjs';
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
import 'vue-router';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const filter = ref("");
    const { data: istanbulData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "istanbul-data",
      () => $fetch("https://pkodlari.com/data/istanbul.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtSlug = computed(() => route.params.district);
    const districtData = computed(() => {
      if (!istanbulData.value) return null;
      const filtered = istanbulData.value.filter((item) => slugify(item.ilce || "MERKEZ") === districtSlug.value);
      if (filtered.length === 0) return null;
      return {
        name: filtered[0].ilce || "MERKEZ",
        neighborhoods: filtered.map((item) => ({
          name: item.mahalle,
          zipCode: item.postaKodu,
          slug: slugify(item.mahalle)
        })).sort((a, b) => a.name.localeCompare(b.name, "tr"))
      };
    });
    const isValid = computed(() => !!districtData.value);
    const neighs = computed(() => {
      if (!isValid.value) return [];
      return districtData.value.neighborhoods.filter(
        (n) => n.name.toLocaleLowerCase("tr").includes(filter.value.toLocaleLowerCase("tr"))
      );
    });
    const pageTitle = computed(() => districtData.value ? `İstanbul ${titleCase(districtData.value.name)} Posta Kodları` : "İlçe Bulunamadı");
    const pageDesc = computed(() => districtData.value ? `İstanbul ilinin ${titleCase(districtData.value.name)} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!` : "Posta Kodu Rehberi");
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        computed(() => {
          if (!districtData.value) return {};
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
                  "item": "https://pkodlari.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "İstanbul",
                  "item": "https://pkodlari.com/istanbul"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": titleCase(districtData.value.name),
                  "item": `https://pkodlari.com/istanbul/${districtSlug.value}`
                }
              ]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"><div class="flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/istanbul",
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
        _push(`<div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">${ssrInterpolate(unref(titleCase)(districtData.value.name))} Posta Kodları</h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">İstanbul</p></div></div><div class="relative w-full md:w-64">`);
        _push(ssrRenderComponent(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, null, _parent));
        _push(`<input type="text" placeholder="Mahallelerde ara..." class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"${ssrRenderAttr("value", filter.value)}></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(neighs.value, (nItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: nItem.slug,
            to: `/istanbul/${districtSlug.value}/${nItem.slug}`,
            class: "soft-card p-5 flex items-center justify-between group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="min-w-0 pr-4"${_scopeId}><h4 class="font-semibold text-slate-900 truncate text-base"${_scopeId}>${ssrInterpolate(unref(titleCase)(nItem.name))}</h4><p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"${_scopeId}>MAHALLE</p></div><div class="flex items-center gap-3"${_scopeId}><span class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"${_scopeId}>${ssrInterpolate(nItem.zipCode)}</span>`);
                _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "min-w-0 pr-4" }, [
                    createVNode("h4", { class: "font-semibold text-slate-900 truncate text-base" }, toDisplayString(unref(titleCase)(nItem.name)), 1),
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
          _push(`<div class="col-span-full p-12 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h2 class="text-2xl font-bold text-slate-900 tracking-tight mt-20 mb-5 ml-1">İstanbul İlçeleri</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><a href="/istanbul/adalar" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Adalar</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">5 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/arnavutkoy" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Arnavutköy</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">38 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/atasehir" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ataşehir</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">17 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/avcilar" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Avcılar</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">10 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/bagcilar" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bağcılar</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">22 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/bahcelievler" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bahçelievler</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">11 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/bakirkoy" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bakırköy</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">16 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/basaksehir" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Başakşehir</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">11 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/bayrampasa" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bayrampaşa</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">11 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/besiktas" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Beşiktaş</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">23 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/beykoz" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Beykoz</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">45 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/beylikduzu" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Beylikdüzü</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">11 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/beyoglu" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Beyoğlu</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">45 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/buyukcekmece" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Büyükçekmece</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">24 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/catalca" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Çatalca</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">40 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/cekmekoy" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Çekmeköy</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">21 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/esenler" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Esenler</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">17 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/esenyurt" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Esenyurt</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">43 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/eyup" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Eyüp</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">29 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/fatih" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Fatih</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">57 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/gaziosmanpasa" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Gaziosmanpaşa</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">16 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/gungoren" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Güngören</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">11 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/kadikoy" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kadıköy</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">21 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/kagithane" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kağıthane</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">19 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/kartal" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kartal</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">20 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/kucukcekmece" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Küçükçekmece</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">22 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/maltepe" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Maltepe</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">18 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/pendik" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Pendik</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">37 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sancaktepe" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Sancaktepe</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">19 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Sarıyer</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">37 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/silivri" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Silivri</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">35 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sultanbeyli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Sultanbeyli</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">15 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sultangazi" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Sultangazi</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">15 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sile" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Şile</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">76 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sisli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Şişli</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">25 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/tuzla" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Tuzla</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">23 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/umraniye" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ümraniye</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">38 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/uskudar" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Üsküdar</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">33 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/zeytinburnu" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Zeytinburnu</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">13 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 text-center text-slate-400" }, _attrs))}><p>İlçe bulunamadı.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/istanbul",
          class: "text-slate-900 underline mt-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`İstanbul sayfasına dön`);
            } else {
              return [
                createTextVNode("İstanbul sayfasına dön")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/istanbul/[district]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Q8xt51OA.mjs.map
