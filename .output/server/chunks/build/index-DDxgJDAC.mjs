import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useFetch, t as transformPostalData } from './fetch-DwpLd3Ta.mjs';
import { u as useHead } from './v3-Dv9g0FGI.mjs';
import { u as usePageSeo } from './usePageSeo-CgmHQHjs.mjs';
import './asyncData-gHCZgazS.mjs';
import 'perfect-debounce';
import './server.mjs';
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
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    useHead({
      htmlAttrs: {
        lang: "es"
      },
      title: `C\xF3digos postales de Espa\xF1a ${currentYear}`,
      meta: [{ name: "description", content: "Gu\xEDa de c\xF3digos postales turcos. Busque r\xE1pidamente c\xF3digos postales por provincia, distrito y barrio." }]
    });
    usePageSeo({ title: "C\xF3digos postales de Espa\xF1a", description: "Gu\xEDa de c\xF3digos postales turcos. Busque r\xE1pidamente c\xF3digos postales por provincia, distrito y barrio." });
    const { data: searchData, pending: searchLoading } = useFetch(
      "/api/postal-data",
      {
        key: "search-postal-data",
        server: false,
        transform: transformPostalData
      },
      "$T5IkHzFK4C"
      /* nuxt-injected */
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500" }, _attrs))}><div class="home-h1-container"><h1>C\xF3digos postales de Espa\xF1a</h1><p>Verifique r\xE1pidamente los c\xF3digos postales del distrito y del vecindario.</p></div><div class="home-cities"><a href="/es/madrid"><div>Madrid</div><div>15 VECINDARIO </div></a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/es/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DDxgJDAC.mjs.map
