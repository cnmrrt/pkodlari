import { computed, toValue } from 'vue';
import { u as useRoute, a as useNuxtApp } from './server.mjs';
import { y as getRequestURL } from '../nitro/nitro.mjs';
import { u as useHead } from './v3-nkHqSgkI.mjs';

function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
function usePageSeo(options) {
  const route = useRoute();
  const requestUrl = useRequestURL();
  const canonicalUrl = computed(() => {
    var _a;
    return requestUrl.origin + (((_a = route.fullPath) == null ? void 0 : _a.startsWith("/")) ? route.fullPath : "/" + (route.fullPath || ""));
  });
  const resolvedTitle = computed(() => toValue(options.title) || "Posta Kodu Rehberi");
  const resolvedDesc = computed(() => toValue(options.description) || "T\xFCrkiye posta kodlar\u0131 rehberi");
  const ogImageUrl = options.image ? computed(() => {
    const img = options.image;
    return img.startsWith("http") ? img : requestUrl.origin + (img.startsWith("/") ? img : "/" + img);
  }) : computed(() => requestUrl.origin + "/favicon.svg");
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
//# sourceMappingURL=usePageSeo-BtDKcfYX.mjs.map
