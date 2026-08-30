import { _ as __nuxt_component_0 } from './nuxt-link-C5pz7yFL.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { ChevronRight, Check, Copy, Share2, MapPin } from 'lucide-vue-next';
import { u as useAsyncData, s as slugify, t as titleCase } from './asyncData-gHCZgazS.mjs';
import { u as useRoute } from './server.mjs';
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
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[neighborhood]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const copied = ref(false);
    const { data: erzurumData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "erzurum-data",
      () => $fetch("https://pkodlari.com/data/erzurum.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const neighData = computed(() => {
      if (!erzurumData.value) return null;
      return erzurumData.value.find(
        (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value && slugify(item.mahalle) === neighborhoodSlug.value
      );
    });
    const isValid = computed(() => !!neighData.value);
    const pageTitle = computed(() => neighData.value ? `${titleCase(neighData.value.mahalle)} Posta Kodu (${titleCase(neighData.value.ilce)}/Erzurum)` : "Posta Kodu Bulunamad\u0131");
    const pageDesc = computed(() => neighData.value ? `Erzurum ilinin ${titleCase(neighData.value.ilce)} il\xE7esine ba\u011Fl\u0131 ${titleCase(neighData.value.mahalle)}'nin posta kodunu \xF6\u011Frenmek i\xE7in t\u0131klay\u0131n!` : "Posta Kodu Rehberi");
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
                { "@type": "ListItem", "position": 1, "name": "Anasayfa", "item": "https://pkodlari.com/" },
                { "@type": "ListItem", "position": 2, "name": "Erzurum", "item": "https://pkodlari.com/erzurum" },
                { "@type": "ListItem", "position": 3, "name": titleCase(neighData.value.ilce), "item": `https://pkodlari.com/erzurum/${districtSlug.value}` },
                { "@type": "ListItem", "position": 4, "name": titleCase(neighData.value.mahalle), "item": `https://pkodlari.com/erzurum/${districtSlug.value}/${neighborhoodSlug.value}` }
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
                  "text": `${neighData.value.postaKodu} posta kodu Erzurum ${titleCase(neighData.value.ilce)} ${titleCase(neighData.value.mahalle)}'ne aittir.`
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-content-neighborhood animate-in fade-in" }, _attrs))}><nav class="breadcrumb">`);
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
          to: "/erzurum",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ERZURUM`);
            } else {
              return [
                createTextVNode("ERZURUM")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/erzurum/${districtSlug.value}`,
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
        _push(`</nav><div class="main-info-container"><div class="main-info-title-container"><div class="main-info-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><h1>${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}</h1><p class="main-info-subtitle">${ssrInterpolate(unref(titleCase)(neighData.value.ilce))}, Erzurum</p></div><div class="post-code-view-container"><div class="sub-post-code-view-container"><p>POSTA KODU</p><div class="postCode">${ssrInterpolate(neighData.value.postaKodu)}</div><button class="${ssrRenderClass([copied.value ? "green-btn" : "black-btn", "copy-btn active:scale-95"])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), null, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), null, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="btn-bg">${ssrInterpolate(String(neighData.value.postaKodu).substring(0, 2))}</div></div></div><div class="share-btn"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` PAYLA\u015E </button></div>`);
        if (neighData.value.map) {
          _push(`<div class="map-container"><div class="map-title">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3>Konum</h3></div>`);
          if (neighData.value.map.trim().startsWith("<")) {
            _push(`<div class="map">${(_a = neighData.value.map) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", neighData.value.map)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="page-text"><h2>${ssrInterpolate(neighData.value.postaKodu)} nerenin posta kodu?</h2><p>${ssrInterpolate(neighData.value.postaKodu)} posta kodu Erzurum ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}&#39;ne aittir.</p></div><div class="page-text"><h2>${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} Posta Kodu Rehberi</h2><p>Erzurum ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}&#39;ne ait g\xFCncel posta kodu bilgileri a\u015Fa\u011F\u0131da yer almaktad\u0131r. Adres formlar\u0131nda, kargo g\xF6nderilerinde ve resmi i\u015Flemlerde kullanabilirsiniz.</p><br><p><strong>${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} Posta Kodu: ${ssrInterpolate(neighData.value.postaKodu)}</strong></p></div><div class="page-text"><h2>Adres Yaz\u0131m\u0131nda Posta Kodunun \xD6nemi</h2><p>Posta kodu, bir adresin en spesifik bile\u015Fenidir. ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} i\xE7in tan\u0131mlanan ${ssrInterpolate(neighData.value.postaKodu)} numaras\u0131n\u0131 kullanmak \u015Fu avantajlar\u0131 sa\u011Flar:</p><ul><li><b>S\u0131ralama H\u0131z\u0131:</b> PTT ve \xF6zel kargo \u015Firketlerinin otomatik ayr\u0131\u015Ft\u0131rma makineleri g\xF6nderinizi posta koduna g\xF6re s\u0131n\u0131fland\u0131r\u0131r.</li><li><b>Yanl\u0131\u015F Teslimat \xD6nleme:</b> Do\u011Fru kod, g\xF6nderinizin ba\u015Fka bir \u015Fehirdeki ada\u015F mahalleye gitmesini engeller.</li><li><b>Dijital Do\u011Fruluk:</b> Bankac\u0131l\u0131k ve e-devlet sistemlerinde adres teyidinde kullan\u0131l\u0131r.</li></ul></div><div class="page-text"><h2>Konum Ve B\xF6lge Bilgileri</h2><p>${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}, Erzurum ilinin ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} il\xE7esine ba\u011Fl\u0131d\u0131r. Posta kodunun ilk 2 hanesi il plaka kodunu, son 3 hanesi ise il\xE7e ve mahalle da\u011F\u0131t\u0131m b\xF6lgesini temsil eder.</p></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">Veri Bulunamad\u0131!</h2><p class="text-sm mb-4">Arad\u0131\u011F\u0131n\u0131z mahalle bilgisine ula\u015F\u0131lamad\u0131. L\xFCtfen adresi kontrol edin.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/erzurum",
          class: "mt-6 inline-block text-red-700 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Erzurum Sayfas\u0131na D\xF6n`);
            } else {
              return [
                createTextVNode("Erzurum Sayfas\u0131na D\xF6n")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/erzurum/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_-DEiaiNiX.mjs.map
