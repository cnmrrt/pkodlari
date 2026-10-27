import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { slugify } from '~/utils/slugify';

let collectionRequest: Promise<Array<{ il?: string }>> | undefined;

export default defineCachedEventHandler(async (event) => {
    const city = getRouterParam(event, 'city');
    if (!city || !/^[a-z0-9-]+$/.test(city)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid city parameter'
        });
    }

    try {
        collectionRequest ??= readFile(resolve(process.cwd(), 'public/data/collection.json'), 'utf8')
            .then((contents) => JSON.parse(contents))
            .catch((error) => {
                collectionRequest = undefined;
                throw error;
            });
        const collection = await collectionRequest;
        const cityData = collection.filter((row) => slugify(row.il || '') === city);
        if (cityData.length === 0) throw createError({
            statusCode: 404,
            statusMessage: 'City data not found'
        });
        return cityData;
    } catch (error) {
        if (
            typeof error === 'object' &&
            error !== null &&
            'statusCode' in error &&
            error.statusCode === 404
        ) {
            throw error;
        }

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
