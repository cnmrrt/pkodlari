import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export default defineCachedEventHandler(async () => {
    const dataPath = resolve(process.cwd(), 'public/data/es.json');
    return JSON.parse(await readFile(dataPath, 'utf8'));
}, {
    maxAge: 60 * 60,
    name: 'spanish-data'
});
