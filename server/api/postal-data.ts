import fs from 'node:fs';
import path from 'node:path';
import type { PostalData } from '~/types';

// Memoized data to prevent re-parsing and re-transforming on every request
// This drastically reduces memory and CPU usage
let cachedPostalData: PostalData | null = null;

const slugify = (s: string) => {
    return String(s)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};

const findValue = (obj: any, possibleKeys: string[]) => {
    if (!obj || typeof obj !== 'object') return null;
    const normalize = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, '').replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m));
    const normalizedPossible = possibleKeys.map(normalize);
    for (const key of Object.keys(obj)) {
        if (normalizedPossible.includes(normalize(key))) return obj[key];
    }
    return null;
};

export default defineEventHandler(async () => {
    if (cachedPostalData) {
        return cachedPostalData;
    }

    try {
        const filePath = path.join(process.cwd(), 'public', 'pk.json');
        
        if (!fs.existsSync(filePath)) {
            throw createError({
                statusCode: 404,
                statusMessage: 'postal data file (pk.json) not found in public directory',
            });
        }

        const rawData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(rawData);
        const entries = Array.isArray(data) ? data : Object.values(data);

        const transformed: PostalData = {};

        entries.forEach((item: any) => {
            if (!item || typeof item !== 'object') return;
            
            const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
            const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
            const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
            const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK']);
            const map = findValue(item, ['harita', 'map', 'iframe', 'google_map', 'embed']);

            if (city) {
                const cityStr = String(city).trim().toLocaleUpperCase('tr');
                const distStr = String(dist || "MERKEZ").trim().toLocaleUpperCase('tr');
                const neighStr = String(neigh || "MERKEZ").trim().toLocaleUpperCase('tr');

                const citySlug = slugify(cityStr);
                const distSlug = slugify(distStr);
                const neighSlug = slugify(neighStr);

                const codeStr = String(zip || "00000").trim();
                const mapStr = map ? String(map) : undefined;

                if (!transformed[citySlug]) {
                    transformed[citySlug] = {
                        name: cityStr,
                        districts: {}
                    };
                }

                if (!transformed[citySlug].districts[distSlug]) {
                    transformed[citySlug].districts[distSlug] = {
                        name: distStr,
                        neighborhoods: {}
                    };
                }

                transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
                    name: neighStr,
                    zipCode: codeStr,
                    mapCode: mapStr
                };

                if (mapStr && !transformed[citySlug].mapCode) {
                    transformed[citySlug].mapCode = mapStr;
                }
                if (mapStr && !transformed[citySlug].districts[distSlug].mapCode) {
                    transformed[citySlug].districts[distSlug].mapCode = mapStr;
                }
            }
        });

        cachedPostalData = transformed;
        return transformed;
    } catch (error: any) {
        console.error('Error loading postal data:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to load postal data: ' + error.message,
        });
    }
});
