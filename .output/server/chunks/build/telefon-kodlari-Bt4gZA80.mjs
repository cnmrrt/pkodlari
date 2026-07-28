import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-nkHqSgkI.mjs';
import { u as usePageSeo } from './usePageSeo-DXv1_ikA.mjs';
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
import 'lucide-vue-next';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "telefon-kodlari",
  __ssrInlineRender: true,
  setup(__props) {
    const phoneCodes = [
      { name: "Adana", code: "322" },
      { name: "Ad\u0131yaman", code: "416" },
      { name: "Afyonkarahisar", code: "272" },
      { name: "A\u011Fr\u0131", code: "472" },
      { name: "Aksaray", code: "382" },
      { name: "Amasya", code: "358" },
      { name: "Ankara", code: "312" },
      { name: "Antalya", code: "242" },
      { name: "Artvin", code: "466" },
      { name: "Ayd\u0131n", code: "256" },
      { name: "Bal\u0131kesir", code: "266" },
      { name: "Bart\u0131n", code: "378" },
      { name: "Batman", code: "488" },
      { name: "Bilecik", code: "228" },
      { name: "Bing\xF6l", code: "426" },
      { name: "Bitlis", code: "434" },
      { name: "Bolu", code: "374" },
      { name: "Burdur", code: "248" },
      { name: "Bursa", code: "224" },
      { name: "\xC7anakkale", code: "286" },
      { name: "\xC7ank\u0131r\u0131", code: "376" },
      { name: "\xC7orum", code: "364" },
      { name: "Denizli", code: "258" },
      { name: "Diyarbak\u0131r", code: "412" },
      { name: "D\xFCzce", code: "380" },
      { name: "Edirne", code: "284" },
      { name: "Elaz\u0131\u011F", code: "424" },
      { name: "Erzincan", code: "446" },
      { name: "Erzurum", code: "442" },
      { name: "Eski\u015Fehir", code: "222" },
      { name: "Gaziantep", code: "342" },
      { name: "Giresun", code: "454" },
      { name: "G\xFCm\xFC\u015Fhane", code: "456" },
      { name: "Hakkari", code: "438" },
      { name: "Hatay", code: "326" },
      { name: "Isparta", code: "246" },
      { name: "\u0130stanbul", code: "212 / 216" },
      { name: "\u0130zmir", code: "232" },
      { name: "Kahramanmara\u015F", code: "344" },
      { name: "Karab\xFCk", code: "370" },
      { name: "Karaman", code: "338" },
      { name: "Kars", code: "474" },
      { name: "Kastamonu", code: "366" },
      { name: "Kayseri", code: "352" },
      { name: "Kilis", code: "348" },
      { name: "K\u0131r\u0131kkale", code: "318" },
      { name: "K\u0131rklareli", code: "288" },
      { name: "K\u0131r\u015Fehir", code: "386" },
      { name: "Kocaeli", code: "262" },
      { name: "Konya", code: "332" },
      { name: "K\xFCtahya", code: "274" },
      { name: "Malatya", code: "422" },
      { name: "Manisa", code: "236" },
      { name: "Mardin", code: "482" },
      { name: "Mersin", code: "324" },
      { name: "Mu\u011Fla", code: "252" },
      { name: "Mu\u015F", code: "436" },
      { name: "Nev\u015Fehir", code: "384" },
      { name: "Ni\u011Fde", code: "388" },
      { name: "Ordu", code: "452" },
      { name: "Osmaniye", code: "328" },
      { name: "Rize", code: "464" },
      { name: "Sakarya", code: "264" },
      { name: "Samsun", code: "362" },
      { name: "Siirt", code: "484" },
      { name: "Sinop", code: "368" },
      { name: "Sivas", code: "346" },
      { name: "Tekirda\u011F", code: "282" },
      { name: "Tokat", code: "356" },
      { name: "Trabzon", code: "462" },
      { name: "Tunceli", code: "428" },
      { name: "U\u015Fak", code: "276" },
      { name: "Van", code: "432" },
      { name: "Yalova", code: "226" },
      { name: "Yozgat", code: "354" },
      { name: "Zonguldak", code: "372" }
    ];
    const cityList = computed(
      () => [...phoneCodes].sort((a, b) => a.name.localeCompare(b.name, "tr"))
    );
    useHead({
      title: "T\xFCrkiye Telefon Kodlar\u0131",
      meta: [
        {
          name: "description",
          content: "\u0130l baz\u0131nda T\xFCrkiye telefon alan kodlar\u0131n\u0131 kolayca g\xF6r\xFCnt\xFCleyin."
        }
      ]
    });
    usePageSeo({
      title: "T\xFCrkiye Telefon Kodlar\u0131",
      description: "\u0130l baz\u0131nda T\xFCrkiye telefon alan kodlar\u0131n\u0131 kolayca g\xF6r\xFCnt\xFCleyin."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500" }, _attrs))}><div class="text-center mb-12 py-9"><h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">T\xFCrkiye Telefon Kodlar\u0131</h1><p class="text-slate-500 mb-4"> \u0130l baz\u0131nda telefon alan kodlar\u0131n\u0131 h\u0131zl\u0131ca g\xF6r\xFCnt\xFCleyin. </p><p class="text-sm text-slate-400"> Baz\u0131 illerde birden fazla alan kodu kullan\u0131labilir; bu sayfada ba\u015Fl\u0131ca/\xF6ne \xE7\u0131kan kod g\xF6sterilmektedir. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(cityList.value, (item) => {
        _push(`<div class="soft-card p-5 rounded-xl flex items-center justify-between"><div><h2 class="font-semibold text-slate-900 text-sm">${ssrInterpolate(item.name)}</h2><p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider"> Telefon kodu </p></div><div class="text-lg font-bold text-slate-900 whitespace-nowrap">${ssrInterpolate(item.code)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/telefon-kodlari.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=telefon-kodlari-Bt4gZA80.mjs.map
