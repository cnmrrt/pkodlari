import { _ as __nuxt_component_0 } from './nuxt-link-C5pz7yFL.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const filter = ref("");
    const { data: elazigData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "elazig-data",
      () => $fetch("https://pkodlari.com/data/elazig.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtSlug = computed(() => route.params.district);
    const districtData = computed(() => {
      if (!elazigData.value) return null;
      const filtered = elazigData.value.filter((item) => slugify(item.ilce || "MERKEZ") === districtSlug.value);
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
    const pageTitle = computed(() => districtData.value ? `${titleCase(districtData.value.name)} Posta Kodlar\u0131` : "\u0130l\xE7e Bulunamad\u0131");
    const pageDesc = computed(() => districtData.value ? `Elaz\u0131\u011F ilinin ${titleCase(districtData.value.name)} il\xE7esine ba\u011Fl\u0131 mahallelerin posta kodlar\u0131n\u0131 g\xF6rmek i\xE7in t\u0131klay\u0131n!` : "Posta Kodu Rehberi");
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
                { "@type": "ListItem", "position": 1, "name": "Anasayfa", "item": "https://pkodlari.com/" },
                { "@type": "ListItem", "position": 2, "name": "Elaz\u0131\u011F", "item": "https://pkodlari.com/elazig" },
                { "@type": "ListItem", "position": 3, "name": titleCase(districtData.value.name), "item": `https://pkodlari.com/elazig/${districtSlug.value}` }
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-4xl mx-auto" }, _attrs))}><div class="header"><div class="districtTitleContainer">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/elazig" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowLeft), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ArrowLeft))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div><h1>${ssrInterpolate(unref(titleCase)(districtData.value.name))} Posta Kodlar\u0131</h1><p>Elaz\u0131\u011F</p></div></div><div class="neighborhood-search-container">`);
        _push(ssrRenderComponent(unref(Search), null, null, _parent));
        _push(`<input type="text" placeholder="Mahallelerde ara..."${ssrRenderAttr("value", filter.value)}></div></div><div class="neighborhoods-links-container"><!--[-->`);
        ssrRenderList(neighs.value, (nItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: nItem.slug,
            to: `/elazig/${districtSlug.value}/${nItem.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mahalle-name"${_scopeId}><h4${_scopeId}>${ssrInterpolate(unref(titleCase)(nItem.name))}</h4><p${_scopeId}>MAHALLE</p></div><div class="mahalle-zip-code"${_scopeId}><span${_scopeId}>${ssrInterpolate(nItem.zipCode)}</span>`);
                _push2(ssrRenderComponent(unref(ChevronRight), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "mahalle-name" }, [
                    createVNode("h4", null, toDisplayString(unref(titleCase)(nItem.name)), 1),
                    createVNode("p", null, "MAHALLE")
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
          _push(`<div class="col-span-full p-12 text-center text-slate-400 text-sm">Sonu\xE7 bulunamad\u0131</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 text-center text-slate-400" }, _attrs))}><p>\u0130l\xE7e bulunamad\u0131.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/elazig",
          class: "text-slate-900 underline mt-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Elaz\u0131\u011F sayfas\u0131na d\xF6n`);
            } else {
              return [
                createTextVNode("Elaz\u0131\u011F sayfas\u0131na d\xF6n")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elazig/[district]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DtQM5-HB.mjs.map
