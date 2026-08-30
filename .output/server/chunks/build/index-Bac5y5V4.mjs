import { _ as __nuxt_component_0 } from './nuxt-link-C5pz7yFL.mjs';
import { u as useAsyncData, t as titleCase } from './asyncData-gHCZgazS.mjs';
import { defineComponent, ref, computed, withAsyncContext, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Search, ChevronRight, MapPin } from 'lucide-vue-next';
import { b as buildCityItemFromJson } from './cityJson-CfBxNPw-.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const filter = ref("");
    const citySlug = computed(() => route.params.city);
    const districtSlug = computed(() => route.params.district);
    const { data: cityJson } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => `city-data-${citySlug.value}`,
      () => $fetch(`/api/data/${citySlug.value}`),
      "$vuTwMfLEin"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const cityItem = computed(() => cityJson.value ? buildCityItemFromJson(cityJson.value) : null);
    const districtItem = computed(() => {
      var _a;
      return (_a = cityItem.value) == null ? void 0 : _a.districts[districtSlug.value];
    });
    const pageTitle = computed(
      () => districtItem.value ? `${titleCase(districtItem.value.name)} Posta Kodlar\u0131` : "\u0130l\xE7e Bulunamad\u0131"
    );
    const pageDesc = computed(() => {
      if (!cityItem.value || !districtItem.value) return "Posta Kodu Rehberi";
      return `${titleCase(cityItem.value.name)} ilinin ${titleCase(
        districtItem.value.name
      )} il\xE7esine ba\u011Fl\u0131 mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!`;
    });
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        computed(() => {
          if (!cityItem.value || !districtItem.value) return {};
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
                  item: `https://pkodlari.com/`
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: titleCase(cityItem.value.name),
                  item: `https://pkodlari.com/${citySlug.value}`
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: titleCase(districtItem.value.name),
                  item: `https://pkodlari.com/${citySlug.value}/${districtSlug.value}`
                }
              ]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    const isValid = computed(() => !!districtItem.value);
    const neighs = computed(() => {
      if (!isValid.value) return [];
      const items = Object.entries(districtItem.value.neighborhoods);
      return items.filter(
        ([, n]) => n.name.toLocaleLowerCase("tr").includes(filter.value.toLocaleLowerCase("tr"))
      ).sort(([, a], [, b]) => a.name.localeCompare(b.name, "tr"));
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="header"><div class="districtTitleContainer">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${citySlug.value}`
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
        _push(`<div><h1>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(districtItem.value.name))} Posta Kodlar\u0131 </h1><p>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(cityItem.value.name))}</p></div></div><div class="neighborhood-search-container">`);
        _push(ssrRenderComponent(unref(Search), null, null, _parent));
        _push(`<input type="text" placeholder="Mahallelerde ara..."${ssrRenderAttr("value", filter.value)}></div></div><div class="neighborhoods-links-container"><!--[-->`);
        ssrRenderList(neighs.value, ([nSlug, nItem]) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: nSlug,
            to: `/${citySlug.value}/${districtSlug.value}/${nSlug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mahalle-name"${_scopeId}><h4${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(nItem.name))}</h4><p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"${_scopeId}> MAHALLE </p></div><div class="mahalle-zip-code"${_scopeId}><span${_scopeId}>${ssrInterpolate(nItem.zipCode)}</span>`);
                _push2(ssrRenderComponent(unref(ChevronRight), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "mahalle-name" }, [
                    createVNode("h4", null, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(nItem.name)), 1),
                    createVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5" }, " MAHALLE ")
                  ]),
                  createVNode("div", { class: "mahalle-zip-code" }, [
                    createVNode("span", null, toDisplayString(nItem.zipCode), 1),
                    createVNode(unref(ChevronRight))
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
        _push(`</div>`);
        if (districtItem.value.mapCode) {
          _push(`<div class="map-container"><div class="map-title">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3>Konum</h3></div>`);
          if (districtItem.value.mapCode.trim().startsWith("<")) {
            _push(`<div class="map">${(_a = districtItem.value.mapCode) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", districtItem.value.mapCode)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[city]/[district]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bac5y5V4.mjs.map
