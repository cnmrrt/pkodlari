import { defineSitemapEventHandler } from '#imports'
import type { PostalData } from '~/types'

export default defineSitemapEventHandler(async () => {
    // Fetch the pre-transformed and cached data from our optimized API
    // This avoids redundant slugification and processing during sitemap generation
    const postalData = await $fetch<PostalData>('/api/postal-data');

    const urls: { loc: string, changefreq: 'monthly', priority: number }[] = [];

    Object.entries(postalData).forEach(([citySlug, cityItem]) => {
        // Add City URL
        urls.push({ loc: `/${citySlug}`, changefreq: 'monthly', priority: 0.8 });

        Object.entries(cityItem.districts).forEach(([distSlug, distItem]) => {
            // Add District URL
            urls.push({ loc: `/${citySlug}/${distSlug}`, changefreq: 'monthly', priority: 0.6 });

            Object.keys(distItem.neighborhoods).forEach((neighSlug) => {
                // Add Neighborhood URL
                urls.push({ loc: `/${citySlug}/${distSlug}/${neighSlug}`, changefreq: 'monthly', priority: 0.5 });
            });
        });
    });

    return urls;
});
