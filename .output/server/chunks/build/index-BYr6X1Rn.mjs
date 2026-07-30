import { u as useAsyncData, s as slugify, t as titleCase, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
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

const cityName = "\u0130stanbul";
const citySlug = "istanbul";
const districtName = "\u015Eile";
const districtSlug = "sile";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const filter = ref("");
    const { data: rawNeighborhoods } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "sile-data",
      () => $fetch("https://pkodlari.com/data/istanbul/sile.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtData = computed(() => {
      if (!rawNeighborhoods.value || rawNeighborhoods.value.length === 0) return null;
      return {
        name: districtName,
        neighborhoods: rawNeighborhoods.value.map((item) => ({
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
    const pageTitle = computed(
      () => districtData.value ? `${cityName} ${titleCase(districtData.value.name)} Posta Kodlar\u0131` : "\u0130l\xE7e Bulunamad\u0131"
    );
    const pageDesc = computed(
      () => districtData.value ? `${cityName} ilinin ${titleCase(
        districtData.value.name
      )} il\xE7esine ba\u011Fl\u0131 mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!` : "Posta Kodu Rehberi"
    );
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
                  name: "\u0130stanbul",
                  item: `https://pkodlari.com/${citySlug}`
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: titleCase(districtData.value.name),
                  item: `https://pkodlari.com/${citySlug}/${districtSlug}`
                }
              ]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
        _push(`<div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">${ssrInterpolate(unref(titleCase)(districtData.value.name))} Posta Kodlar\u0131 </h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">${ssrInterpolate(cityName)}</p></div></div><div class="relative w-full md:w-64">`);
        _push(ssrRenderComponent(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, null, _parent));
        _push(`<input${ssrRenderAttr("value", filter.value)} type="text" placeholder="Mahallelerde ara..." class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(neighs.value, (nItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: nItem.slug,
            to: `/istanbul/${districtSlug}/${nItem.slug}`,
            class: "soft-card p-5 flex items-center justify-between group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="min-w-0 pr-4"${_scopeId}><h4 class="font-semibold text-slate-900 truncate text-base"${_scopeId}>${ssrInterpolate(unref(titleCase)(nItem.name))}</h4><p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"${_scopeId}> MAHALLE </p></div><div class="flex items-center gap-3"${_scopeId}><span class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"${_scopeId}>${ssrInterpolate(nItem.zipCode)}</span>`);
                _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "min-w-0 pr-4" }, [
                    createVNode("h4", { class: "font-semibold text-slate-900 truncate text-base" }, toDisplayString(unref(titleCase)(nItem.name)), 1),
                    createVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5" }, " MAHALLE ")
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
          _push(`<div class="col-span-full p-12 text-center text-slate-400 text-sm"> Sonu\xE7 bulunamad\u0131 </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 text-center text-slate-400" }, _attrs))}><p>\u0130l\xE7e bulunamad\u0131.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${citySlug}`,
          class: "text-slate-900 underline mt-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(cityName)} Sayfas\u0131na D\xF6n `);
            } else {
              return [
                createTextVNode(toDisplayString(cityName) + " Sayfas\u0131na D\xF6n ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/istanbul/sile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BYr6X1Rn.mjs.map
