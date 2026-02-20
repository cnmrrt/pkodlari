import { _ as __nuxt_component_0, t as titleCase } from './server.mjs';
import { defineComponent, inject, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, ref, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { Loader2, Search, Map, Building2, MapPin } from 'lucide-vue-next';
import { u as useHead } from './v3-nkHqSgkI.mjs';
import { u as usePageSeo } from './usePageSeo-BtDKcfYX.mjs';
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
              to: res.type === "city" ? `/${res.citySlug}` : res.type === "district" ? `/${res.citySlug}/${res.districtSlug}` : `/${res.citySlug}/${res.districtSlug}/${res.neighborhoodSlug}`,
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
                  _push2(`</div><div class="flex-1"${_scopeId}><div class="font-semibold text-sm text-slate-900"${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.neighborhood || res.district || res.city))}</div><div class="text-[10px] text-slate-400 uppercase font-medium"${_scopeId}>${ssrInterpolate([("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.city), ("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.district)].filter(Boolean).join(" / "))}</div></div>`);
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
                      createVNode("div", { class: "font-semibold text-sm text-slate-900" }, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.neighborhood || res.district || res.city)), 1),
                      createVNode("div", { class: "text-[10px] text-slate-400 uppercase font-medium" }, toDisplayString([("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.city), ("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.district)].filter(Boolean).join(" / ")), 1)
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
      title: "T\xFCrkiye Posta Kodlar\u0131",
      meta: [{ name: "description", content: "T\xFCrkiye posta kodlar\u0131 rehberi. \u0130l, il\xE7e ve mahalle posta kodlar\u0131n\u0131 h\u0131zl\u0131ca sorgulay\u0131n." }]
    });
    usePageSeo({ title: "T\xFCrkiye Posta Kodlar\u0131", description: "T\xFCrkiye posta kodlar\u0131 rehberi. \u0130l, il\xE7e ve mahalle posta kodlar\u0131n\u0131 h\u0131zl\u0131ca sorgulay\u0131n." });
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500" }, _attrs))}><div class="text-center mb-12 py-9"><h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">T\xFCrkiye Posta Kodlar\u0131</h1><p class="text-slate-500 mb-10">H\u0131zl\u0131ca il\xE7e ve mahalle posta kodlar\u0131n\u0131 sorgulay\u0131n.</p>`);
        _push(ssrRenderComponent(_component_SearchBar, { data: unref(postalData) }, null, _parent));
        _push(`</div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
        ssrRenderList(unref(postalData), (cityItem, slug) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: slug,
            to: `/${slug}`,
            class: "soft-card p-4 rounded-xl text-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="font-semibold text-slate-900 text-sm truncate"${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(cityItem.name))}</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider"${_scopeId}>${ssrInterpolate(Object.keys(cityItem.districts || {}).length)} \u0130L\xC7E </div>`);
              } else {
                return [
                  createVNode("div", { class: "font-semibold text-slate-900 text-sm truncate" }, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(cityItem.name)), 1),
                  createVNode("div", { class: "text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider" }, toDisplayString(Object.keys(cityItem.districts || {}).length) + " \u0130L\xC7E ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="mt-16 max-w-4xl mx-auto px-4 mb-12"><div class="soft-card p-8 rounded-2xl"><h2 class="text-2xl font-bold text-slate-900 mb-6">Posta Kodu Nedir ve Neden \xD6nemlidir?</h2><div class="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base"><p> Posta kodu, mektup, kargo ve di\u011Fer g\xF6nderilerin adrese daha h\u0131zl\u0131 ve hatas\u0131z bir \u015Fekilde ula\u015Ft\u0131r\u0131lmas\u0131n\u0131 sa\u011Flamak amac\u0131yla kullan\u0131lan, rakam veya harflerden olu\u015Fan bir kodlama sistemidir. T\xFCrkiye&#39;de posta kodlar\u0131 5 basamakl\u0131 say\u0131sal de\u011Ferlerden olu\u015Fur. Bu sistemde ilk iki rakam ilin plaka kodunu temsil ederken, di\u011Fer \xFC\xE7 rakam ise da\u011F\u0131t\u0131m b\xF6lgesini, yani il\xE7e ve mahalle detaylar\u0131n\u0131 belirtir. </p><div><h3 class="text-lg font-semibold text-slate-800 mb-3">Posta Kodu Kullan\u0131m\u0131n\u0131n Avantajlar\u0131</h3><ul class="space-y-2"><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">H\u0131zl\u0131 ve Do\u011Fru Teslimat:</strong> G\xF6nderilerin ayr\u0131\u015Ft\u0131rma merkezlerinde otomatik sistemlerle i\u015Flenmesini sa\u011Flar, b\xF6ylece insan hatas\u0131 en aza iner ve teslimat s\xFCresi k\u0131sal\u0131r.</span></li><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Adres Kar\u0131\u015F\u0131kl\u0131\u011F\u0131n\u0131 \xD6nleme:</strong> T\xFCrkiye genelinde ayn\u0131 isme sahip bir\xE7ok mahalle ve sokak bulunmaktad\u0131r. Posta kodu, bu benzerliklerden kaynaklanabilecek yanl\u0131\u015F teslimatlar\u0131n \xF6n\xFCne ge\xE7er.</span></li><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Verimlilik:</strong> Lojistik ve kargo firmalar\u0131n\u0131n operasyonel s\xFCre\xE7lerini optimize etmesine yard\u0131mc\u0131 olur, bu da genel hizmet kalitesini art\u0131r\u0131r.</span></li></ul></div><p> Sitemiz arac\u0131l\u0131\u011F\u0131yla T\xFCrkiye&#39;nin 81 iline, t\xFCm il\xE7elerine ve mahallelerine ait g\xFCncel posta kodu bilgilerine \xFCcretsiz ve h\u0131zl\u0131 bir \u015Fekilde ula\u015Fabilirsiniz. Arad\u0131\u011F\u0131n\u0131z konumu bulmak i\xE7in il listesini kullanabilir veya ana sayfadaki arama kutusundan do\u011Frudan sorgulama yapabilirsiniz. </p><p>Posta kodlar\u0131n\u0131 <a href="https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama" rel="nofollow" target="_blank">https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama</a> \xFCzerinden teyit edebilirsiniz.</p></div></div></div></div>`);
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
//# sourceMappingURL=index-BJJDSMby.mjs.map
