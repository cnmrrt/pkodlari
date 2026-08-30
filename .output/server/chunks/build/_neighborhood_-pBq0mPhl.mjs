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
    const { data: boluData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "bolu-data",
      () => $fetch("https://pkodlari.com/data/es/madrid.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const neighData = computed(() => {
      if (!boluData.value) return null;
      return boluData.value.find(
        (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value && slugify(item.mahalle) === neighborhoodSlug.value
      );
    });
    const isValid = computed(() => !!neighData.value);
    const pageTitle = computed(() => neighData.value ? `${titleCase(neighData.value.mahalle)} C\xF3digo postal (${titleCase(neighData.value.ilce)}/Madrid)` : "C\xF3digo postal no encontrado");
    const pageDesc = computed(() => neighData.value ? `\xA1Haz clic aqu\xED para ver el c\xF3digo postal de ${titleCase(neighData.value.mahalle)} en el distrito de ${titleCase(neighData.value.ilce)} de Madrid!` : "Gu\xEDa de c\xF3digos postales");
    useHead({
      htmlAttrs: {
        lang: "es"
      },
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
                  "name": "P\xE1gina principal",
                  "item": "https://pkodlari.com/es"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Madrid",
                  "item": "https://pkodlari.com/es/madrid"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": titleCase(neighData.value.ilce),
                  "item": `https://pkodlari.com/es/madrid/${districtSlug.value}`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": titleCase(neighData.value.mahalle),
                  "item": `https://pkodlari.com/es/madrid/${districtSlug.value}/${neighborhoodSlug.value}`
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
                "name": `\xBFD\xF3nde est\xE1 ${neighData.value.postaKodu}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `El c\xF3digo postal ${neighData.value.postaKodu} pertenece a Madrid, y ${titleCase(neighData.value.district)} pertenece a ${titleCase(neighData.value.neighborhood)}.`
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
          to: "/es",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ESPA\xD1A`);
            } else {
              return [
                createTextVNode("ESPA\xD1A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/es/madrid",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`MADRID`);
            } else {
              return [
                createTextVNode("MADRID")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/es/madrid/${districtSlug.value}`,
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
        _push(`</nav><div class="main-info-container"><div class="main-info-title-container"><div class="main-info-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><h1>${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}</h1><p class="main-info-subtitle">${ssrInterpolate(unref(titleCase)(neighData.value.ilce))}, MADRID</p></div><div class="post-code-view-container"><div class="sub-post-code-view-container"><p>C\xD3DIGO POSTAL</p><div class="postCode">${ssrInterpolate(neighData.value.postaKodu)}</div><button class="${ssrRenderClass([copied.value ? "green-btn" : "black-btn", "copy-btn active:scale-95"])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), null, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), null, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "COPIADO" : "COPIA EL C\xD3DIGO")}</button></div><div class="btn-bg">${ssrInterpolate(neighData.value.postaKodu.substring(0, 2))}</div></div></div><div class="share-btn"><button>`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` COMPARTIR </button></div>`);
        if (neighData.value.map) {
          _push(`<div class="map-container"><div class="map-title">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3>Ubicaci\xF3n</h3></div>`);
          if (neighData.value.map.trim().startsWith("<")) {
            _push(`<div class="map">${(_a = neighData.value.map) != null ? _a : ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", neighData.value.map)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">\xA1No se encontraron datos!</h2><p class="text-sm mb-4">No se pudo encontrar la informaci\xF3n del vecindario que solicit\xF3. Por favor, verifique la direcci\xF3n.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/bolu",
          class: "mt-6 inline-block text-red-700 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Volver a la p\xE1gina de Madrid `);
            } else {
              return [
                createTextVNode("Volver a la p\xE1gina de Madrid ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/es/madrid/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_-pBq0mPhl.mjs.map
