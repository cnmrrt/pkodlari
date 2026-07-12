import { a as useRoute, u as useAsyncData, s as slugify, t as titleCase, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'file:///Users/mac/Desktop/pkodlari/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file:///Users/mac/Desktop/pkodlari/node_modules/vue/server-renderer/index.mjs';
import { ChevronRight, MapPin, Check, Copy, Share2 } from 'file:///Users/mac/Desktop/pkodlari/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead } from './v3-nkHqSgkI.mjs';
import { u as usePageSeo } from './usePageSeo-Ctnkx_bk.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/devalue/index.js';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/mac/Desktop/pkodlari/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[neighborhood]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const copied = ref(false);
    const { data: sirnakData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "sirnak-data",
      () => $fetch("https://pkodlari.com/data/sirnak.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const neighData = computed(() => {
      if (!sirnakData.value) return null;
      return sirnakData.value.find(
        (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value && slugify(item.mahalle) === neighborhoodSlug.value
      );
    });
    const isValid = computed(() => !!neighData.value);
    const pageTitle = computed(() => neighData.value ? `${titleCase(neighData.value.mahalle)} Posta Kodu (${titleCase(neighData.value.ilce)}/\u015E\u0131rnak)` : "Posta Kodu Bulunamad\u0131");
    const pageDesc = computed(() => neighData.value ? `\u015E\u0131rnak ilinin ${titleCase(neighData.value.ilce)} il\xE7esine ba\u011Fl\u0131 ${titleCase(neighData.value.mahalle)}'nin posta kodunu g\xF6rmek i\xE7in t\u0131klay\u0131n!` : "Posta Kodu Rehberi");
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        computed(() => {
          if (!neighData.value) return {};
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
                  "name": "\u015E\u0131rnak",
                  "item": "https://pkodlari.com/sirnak"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": titleCase(neighData.value.ilce),
                  "item": `https://pkodlari.com/sirnak/${districtSlug.value}`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": titleCase(neighData.value.mahalle),
                  "item": `https://pkodlari.com/sirnak/${districtSlug.value}/${neighborhoodSlug.value}`
                }
              ]
            })
          };
        }),
        computed(() => {
          if (!neighData.value) return {};
          return {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": `${neighData.value.postaKodu} nerenin posta kodu?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${neighData.value.postaKodu} posta kodu \u015E\u0131rnak ${titleCase(neighData.value.ilce)} ${titleCase(neighData.value.mahalle)}'ne aittir.`
                }
              }]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
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
          to: "/sirnak",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u015EIRNAK`);
            } else {
              return [
                createTextVNode("\u015EIRNAK")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/sirnak/${districtSlug.value}`,
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(titleCase)(neighData.value.ilce))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(titleCase)(neighData.value.ilce)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav><div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm"><div class="text-center mb-10"><div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-6 h-6 text-slate-900" }, null, _parent));
        _push(`</div><h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}</h1><p class="text-slate-500 font-medium uppercase tracking-widest text-sm">${ssrInterpolate(unref(titleCase)(neighData.value.ilce))}, \u015E\u0131rnak</p></div><div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden"><div class="relative z-10"><p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p><div class="mono text-7xl font-bold text-slate-900 mb-8">${ssrInterpolate(neighData.value.postaKodu)}</div><button class="${ssrRenderClass([copied.value ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800", "flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">${ssrInterpolate(neighData.value.postaKodu.substring(0, 2))}</div></div></div><div class="mt-8 flex justify-center"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` PAYLA\u015E </button></div>`);
        if (neighData.value.map) {
          _push(`<div class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"><div class="mb-4 flex items-center gap-2 px-2">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3></div>`);
          if (neighData.value.map.trim().startsWith("<")) {
            _push(`<div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full">${(_a = neighData.value.map) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", neighData.value.map)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">${ssrInterpolate(neighData.value.postaKodu)} nerenin posta kodu?</h2><p class="text-slate-600">${ssrInterpolate(neighData.value.postaKodu)} posta kodu \u015E\u0131rnak ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}&#39;ne aittir.</p></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} Posta Kodu Rehberi</h2><p class="text-slate-600">\u015E\u0131rnak ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}&#39;ne ait g\xFCncel posta kodu bilgileri a\u015Fa\u011F\u0131da yer almaktad\u0131r. Adres formlar\u0131nda, kargo g\xF6nderilerinde ve resmi i\u015Flemlerde hata pay\u0131n\u0131 s\u0131f\u0131ra indirmek i\xE7in bu kodu kullanabilirsiniz.</p><br><p><strong>${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} Posta Kodu: ${ssrInterpolate(neighData.value.postaKodu)}</strong></p></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">Adres Yaz\u0131m\u0131nda Posta Kodunun \xD6nemi</h2><p class="text-slate-600">Posta kodu, bir adresin en spesifik bile\u015Fenidir. ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} i\xE7in tan\u0131mlanan ${ssrInterpolate(neighData.value.postaKodu)} numaras\u0131n\u0131 kullanmak \u015Fu avantajlar\u0131 sa\u011Flar:</p><ul class="text-left max-w-lg mx-auto space-y-2 text-slate-600"><li><b>S\u0131ralama H\u0131z\u0131:</b> PTT ve \xF6zel kargo \u015Firketlerinin otomatik ayr\u0131\u015Ft\u0131rma makineleri, g\xF6nderinizi adresten \xF6nce posta koduna g\xF6re s\u0131n\u0131fland\u0131r\u0131r.</li><li><b>Yanl\u0131\u015F Teslimat \xD6nleme:</b> T\xFCrkiye genelinde ayn\u0131 ismi ta\u015F\u0131yan y\xFCzlerce mahalle bulunmaktad\u0131r. Do\u011Fru kod, g\xF6nderinizin ba\u015Fka bir \u015Fehirdeki ada\u015F mahalleye gitmesini engeller.</li><li><b>Dijital Do\u011Fruluk:</b> Bankac\u0131l\u0131k ve e-devlet sistemlerinde adres teyidi yap\u0131l\u0131rken sistemler genellikle bu kodu baz al\u0131r.</li></ul></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">Konum Ve B\xF6lge Bilgileri</h2><p class="text-slate-600">${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}, \u015E\u0131rnak ilinin ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} il\xE7esine ba\u011Fl\u0131d\u0131r. Posta kodu yap\u0131s\u0131 incelendi\u011Finde ;</p><ol class="text-left max-w-lg mx-auto space-y-2 text-slate-600 list-decimal pl-5 mt-4"><li>\u0130lk 2 hane il plaka kodunu temsil eder.</li><li>Son 3 hane il\xE7e i\xE7erisindeki da\u011F\u0131t\u0131m b\xF6lgesini ve mahallesini kapsar.</li></ol></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">Veri Bulunamad\u0131!</h2><p class="text-sm mb-4">Arad\u0131\u011F\u0131n\u0131z mahalle bilgisine ula\u015F\u0131lamad\u0131. L\xFCtfen adresi kontrol edin.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/sirnak",
          class: "mt-6 inline-block text-red-700 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u015E\u0131rnak Sayfas\u0131na D\xF6n`);
            } else {
              return [
                createTextVNode("\u015E\u0131rnak Sayfas\u0131na D\xF6n")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sirnak/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_-DlQPcLRG.mjs.map
