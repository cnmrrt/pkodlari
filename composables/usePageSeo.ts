import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export function usePageSeo(options: {
  title: MaybeRefOrGetter<string>;
  description: MaybeRefOrGetter<string>;
  image?: string;
}) {
  const route = useRoute();
  const requestUrl = useRequestURL();
  const canonicalUrl = computed(() => requestUrl.origin + (route.fullPath?.startsWith('/') ? route.fullPath : '/' + (route.fullPath || '')));

  const resolvedTitle = computed(() => toValue(options.title) || 'Posta Kodu Rehberi');
  const resolvedDesc = computed(() => toValue(options.description) || 'Türkiye posta kodları rehberi');
  const ogImageUrl = options.image
    ? computed(() => {
        const img = options.image!;
        return img.startsWith('http') ? img : requestUrl.origin + (img.startsWith('/') ? img : '/' + img);
      })
    : computed(() => requestUrl.origin + '/favicon.svg');

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    meta: [
      { property: 'og:title', content: resolvedTitle },
      { property: 'og:description', content: resolvedDesc },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Posta Kodu Rehberi' },
      { property: 'og:image', content: ogImageUrl },
    ],
  });
}
