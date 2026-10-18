import { readFile } from 'node:fs/promises';

export default defineCachedEventHandler(async (event) => {
    const city = getRouterParam(event, 'city');
    if (!city || !/^[a-z0-9-]+$/.test(city)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid city parameter'
        });
    }

    try {
        const cityDataPath = new URL(`../../../public/data/cities/${city}.json`, import.meta.url);
        return JSON.parse(await readFile(cityDataPath, 'utf8'));
    } catch (error) {
        if (
            typeof error !== 'object' ||
            error === null ||
            !('code' in error) ||
            error.code !== 'ENOENT'
        ) {
            throw error;
        }

        throw createError({
            statusCode: 404,
            statusMessage: 'City data not found'
        });
    }
}, {
    maxAge: 60 * 60, // 1 hour
    name: 'city-data',
    getKey: (event) => `city-data-${getRouterParam(event, 'city')}`
});
