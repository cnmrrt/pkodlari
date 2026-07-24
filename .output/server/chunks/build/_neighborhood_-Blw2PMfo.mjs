import { u as useRoute, a as useAsyncData, s as slugify, t as titleCase, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { ChevronRight, MapPin, Check, Copy, Share2 } from 'lucide-vue-next';
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
  __name: "[neighborhood]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const copied = ref(false);
    const { data: mardinData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "mardin-data",
      () => $fetch("https://pkodlari.com/data/mardin.json")
    )), __temp = await __temp, __restore(), __temp);
    const districtSlug = computed(() => route.params.district);
    const neighborhoodSlug = computed(() => route.params.neighborhood);
    const neighData = computed(() => {
      if (!mardinData.value) return null;
      return mardinData.value.find(
        (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value && slugify(item.mahalle) === neighborhoodSlug.value
      );
    });
    const isValid = computed(() => !!neighData.value);
    const pageTitle = computed(() => neighData.value ? `${titleCase(neighData.value.mahalle)} Posta Kodu (${titleCase(neighData.value.ilce)}/Mardin)` : "Posta Kodu Bulunamadı");
    const pageDesc = computed(() => neighData.value ? `Mardin ilinin ${titleCase(neighData.value.ilce)} ilçesine bağlı ${titleCase(neighData.value.mahalle)}'nin posta kodunu görmek için tıklayın!` : "Posta Kodu Rehberi");
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
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Anasayfa",
                  "item": "https://pkodlari.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Mardin",
                  "item": "https://pkodlari.com/mardin"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": titleCase(neighData.value.ilce),
                  "item": `https://pkodlari.com/mardin/${districtSlug.value}`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": titleCase(neighData.value.mahalle),
                  "item": `https://pkodlari.com/mardin/${districtSlug.value}/${neighborhoodSlug.value}`
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
                "name": `${neighData.value.postaKodu} nerenin posta kodu?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${neighData.value.postaKodu} posta kodu Mardin ${titleCase(neighData.value.ilce)} ${titleCase(neighData.value.mahalle)}'ne aittir.`
                }
              }]
            })
          };
        })
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (isValid.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500 max-w-2xl mx-auto" }, _attrs))}><nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`TÜRKİYE`);
            } else {
              return [
                createTextVNode("TÜRKİYE")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/mardin",
          class: "hover:text-slate-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`MARDİN`);
            } else {
              return [
                createTextVNode("MARDİN")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/mardin/${districtSlug.value}`,
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
        _push(`</nav><div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm"><div class="text-center mb-10"><div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-6 h-6 text-slate-900" }, null, _parent));
        _push(`</div><h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}</h1><p class="text-slate-500 font-medium uppercase tracking-widest text-sm">${ssrInterpolate(unref(titleCase)(neighData.value.ilce))}, Mardin</p></div><div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden"><div class="relative z-10"><p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p><div class="mono text-7xl font-bold text-slate-900 mb-8">${ssrInterpolate(neighData.value.postaKodu)}</div><button class="${ssrRenderClass([copied.value ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800", "flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"])}">`);
        if (copied.value) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
        }
        _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">${ssrInterpolate(neighData.value.postaKodu.substring(0, 2))}</div></div></div><div class="mt-8 flex justify-center"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` PAYLAŞ </button></div>`);
        if (neighData.value.map) {
          _push(`<div class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"><div class="mb-4 flex items-center gap-2 px-2">`);
          _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-slate-400" }, null, _parent));
          _push(`<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3></div>`);
          if (neighData.value.map.trim().startsWith("<")) {
            _push(`<div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full">${neighData.value.map ?? ""}</div>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", neighData.value.map)} class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">${ssrInterpolate(neighData.value.postaKodu)} nerenin posta kodu?</h2><p class="text-slate-600">${ssrInterpolate(neighData.value.postaKodu)} posta kodu Mardin ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}&#39;ne aittir.</p></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} Posta Kodu Rehberi</h2><p class="text-slate-600">Mardin ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}&#39;ne ait güncel posta kodu bilgileri aşağıda yer almaktadır. Adres formlarında, kargo gönderilerinde ve resmi işlemlerde hata payını sıfıra indirmek için bu kodu kullanabilirsiniz.</p><br><p><strong>${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} Posta Kodu: ${ssrInterpolate(neighData.value.postaKodu)}</strong></p></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">Adres Yazımında Posta Kodunun Önemi</h2><p class="text-slate-600">Posta kodu, bir adresin en spesifik bileşenidir. ${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))} için tanımlanan ${ssrInterpolate(neighData.value.postaKodu)} numarasını kullanmak şu avantajları sağlar:</p><ul><li><b>Sıralama Hızı:</b> PTT ve özel kargo şirketlerinin otomatik ayrıştırma makineleri, gönderinizi adresten önce posta koduna göre sınıflandırır.</li><li><b>Yanlış Teslimat Önleme:</b> Türkiye genelinde aynı ismi taşıyan yüzlerce mahalle bulunmaktadır. Doğru kod, gönderinizin başka bir şehirdeki adaş mahalleye gitmesini engeller.</li><li><b>Dijital Doğruluk:</b> Bankacılık ve e-devlet sistemlerinde adres teyidi yapılırken sistemler genellikle bu kodu baz alır.</li></ul></div><div class="mt-8 text-center mb-8"><h2 class="text-xl font-bold text-slate-900 mb-2">Konum Ve Bölge Bilgileri</h2><p class="text-slate-600">${ssrInterpolate(unref(titleCase)(neighData.value.mahalle))}, Mardin ilinin ${ssrInterpolate(unref(titleCase)(neighData.value.ilce))} ilçesine bağlıdır. Posta kodu yapısı incelendiğinde ;</p><ol><li>İlk 2 hane il plaka kodunu temsil eder.</li><li>Son 3 hane ilçe içerisindeki dağıtım bölgesini ve mahallesini kapsar.</li></ol></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-12 text-center text-slate-500" }, _attrs))}><div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100"><h2 class="font-bold text-lg mb-2">Veri Bulunamadı!</h2><p class="text-sm mb-4">Aradığınız mahalle bilgisine ulaşılamadı. Lütfen adresi kontrol edin.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/mardin",
          class: "mt-6 inline-block text-red-700 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Mardin Sayfasına Dön`);
            } else {
              return [
                createTextVNode("Mardin Sayfasına Dön")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mardin/[district]/[neighborhood].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_neighborhood_-Blw2PMfo.mjs.map
