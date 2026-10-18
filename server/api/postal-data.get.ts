import { readFile } from 'node:fs/promises';

export default defineCachedEventHandler(async (event) => {
    const collectionPath = new URL('../../public/data/collection.json', import.meta.url);
    return JSON.parse(await readFile(collectionPath, 'utf8'));
}, {
    maxAge: 60 * 60, // 1 hour
    name: 'postal-data'
});
