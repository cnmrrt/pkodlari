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
      "il": "\u0130stanbul",
      "ilce": "Sar\u0131yer",
      "mahalle": "Maslak Mahallesi",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.014300500932!2d29.005789818837663!3d41.112612989461994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bf15c34913%3A0x19571e96a2eaf2f6!2zTWFzbGFrLCBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1773363121756!5m2!1str!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": 34475,
      "semt": "Maslak"
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
                item: `https://pkodlari.com/istanbul`
              },
              {
                "@type": "ListItem",
                position: 3,
                name: pageData.value.ilce,
                item: `https://pkodlari.com/istanbul/sariyer`
              },
              {
                "@type": "ListItem",
                position: 4,
                name: pageData.value.mahalle,
                item: `https://pkodlari.com/istanbul/sariyer/maslak-mahallesi`
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-content-neighborhood animate-in fade-in" }, _attrs))}><nav class="breadcrumb"><a href="/" class="hover:text-slate-900 transition-colors">T\xDCRK\u0130YE</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg><a href="/istanbul" class="hover:text-slate-900 transition-colors">\u0130STANBUL</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg><a href="/istanbul/sariyer" class="hover:text-slate-900 transition-colors">Sar\u0131yer</a></nav><div class="main-info-container"><div class="main-info-title-container"><div class="main-info-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon w-6 h-6 text-slate-900"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><h1> Maslak Mahallesi </h1><p class="main-info-subtitle"> Sar\u0131yer, \u0130stanbul </p></div><div class="post-code-view-container"><div class="sub-post-code-view-container"><p> POSTA KODU </p><div class="postCode">34475</div><button class="${ssrRenderClass([
        copied.value ? "green-btn" : "black-btn",
        "copy-btn active:scale-95"
      ])}">`);
      if (copied.value) {
        _push(ssrRenderComponent(unref(Check), null, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Copy), null, null, _parent));
      }
      _push(` ${ssrInterpolate(copied.value ? "KOPYALANDI" : "KODU KOPYALA")}</button></div><div class="btn-bg"> 34 </div></div></div><div class="share-btn"><button class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon w-4 h-4"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> PAYLA\u015E </button></div><div class="mt-10"><h2>Bu il\xE7edeki di\u011Fer mahalleler</h2><div class="neighborhoods-links-container"><a href="/istanbul/sariyer/ayazaga-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Ayaza\u011Fa Mahallesi</h3><p> 34475 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/bahcekoy-kemer-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Bah\xE7ek\xF6y Kemer Mahallesi</h3><p> 34473 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/bahcekoy-merkez-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3> Bah\xE7ek\xF6y Merkez Mahallesi </h3><p> 34473 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/bahcekoy-yeni-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Bah\xE7ek\xF6y Yeni Mahallesi</h3><p> 34473 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/baltalimani-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Baltaliman\u0131 Mahallesi</h3><p> 34470 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/cumhuriyet-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Cumhuriyet Mahallesi</h3><p> 34457 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/camlitepe-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>\xC7aml\u0131tepe Mahallesi</h3><p> 34457 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/cayirbasi-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>\xC7ay\u0131rba\u015F\u0131 Mahallesi</h3><p> 34453 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/darussafaka-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Dar\xFC\u015F\u015Fafaka Mahallesi</h3><p> 34457 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/demircikoy-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Demircik\xF6y Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/emirgan-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Emirgan Mahallesi</h3><p> 34467 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/fatih-sultan-mehmet-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3> Fatih Sultan Mehmet Mahallesi </h3><p> 34470 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/ferahevler-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Ferahevler Mahallesi</h3><p> 34457 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/garipce-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Garip\xE7e Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/gumusdere-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>G\xFCm\xFC\u015Fdere Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/huzur-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Huzur Mahallesi</h3><p> 34475 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/istinye-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>\u0130stinye Mahallesi</h3><p> 34460 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/kazim-karabekir-pasa-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3> Kaz\u0131m Karabekir Pa\u015Fa Mahallesi </h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/kisirkaya-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>K\u0131s\u0131rkaya Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/kirecburnu-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Kire\xE7burnu Mahallesi</h3><p> 34457 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/kocatas-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Kocata\u015F Mahallesi</h3><p> 34453 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/kumkoy-kilyos-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3> Kumk\xF6y (Kilyos) Mahallesi </h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/maden-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Maden Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/pinar-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>P\u0131nar Mahallesi</h3><p> 34460 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/poligon-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Poligon Mahallesi</h3><p> 34460 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/ptt-evleri-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Ptt Evleri Mahallesi</h3><p> 34453 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/resitpasa-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Re\u015Fitpa\u015Fa Mahallesi</h3><p> 34467 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/rumelifeneri-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Rumelifeneri Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/rumelihisari-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Rumelihisar\u0131 Mahallesi</h3><p> 34470 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/rumelikavagi-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Rumelikava\u011F\u0131 Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/sariyer-merkez-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Sar\u0131yer Merkez Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/tarabya-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Tarabya Mahallesi</h3><p> 34457 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/uskumrukoy-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Uskumruk\xF6y Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/yeni-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Yeni Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/yenikoy-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Yenik\xF6y Mahallesi</h3><p> 34464 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/istanbul/sariyer/zekeriyakoy-mahallesi" class="soft-card p-4 rounded-xl flex items-center justify-between"><div><h3>Zekeriyak\xF6y Mahallesi</h3><p> 34450 </p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></a></div></div><div class="map-container"><div class="map-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon w-4 h-4 text-slate-400"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><h3>Konum</h3></div><div class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.014300500932!2d29.005789818837663!3d41.112612989461994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bf15c34913%3A0x19571e96a2eaf2f6!2zTWFzbGFrLCBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1773363121756!5m2!1str!2str" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="page-text"><h2>34475 nerenin posta kodu?</h2><p> 34475 posta kodu \u0130stanbul Sar\u0131yer Maslak Mahallesi&#39;ne aittir. </p></div><div class="page-text"><h2> Sar\u0131yer Maslak Mahallesi Posta Kodu Rehberi </h2><p> \u0130stanbul Sar\u0131yer Maslak Mahallesi&#39;ne ait g\xFCncel posta kodu bilgileri a\u015Fa\u011F\u0131da yer almaktad\u0131r. Adres formlar\u0131nda, kargo g\xF6nderilerinde ve resmi i\u015Flemlerde hata pay\u0131n\u0131 s\u0131f\u0131ra indirmek i\xE7in bu kodu kullanabilirsiniz. </p><br><p><strong>Maslak Mahallesi Posta Kodu: 34475</strong></p></div><div class="page-text"><h2> Adres Yaz\u0131m\u0131nda Posta Kodunun \xD6nemi </h2><p> Posta kodu, bir adresin en spesifik bile\u015Fenidir. Maslak Mahallesi i\xE7in tan\u0131mlanan 34475 numaras\u0131n\u0131 kullanmak \u015Fu avantajlar\u0131 sa\u011Flar: </p><ul><li><b>S\u0131ralama H\u0131z\u0131:</b> PTT ve \xF6zel kargo \u015Firketlerinin otomatik ayr\u0131\u015Ft\u0131rma makineleri, g\xF6nderinizi adresten \xF6nce posta koduna g\xF6re s\u0131n\u0131fland\u0131r\u0131r. </li><li><b>Yanl\u0131\u015F Teslimat \xD6nleme:</b> T\xFCrkiye genelinde ayn\u0131 ismi ta\u015F\u0131yan y\xFCzlerce mahalle bulunmaktad\u0131r. Do\u011Fru kod, g\xF6nderinizin ba\u015Fka bir \u015Fehirdeki ada\u015F mahalleye gitmesini engeller. </li><li><b>Dijital Do\u011Fruluk:</b> Bankac\u0131l\u0131k ve e-devlet sistemlerinde adres teyidi yap\u0131l\u0131rken sistemler genellikle bu kodu baz al\u0131r. </li></ul></div><div class="page-text"><h2>Konum Ve B\xF6lge Bilgileri</h2><p> Maslak Mahallesi, \u0130stanbul ilinin Sar\u0131yer il\xE7esine ba\u011Fl\u0131d\u0131r. Posta kodu yap\u0131s\u0131 incelendi\u011Finde ; </p><ol><li>\u0130lk 2 hane il plaka kodunu temsil eder.</li><li>Son 3 hane il\xE7e i\xE7erisindeki da\u011F\u0131t\u0131m b\xF6lgesini ve mahallesini kapsar.</li></ol></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/istanbul/sariyer/maslak-mahallesi/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BViDE4NY.mjs.map
