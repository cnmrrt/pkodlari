import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { Check, Copy } from 'lucide-vue-next';
import { u as useHead } from './v3-Dv9g0FGI.mjs';
import { u as usePageSeo } from './usePageSeo-CgmHQHjs.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pageData = ref({
      "il": "\u0130zmir",
      "ilce": "Konak",
      "mahalle": "Mehmet Ali Akman Mahallesi",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6253.70642630196!2d27.069834369222814!3d38.398642886869034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdc0341d83827%3A0xaa35c4644b2049ea!2sMehmet%20Ali%20Akman%2C%20Konak%2F%C4%B0zmir!5e0!3m2!1sen!2str!4v1772411149315!5m2!1sen!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "35290",
      "semt": "G\xFCzelyal\u0131"
    });
    const copied = ref(false);
    const pageTitle = computed(
      () => `${pageData.value.mahalle} Posta Kodu (${pageData.value.ilce}/${pageData.value.il})`
    );
    const pageDesc = computed(
      () => `${pageData.value.il} ilinin ${pageData.value.ilce} il\xE7esine ba\u011Fl\u0131 ${pageData.value.mahalle}'nin posta kodunu g\xF6rmek i\xE7in t\u0131klay\u0131n!`
    );
    useHead({
      title: pageTitle,
      meta: [{ name: "description", content: pageDesc }],
      script: [
        {
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
                name: pageData.value.il,
                item: `https://pkodlari.com/izmir`
              },
              {
                "@type": "ListItem",
                position: 3,
                name: pageData.value.ilce,
                item: `https://pkodlari.com/izmir/konak`
              },
              {
                "@type": "ListItem",
                position: 4,
                name: pageData.value.mahalle,
                item: `https://pkodlari.com/izmir/konak/mehmet-ali-akman-mahallesi`
              }
            ]
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `${pageData.value.postaKodu} nerenin posta kodu?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${pageData.value.postaKodu} posta kodu ${pageData.value.il} ${pageData.value.ilce} ${pageData.value.mahalle}'ne aittir.`
                }
              }
            ]
          })
        }
      ]
    });
    usePageSeo({ title: pageTitle, description: pageDesc });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-content-neighborhood animate-in fade-in" }, _attrs))}><nav class="breadcrumb"><a href="/" class="hover:text-slate-900 transition-colors">T\xDCRK\u0130YE</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg><a href="/izmir" class="hover:text-slate-900 transition-colors">\u0130ZM\u0130R</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg><a href="/izmir/konak" class="hover:text-slate-900 transition-colors">Konak</a></nav><div class="main-info-container"><div class="main-info-title-container"><div class="main-info-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon w-6 h-6 text-slate-900"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><h1> Mehmet Ali Akman Mahallesi </h1><p class="main-info-subtitle"> Konak, \u0130zmir </p></div><div class="post-code-view-container"><div class="sub-post-code-view-container"><p> POSTA KODU </p><div class="postCode">35290</div><button class="${ssrRenderClass([
        copied.value ? "green-btn" : "black-btn",
        "flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 cursor-pointer"
      ])}">`);
      if (copied.value) {
        _push(ssrRenderComponent(unref(Check), null, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Copy), null, null, _parent));
      }
      _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="btn-bg"> 35 </div></div></div><div class="share-btn"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon w-4 h-4"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> PAYLA\u015E </button></div><div class="map-container"><div class="map-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon w-4 h-4 text-slate-400"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><h3>Konum</h3></div><div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6253.70642630196!2d27.069834369222814!3d38.398642886869034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdc0341d83827%3A0xaa35c4644b2049ea!2sMehmet%20Ali%20Akman%2C%20Konak%2F%C4%B0zmir!5e0!3m2!1sen!2str!4v1772411149315!5m2!1sen!2str" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="page-text"><h2>35290 nerenin posta kodu?</h2><p> 35290 posta kodu \u0130zmir Konak Mehmet Ali Akman Mahallesi&#39;ne aittir. </p></div><div class="page-text"><h2> Konak Mehmet Ali Akman Mahallesi Posta Kodu Rehberi </h2><p> \u0130zmir Konak Mehmet Ali Akman Mahallesi&#39;ne ait g\xFCncel posta kodu bilgileri a\u015Fa\u011F\u0131da yer almaktad\u0131r. Adres formlar\u0131nda, kargo g\xF6nderilerinde ve resmi i\u015Flemlerde kullanabilirsiniz. </p><br><p><strong>Mehmet Ali Akman Mahallesi Posta Kodu: 35290</strong></p></div><div class="page-text"><h2> Adres Yaz\u0131m\u0131nda Posta Kodunun \xD6nemi </h2><p> Posta kodu, bir adresin en spesifik bile\u015Fenidir. Mehmet Ali Akman Mahallesi i\xE7in tan\u0131mlanan 35290 numaras\u0131n\u0131 kullanmak \u015Fu avantajlar\u0131 sa\u011Flar: </p><ul><li><b>S\u0131ralama H\u0131z\u0131:</b> PTT ve \xF6zel kargo \u015Firketlerinin otomatik ayr\u0131\u015Ft\u0131rma makineleri, g\xF6nderinizi adresten \xF6nce posta koduna g\xF6re s\u0131n\u0131fland\u0131r\u0131r. </li><li><b>Yanl\u0131\u015F Teslimat \xD6nleme:</b> T\xFCrkiye genelinde ayn\u0131 ismi ta\u015F\u0131yan y\xFCzlerce mahalle bulunmaktad\u0131r. Do\u011Fru kod, g\xF6nderinizin ba\u015Fka bir \u015Fehirdeki ada\u015F mahalleye gitmesini engeller. </li><li><b>Dijital Do\u011Fruluk:</b> Bankac\u0131l\u0131k ve e-devlet sistemlerinde adres teyidi yap\u0131l\u0131rken sistemler genellikle bu kodu baz al\u0131r. </li></ul></div><div class="page-text"><h2>Konum Ve B\xF6lge Bilgileri</h2><p> Mehmet Ali Akman Mahallesi, \u0130zmir ilinin Konak il\xE7esine ba\u011Fl\u0131d\u0131r. Posta kodu yap\u0131s\u0131 incelendi\u011Finde ; </p><ol><li>\u0130lk 2 hane il plaka kodunu temsil eder.</li><li>Son 3 hane il\xE7e i\xE7erisindeki da\u011F\u0131t\u0131m b\xF6lgesini ve mahallesini kapsar.</li></ol></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/izmir/konak/mehmet-ali-akman-mahallesi/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DGiiwgJu.mjs.map
