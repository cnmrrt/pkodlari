import { computed, toValue } from 'vue';
import { u as useRoute, b as useNuxtApp } from './server.mjs';
import { u as useHead } from './composables-DS4h4PXI.mjs';
import { A as getRequestURL } from '../nitro/nitro.mjs';

function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
function usePageSeo(options) {
  const route = useRoute();
  useRequestURL();
  const domain = "https://pkodlari.com";
  const canonicalUrl = computed(() => domain + (route.fullPath?.startsWith("/") ? route.fullPath : "/" + (route.fullPath || "")));
  const resolvedTitle = computed(() => toValue(options.title) || "Posta Kodu Rehberi");
  const resolvedDesc = computed(() => toValue(options.description) || "Türkiye posta kodları rehberi");
  const ogImageUrl = options.image ? computed(() => {
    const img = options.image;
    return img.startsWith("http") ? img : domain + (img.startsWith("/") ? img : "/" + img);
  }) : computed(() => domain + "/favicon.svg");
  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
    meta: [
      { property: "og:title", content: resolvedTitle },
      { property: "og:description", content: resolvedDesc },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Posta Kodu Rehberi" },
      { property: "og:image", content: ogImageUrl }
    ]
  });
}

export { usePageSeo as u };
//# sourceMappingURL=usePageSeo-CpBbXdKY.mjs.map
