import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    const response = await $fetch<any>('/api/postal-data');

    const urls: any[] = [];
    const entries = Array.isArray(response) ? response : Object.values(response);

    // We need the slugify logic here. Since it's a server route, we can import from utils if configured, 
    // or just redefine it for simplicity here to avoid ESM/CJS import issues in Nitro if they arise.
    const slugify = (s: string) => {
        return String(s)
            .toLocaleLowerCase('tr')
            .replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
    };

    const cities = new Set<string>();
    const districts = new Set<string>();
    const neighborhoods = new Set<string>();

    const findValue = (obj: any, possibleKeys: string[]) => {
        if (!obj || typeof obj !== 'object') return null;
        const normalize = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, '').replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m));
        const normalizedPossible = possibleKeys.map(normalize);
        for (const key of Object.keys(obj)) {
            if (normalizedPossible.includes(normalize(key))) return obj[key];
        }
        return null;
    };

    entries.forEach((item: any) => {
        if (!item || typeof item !== 'object') return;
        const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
        const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
        const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);

        if (city) {
            const citySlug = slugify(String(city).trim());
            const distSlug = slugify(String(dist || "MERKEZ").trim());
            const neighSlug = slugify(String(neigh || "MERKEZ").trim());

            cities.add(`/${citySlug}`);
            districts.add(`/${citySlug}/${distSlug}`);
            neighborhoods.add(`/${citySlug}/${distSlug}/${neighSlug}`);
        }
    });

    // Cities
    cities.forEach(url => urls.push({ loc: url, changefreq: 'monthly', priority: 0.8 }));
    // Districts
    districts.forEach(url => urls.push({ loc: url, changefreq: 'monthly', priority: 0.6 }));
    // Neighborhoods
    neighborhoods.forEach(url => urls.push({ loc: url, changefreq: 'monthly', priority: 0.5 }));

    return urls;
});
