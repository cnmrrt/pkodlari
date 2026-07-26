import { u as useRoute, a as useAsyncData, t as titleCase, s as slugify, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Search, ChevronRight, MapPin } from 'lucide-vue-next';
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
    const citySlug = computed(() => route.params.city);
    const districtSlug = computed(() => route.params.district);
    const { data: cityData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `city-data-${citySlug.value}`,
      async () => {
        try {
          return await $fetch(`https://pkodlari.com/data/${citySlug.value}.json`);
        } catch {
          return [];
        }
      },
      "$KlF-INyfzI"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const cityName = computed(() => titleCase(citySlug.value));
    const districtItem = computed(() => {
      if (!cityData.value) return null;
      const filtered = cityData.value.filter(
        (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value
      );
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
    const pageTitle = computed(
      () => districtItem.value ? `${titleCase(districtItem.value.name)} Posta Kodları` : "İlçe Bulunamadı"
    );
    const pageDesc = computed(() => {
      if (!districtItem.value) return "Posta Kodu Rehberi";
      return `${cityName.value} ilinin ${titleCase(
        districtItem.value.name
      )} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!`;
    });
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        computed(() => {
          if (!districtItem.value) return {};
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
                  name: cityName.value,
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
      if (!districtItem.value) return [];
      return districtItem.value.neighborhoods.filter(
        (neigh) => neigh.name.toLocaleLowerCase("tr").includes(filter.value.toLocaleLowerCase("tr"))
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"><div class="flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${citySlug.value}`,
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
        _push(`<div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">${ssrInterpolate(unref(titleCase)(districtItem.value.name))} Posta Kodları </h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">${ssrInterpolate(cityName.value)}</p></div></div><div class="relative w-full md:w-64">`);
        _push(ssrRenderComponent(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, null, _parent));
        _push(`<input type="text" placeholder="Mahallelerde ara..." class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"${ssrRenderAttr("value", filter.value)}></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(neighs.value, (nItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: nItem.slug,
            to: `/${citySlug.value}/${districtSlug.value}/${nItem.slug}`,
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
          _push(`<div class="col-span-full p-12 text-center text-slate-400 text-sm"> Sonuç bulunamadı </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (districtItem.value.mapCode) {
          _push(`<div class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"><div class="mb-4 flex items-center gap-2 px-2">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3></div>`);
          if (districtItem.value.mapCode.trim().startsWith("<")) {
            _push(`<div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full">${districtItem.value.mapCode ?? ""}</div>`);
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
//# sourceMappingURL=index-Dz7T-nBo.mjs.map
