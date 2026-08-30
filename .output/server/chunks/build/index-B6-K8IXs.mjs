import { _ as __nuxt_component_0 } from './nuxt-link-C5pz7yFL.mjs';
import { t as titleCase } from './asyncData-gHCZgazS.mjs';
import { defineComponent, mergeProps, unref, ref, computed, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Map, Building2, MapPin } from 'lucide-vue-next';
import { u as useFetch, t as transformPostalData } from './fetch-DwpLd3Ta.mjs';
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
import '@vue/shared';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  __ssrInlineRender: true,
  props: {
    data: {},
    loading: { type: Boolean }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-search-bar-container" }, _attrs))}><div class="${ssrRenderClass([isFocused.value ? "ring-2 ring-slate-900/5 border-slate-400" : "border-slate-200", "first-search-div"])}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><input type="text" placeholder="\u0130l, il\xE7e veya mahalle ismi yaz\u0131n..."${ssrRenderAttr("value", query.value)}${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""}></div>`);
      if (isFocused.value && query.value.length >= 2) {
        _push(`<div class="search-detail-container">`);
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
                  _push2(`<div class="location-icon"${_scopeId}>`);
                  if (res.type === "city") {
                    _push2(ssrRenderComponent(unref(Map), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  } else if (res.type === "district") {
                    _push2(ssrRenderComponent(unref(Building2), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  }
                  _push2(`</div><div class="location-info"${_scopeId}><div${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.neighborhood || res.district || res.city))}</div><div${_scopeId}>${ssrInterpolate([("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.city), ("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.district)].filter(Boolean).join(" / "))}</div></div>`);
                  if (res.zipCode) {
                    _push2(`<div class="search-zip-code"${_scopeId}>${ssrInterpolate(res.zipCode)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "location-icon" }, [
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
                    createVNode("div", { class: "location-info" }, [
                      createVNode("div", null, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.neighborhood || res.district || res.city)), 1),
                      createVNode("div", null, toDisplayString([("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.city), ("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.district)].filter(Boolean).join(" / ")), 1)
                    ]),
                    res.zipCode ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "search-zip-code"
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
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    useHead({
      title: `T\xFCrkiye Posta Kodlar\u0131 ${currentYear}`,
      meta: [{ name: "description", content: "T\xFCrkiye posta kodlar\u0131 rehberi. \u0130l, il\xE7e ve mahalle posta kodlar\u0131n\u0131 h\u0131zl\u0131ca sorgulay\u0131n." }]
    });
    usePageSeo({ title: "T\xFCrkiye Posta Kodlar\u0131", description: "T\xFCrkiye posta kodlar\u0131 rehberi. \u0130l, il\xE7e ve mahalle posta kodlar\u0131n\u0131 h\u0131zl\u0131ca sorgulay\u0131n." });
    const { data: searchData, pending: searchLoading } = useFetch(
      "/api/postal-data",
      {
        key: "search-postal-data",
        server: false,
        transform: transformPostalData
      },
      "$vqq05-mA6x"
      /* nuxt-injected */
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchBar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500" }, _attrs))}><div class="home-h1-container"><h1>T\xFCrkiye Posta Kodlar\u0131</h1><p>H\u0131zl\u0131ca il\xE7e ve mahalle posta kodlar\u0131n\u0131 sorgulay\u0131n.</p>`);
      _push(ssrRenderComponent(_component_SearchBar, {
        data: unref(searchData),
        loading: unref(searchLoading)
      }, null, _parent));
      _push(`</div><div class="home-cities"><a href="/adana"><div>Adana</div><div>15 \u0130L\xC7E </div></a><a href="/adiyaman"><div>Ad\u0131yaman</div><div>9 \u0130L\xC7E </div></a><a href="/afyonkarahisar"><div>Afyonkarahisar</div><div>18 \u0130L\xC7E </div></a><a href="/agri"><div>A\u011Fr\u0131</div><div>8 \u0130L\xC7E </div></a><a href="/amasya"><div>Amasya</div><div>7 \u0130L\xC7E </div></a><a href="/ankara"><div>Ankara</div><div>25 \u0130L\xC7E </div></a><a href="/antalya"><div>Antalya</div><div>19 \u0130L\xC7E </div></a><a href="/artvin"><div>Artvin</div><div>9 \u0130L\xC7E </div></a><a href="/aydin"><div>Ayd\u0131n</div><div>17 \u0130L\xC7E </div></a><a href="/balikesir"><div>Bal\u0131kesir</div><div>20 \u0130L\xC7E </div></a><a href="/bilecik"><div>Bilecik</div><div>8 \u0130L\xC7E </div></a><a href="/bingol"><div>Bing\xF6l</div><div>8 \u0130L\xC7E </div></a><a href="/bitlis"><div>Bitlis</div><div>7 \u0130L\xC7E </div></a><a href="/bolu"><div>Bolu</div><div>9 \u0130L\xC7E </div></a><a href="/burdur"><div>Burdur</div><div>11 \u0130L\xC7E </div></a><a href="/bursa"><div>Bursa</div><div>10 \u0130L\xC7E </div></a><a href="/canakkale"><div>\xC7anakkale</div><div>12 \u0130L\xC7E </div></a><a href="/cankiri"><div>\xC7ank\u0131r\u0131</div><div>12 \u0130L\xC7E </div></a><a href="/corum"><div>\xC7orum</div><div>14 \u0130L\xC7E </div></a><a href="/denizli"><div>Denizli</div><div>19 \u0130L\xC7E </div></a><a href="/diyarbakir"><div>Diyarbak\u0131r</div><div>17 \u0130L\xC7E </div></a><a href="/edirne"><div>Edirne</div><div>9 \u0130L\xC7E </div></a><a href="/elazig"><div>Elaz\u0131\u011F</div><div>11 \u0130L\xC7E </div></a><a href="/erzincan"><div>Erzincan</div><div>9 \u0130L\xC7E </div></a><a href="/erzurum"><div>Erzurum</div><div>20 \u0130L\xC7E </div></a><a href="/eskisehir"><div>Eski\u015Fehir</div><div>14 \u0130L\xC7E </div></a><a href="/gaziantep"><div>Gaziantep</div><div>9 \u0130L\xC7E </div></a><a href="/giresun"><div>Giresun</div><div>16 \u0130L\xC7E </div></a><a href="/gumushane"><div>G\xFCm\xFC\u015Fhane</div><div>5 \u0130L\xC7E </div></a><a href="/hakkari"><div>Hakkari</div><div>5 \u0130L\xC7E </div></a><a href="/hatay"><div>Hatay</div><div>1 \u0130L\xC7E </div></a><a href="/isparta"><div>Isparta</div><div>13 \u0130L\xC7E </div></a><a href="/mersin"><div>Mersin</div><div>13 \u0130L\xC7E </div></a><a href="/istanbul"><div>\u0130stanbul</div><div>39 \u0130L\xC7E </div></a><a href="/izmir"><div>\u0130zmir</div><div>30 \u0130L\xC7E </div></a><a href="/kars"><div>Kars</div><div>8 \u0130L\xC7E </div></a><a href="/kastamonu"><div>Kastamonu</div><div>20 \u0130L\xC7E </div></a><a href="/kayseri"><div>Kayseri</div><div>16 \u0130L\xC7E </div></a><a href="/kirklareli"><div>K\u0131rklareli</div><div>8 \u0130L\xC7E </div></a><a href="/kirsehir"><div>K\u0131r\u015Fehir</div><div>7 \u0130L\xC7E </div></a><a href="/kocaeli"><div>Kocaeli</div><div>12 \u0130L\xC7E </div></a><a href="/konya"><div>Konya</div><div>20 \u0130L\xC7E </div></a><a href="/kutahya"><div>K\xFCtahya</div><div>13 \u0130L\xC7E </div></a><a href="/malatya"><div>Malatya</div><div>13 \u0130L\xC7E </div></a><a href="/manisa"><div>Manisa</div><div>17 \u0130L\xC7E </div></a><a href="/kahramanmaras"><div>Kahramanmara\u015F</div><div>1 \u0130L\xC7E </div></a><a href="/mardin"><div>Mardin</div><div>10 \u0130L\xC7E </div></a><a href="/mugla"><div>Mu\u011Fla</div><div>13 \u0130L\xC7E </div></a><a href="/mus"><div>Mu\u015F</div><div>6 \u0130L\xC7E </div></a><a href="/nevsehir"><div>Nev\u015Fehir</div><div>8 \u0130L\xC7E </div></a><a href="/nigde"><div>Ni\u011Fde</div><div>6 \u0130L\xC7E </div></a><a href="/ordu"><div>Ordu</div><div>19 \u0130L\xC7E </div></a><a href="/rize"><div>Rize</div><div>12 \u0130L\xC7E </div></a><a href="/sakarya"><div>Sakarya</div><div>16 \u0130L\xC7E </div></a><a href="/samsun"><div>Samsun</div><div>17 \u0130L\xC7E </div></a><a href="/siirt"><div>Siirt</div><div>7 \u0130L\xC7E </div></a><a href="/sivas"><div>Sivas</div><div>17 \u0130L\xC7E </div></a><a href="/tekirdag"><div>Tekirda\u011F</div><div>11 \u0130L\xC7E </div></a><a href="/tokat"><div>Tokat</div><div>7 \u0130L\xC7E </div></a><a href="/trabzon"><div>Trabzon</div><div>18 \u0130L\xC7E </div></a><a href="/usak"><div>U\u015Fak</div><div>6 \u0130L\xC7E </div></a><a href="/van"><div>Van</div><div>13 \u0130L\xC7E </div></a><a href="/yozgat"><div>Yozgat</div><div>14 \u0130L\xC7E </div></a><a href="/zonguldak"><div>Zonguldak</div><div>8 \u0130L\xC7E </div></a><a href="/aksaray"><div>Aksaray</div><div>8 \u0130L\xC7E </div></a><a href="/bayburt"><div>Bayburt</div><div>3 \u0130L\xC7E </div></a><a href="/karaman"><div>Karaman</div><div>6 \u0130L\xC7E </div></a><a href="/kirikkale"><div>K\u0131r\u0131kkale</div><div>9 \u0130L\xC7E </div></a><a href="/batman"><div>Batman</div><div>6 \u0130L\xC7E </div></a><a href="/sirnak"><div>\u015E\u0131rnak</div><div>7 \u0130L\xC7E </div></a><a href="/bartin"><div>Bart\u0131n</div><div>4 \u0130L\xC7E </div></a><a href="/ardahan"><div>Ardahan</div><div>6 \u0130L\xC7E </div></a><a href="/igdir"><div>I\u011Fd\u0131r</div><div>4 \u0130L\xC7E </div></a><a href="/yalova"><div>Yalova</div><div>6 \u0130L\xC7E </div></a><a href="/karabuk"><div>Karab\xFCk</div><div>6 \u0130L\xC7E </div></a><a href="/kilis"><div>Kilis</div><div>4 \u0130L\xC7E </div></a><a href="/osmaniye"><div>Osmaniye</div><div>7 \u0130L\xC7E </div></a><a href="/duzce"><div>D\xFCzce</div><div>8 \u0130L\xC7E </div></a></div><div class="home-content-container"><div class="h-c-first-div"><h2>Posta Kodu Nedir ve Neden \xD6nemlidir?</h2><div class="h-c-second-div"><p> Posta kodu, mektup, kargo ve di\u011Fer g\xF6nderilerin adrese daha h\u0131zl\u0131 ve hatas\u0131z bir \u015Fekilde ula\u015Ft\u0131r\u0131lmas\u0131n\u0131 sa\u011Flamak amac\u0131yla kullan\u0131lan, rakam veya harflerden olu\u015Fan bir kodlama sistemidir. T\xFCrkiye&#39;de posta kodlar\u0131 5 basamakl\u0131 say\u0131sal de\u011Ferlerden olu\u015Fur. Bu sistemde ilk iki rakam ilin plaka kodunu temsil ederken, di\u011Fer \xFC\xE7 rakam ise da\u011F\u0131t\u0131m b\xF6lgesini, yani il\xE7e ve mahalle detaylar\u0131n\u0131 belirtir. </p><div><h3 class="text-lg font-semibold text-slate-800 mb-3">Posta Kodu Kullan\u0131m\u0131n\u0131n Avantajlar\u0131</h3><ul class="space-y-2"><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">H\u0131zl\u0131 ve Do\u011Fru Teslimat:</strong> G\xF6nderilerin ayr\u0131\u015Ft\u0131rma merkezlerinde otomatik sistemlerle i\u015Flenmesini sa\u011Flar, b\xF6ylece insan hatas\u0131 en aza iner ve teslimat s\xFCresi k\u0131sal\u0131r.</span></li><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Adres Kar\u0131\u015F\u0131kl\u0131\u011F\u0131n\u0131 \xD6nleme:</strong> T\xFCrkiye genelinde ayn\u0131 isme sahip bir\xE7ok mahalle ve sokak bulunmaktad\u0131r. Posta kodu, bu benzerliklerden kaynaklanabilecek yanl\u0131\u015F teslimatlar\u0131n \xF6n\xFCne ge\xE7er.</span></li><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Verimlilik:</strong> Lojistik ve kargo firmalar\u0131n\u0131n operasyonel s\xFCre\xE7lerini optimize etmesine yard\u0131mc\u0131 olur, bu da genel hizmet kalitesini art\u0131r\u0131r.</span></li></ul></div><p> Sitemiz arac\u0131l\u0131\u011F\u0131yla T\xFCrkiye&#39;nin 81 iline, t\xFCm il\xE7elerine ve mahallelerine ait g\xFCncel posta kodu bilgilerine \xFCcretsiz ve h\u0131zl\u0131 bir \u015Fekilde ula\u015Fabilirsiniz. Arad\u0131\u011F\u0131n\u0131z konumu bulmak i\xE7in il listesini kullanabilir veya ana sayfadaki arama kutusundan do\u011Frudan sorgulama yapabilirsiniz. </p><p>Posta kodlar\u0131n\u0131 <a href="https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama" rel="nofollow" target="_blank">https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama</a> \xFCzerinden teyit edebilirsiniz.</p></div></div></div></div>`);
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
//# sourceMappingURL=index-B6-K8IXs.mjs.map
