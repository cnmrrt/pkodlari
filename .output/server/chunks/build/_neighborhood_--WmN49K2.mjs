import { a as useRoute, u as useAsyncData, t as titleCase, s as slugify, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ChevronRight, MapPin, Check, Copy, Share2 } from 'lucide-vue-next';
import { u as useHead } from './v3-nkHqSgkI.mjs';
import { u as usePageSeo } from './usePageSeo-DXv1_ikA.mjs';
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
  __name: "[neighborhood]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const copied = ref(false);
    const citySlug = computed(() => route.params.city);
    const districtSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const { data: cityData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `city-data-${citySlug.value}`,
      async () => {
        try {
          return await $fetch(`https://pkodlari.com/data/${citySlug.value}.json`);
        } catch {
          return [];
        }
      },
      "$sp7RwPPkHu"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const cityName = computed(() => {
      var _a;
      const first = (_a = cityData.value) == null ? void 0 : _a[0];
      return (first == null ? void 0 : first.il) ? titleCase(first.il) : titleCase(citySlug.value);
    });
    const districtItem = computed(() => {
      var _a;
      if (!((_a = cityData.value) == null ? void 0 : _a.length)) return null;
      const filtered = cityData.value.filter(
        (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value
      );
      if (!filtered.length) return null;
      return {
        name: filtered[0].ilce || "MERKEZ",
        neighborhoods: filtered.map((item) => ({
          name: item.mahalle,
          zipCode: item.postaKodu,
          mapCode: item.mapCode,
          slug: slugify(item.mahalle)
        })).sort((a, b) => a.name.localeCompare(b.name, "tr"))
      };
    });
    const neighItem = computed(() => {
      var _a;
      if (!districtItem.value) return null;
      return (_a = districtItem.value.neighborhoods.find(
        (neigh) => neigh.slug === neighborhoodSlug.value
      )) != null ? _a : null;
    });
    const pageTitle = computed(
      () => {
        var _a, _b;
        return neighItem.value ? `${titleCase(neighItem.value.name)} Posta Kodu (${titleCase(
          (_b = (_a = districtItem.value) == null ? void 0 : _a.name) != null ? _b : ""
        )}/${cityName.value})` : "Posta Kodu Bulunamad\u0131";
      }
    );
    const pageDesc = computed(() => {
      if (!districtItem.value || !neighItem.value) return "Posta Kodu Rehberi";
      return `${cityName.value} ilinin ${titleCase(
        districtItem.value.name
      )} il\xE7esine ba\u011Fl\u0131 ${titleCase(
        neighItem.value.name
      )}'nin posta kodunu g\xF6rmek i\xE7in t\u0131klay\u0131n!`;
    });
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        computed(() => {
          if (!districtItem.value || !neighItem.value) return {};
          return {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Anasayfa",
                  item: `https://pkodlari.com/`
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: cityName.value,
                  item: `https://pkodlari.com/${citySlug.value}`
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: titleCase(districtItem.value.name),
                  item: `https://pkodlari.com/${citySlug.value}/${districtSlug.value}`
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: titleCase(neighItem.value.name),
                  item: `https://pkodlari.com/${citySlug.value}/${districtSlug.value}/${neighborhoodSlug.value}`
                }
              ]
            })
          };
        }),
        computed(() => {
          if (!districtItem.value || !neighItem.value) return {};
          return {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `${neighItem.value.zipCode} nerenin posta kodu?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `${neighItem.value.zipCode} posta kodu ${cityName.value} ${titleCase(districtItem.value.name)} ${titleCase(
                      neighItem.value.name
                    )}'ne aittir.`
                  }
                }
              ]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    const isValid = computed(() => !!neighItem.value);
    const otherNeighborhoods = computed(() => {
      if (!districtItem.value || !neighItem.value) return [];
      return districtItem.value.neighborhoods.filter(
        (neigh) => {
          var _a;
          return neigh.slug !== ((_a = neighItem.value) == null ? void 0 : _a.slug);
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
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
          to: `/${citySlug.value}`,
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(cityName.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(cityName.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${citySlug.value}/${districtSlug.value}`,
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(titleCase)(districtItem.value.name))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(titleCase)(districtItem.value.name)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav><div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm"><div class="text-center mb-10"><div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-6 h-6 text-slate-900" }, null, _parent));
        _push(`</div><h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">${ssrInterpolate(unref(titleCase)(neighItem.value.name))}</h1><p class="text-slate-500 font-medium uppercase tracking-widest text-sm">${ssrInterpolate(unref(titleCase)(districtItem.value.name))}, ${ssrInterpolate(cityName.value)}</p></div><div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden"><div class="relative z-10"><p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4"> POSTA KODU </p><div class="mono text-7xl font-bold text-slate-900 mb-8">${ssrInterpolate(neighItem.value.zipCode)}</div><button class="${ssrRenderClass([
          copied.value ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800",
          "flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"
        ])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">${ssrInterpolate(neighItem.value.zipCode.substring(0, 2))}</div></div></div><div class="mt-8 flex justify-center"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` PAYLA\u015E </button></div>`);
        if (neighItem.value.mapCode) {
          _push(`<div class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"><div class="mb-4 flex items-center gap-2 px-2">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3></div>`);
          if (neighItem.value.mapCode.trim().startsWith("<")) {
            _push(`<div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full">${(_a = neighItem.value.mapCode) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", neighItem.value.mapCode)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (otherNeighborhoods.value.length) {
          _push(`<div class="mt-10"><h2 class="text-xl font-bold text-slate-900 mb-4">Bu il\xE7edeki di\u011Fer mahalleler</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
          ssrRenderList(otherNeighborhoods.value, (neigh) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: neigh.slug,
              to: `/${citySlug.value}/${districtSlug.value}/${neigh.slug}`,
              class: "soft-card p-4 rounded-xl flex items-center justify-between"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div${_scopeId}><h3 class="font-semibold text-slate-900 text-sm"${_scopeId}>${ssrInterpolate(unref(titleCase)(neigh.name))}</h3><p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider"${_scopeId}>${ssrInterpolate(neigh.zipCode)}</p></div>`);
                  _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5 text-slate-300" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-semibold text-slate-900 text-sm" }, toDisplayString(unref(titleCase)(neigh.name)), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider" }, toDisplayString(neigh.zipCode), 1)
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
        _push(`<div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">${ssrInterpolate(neighItem.value.zipCode)} nerenin posta kodu? </h2><p class="text-slate-600">${ssrInterpolate(neighItem.value.zipCode)} posta kodu ${ssrInterpolate(cityName.value)} ${ssrInterpolate(unref(titleCase)(districtItem.value.name))} ${ssrInterpolate(unref(titleCase)(neighItem.value.name))}&#39;ne aittir. </p></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">${ssrInterpolate(unref(titleCase)(districtItem.value.name))} ${ssrInterpolate(unref(titleCase)(neighItem.value.name))} Posta Kodu Rehberi </h2><p class="text-slate-600">${ssrInterpolate(cityName.value)} ${ssrInterpolate(unref(titleCase)(districtItem.value.name))} ${ssrInterpolate(unref(titleCase)(neighItem.value.name))}&#39;ne ait g\xFCncel posta kodu bilgileri a\u015Fa\u011F\u0131da yer almaktad\u0131r. Adres formlar\u0131nda, kargo g\xF6nderilerinde ve resmi i\u015Flemlerde hata pay\u0131n\u0131 s\u0131f\u0131ra indirmek i\xE7in bu kodu kullanabilirsiniz. </p><br><p><strong>${ssrInterpolate(unref(titleCase)(neighItem.value.name))} Posta Kodu: ${ssrInterpolate(neighItem.value.zipCode)}</strong></p></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2"> Adres Yaz\u0131m\u0131nda Posta Kodunun \xD6nemi </h2><p class="text-slate-600"> Posta kodu, bir adresin en spesifik bile\u015Fenidir. ${ssrInterpolate(unref(titleCase)(neighItem.value.name))} i\xE7in tan\u0131mlanan ${ssrInterpolate(neighItem.value.zipCode)} numaras\u0131n\u0131 kullanmak \u015Fu avantajlar\u0131 sa\u011Flar: </p><ul><li><b>S\u0131ralama H\u0131z\u0131:</b> PTT ve \xF6zel kargo \u015Firketlerinin otomatik ayr\u0131\u015Ft\u0131rma makineleri, g\xF6nderinizi adresten \xF6nce posta koduna g\xF6re s\u0131n\u0131fland\u0131r\u0131r. </li><li><b>Yanl\u0131\u015F Teslimat \xD6nleme:</b> T\xFCrkiye genelinde ayn\u0131 ismi ta\u015F\u0131yan y\xFCzlerce mahalle bulunmaktad\u0131r. Do\u011Fru kod, g\xF6nderinizin ba\u015Fka bir \u015Fehirdeki ada\u015F mahalleye gitmesini engeller. </li><li><b>Dijital Do\u011Fruluk:</b> Bankac\u0131l\u0131k ve e-devlet sistemlerinde adres teyidi yap\u0131l\u0131rken sistemler genellikle bu kodu baz al\u0131r. </li></ul></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">Konum Ve B\xF6lge Bilgileri</h2><p class="text-slate-600">${ssrInterpolate(unref(titleCase)(neighItem.value.name))}, ${ssrInterpolate(cityName.value)} ilinin ${ssrInterpolate(unref(titleCase)(districtItem.value.name))} il\xE7esine ba\u011Fl\u0131d\u0131r. Posta kodu yap\u0131s\u0131 incelendi\u011Finde ; </p><ol><li>\u0130lk 2 hane il plaka kodunu temsil eder.</li><li>Son 3 hane il\xE7e i\xE7erisindeki da\u011F\u0131t\u0131m b\xF6lgesini ve mahallesini kapsar.</li></ol></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">Veri Bulunamad\u0131!</h2><p class="text-sm mb-4"> Arad\u0131\u011F\u0131n\u0131z mahalle bilgisine ula\u015F\u0131lamad\u0131. L\xFCtfen adresi kontrol edin. </p><div class="text-left text-xs font-mono bg-white p-4 rounded border border-red-100 overflow-auto max-h-64"><p><strong>URL Params:</strong> ${ssrInterpolate(unref(route).params)}</p><p><strong>City Loaded:</strong> ${ssrInterpolate(((_b = unref(cityData).value) == null ? void 0 : _b.length) ? "YES" : "NO")} (${ssrInterpolate(citySlug.value)}) </p><p><strong>District Valid:</strong> ${ssrInterpolate(!!districtItem.value ? "YES" : "NO")} (${ssrInterpolate(districtSlug.value)}) </p><p><strong>Neighborhood Request:</strong> &quot;${ssrInterpolate(neighborhoodSlug.value)}&quot;</p>`);
        if (districtItem.value) {
          _push(`<div><p><strong>Available Neighborhoods (First 5):</strong></p><ul><!--[-->`);
          ssrRenderList(districtItem.value.neighborhoods.slice(0, 5), (neigh) => {
            _push(`<li>${ssrInterpolate(neigh.slug)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "mt-6 inline-block text-red-700 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ana Sayfaya D\xF6n`);
            } else {
              return [
                createTextVNode("Ana Sayfaya D\xF6n")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[city]/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_--WmN49K2.mjs.map
