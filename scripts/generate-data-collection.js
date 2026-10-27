import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const COLLECTION_FILE = path.join(DATA_DIR, 'collection.json');

const itemKey = (item) =>
    [item.il, item.ilce, item.mahalle, String(item.postaKodu ?? '')]
        .join('|')
        .toLocaleLowerCase('tr');

const generateCityData = () => {
    console.log(`Reading postal data from ${COLLECTION_FILE}`);
    const sourceData = JSON.parse(fs.readFileSync(COLLECTION_FILE, 'utf8'));
    if (!Array.isArray(sourceData) || sourceData.length === 0) {
        throw new Error('Postal data source must return a non-empty JSON array');
    }

    const seen = new Set();
    const collection = [];
    for (const item of sourceData) {
        if (!item || typeof item !== 'object' || !item.il) continue;
        const key = itemKey(item);
        if (seen.has(key)) continue;
        seen.add(key);
        collection.push(item);
    }

    if (collection.length === 0) {
        throw new Error('Postal data source contains no records with a city name');
    }

    collection.sort((a, b) => {
        const city = String(a.il).localeCompare(String(b.il), 'tr');
        if (city !== 0) return city;

        const district = String(a.ilce || '').localeCompare(String(b.ilce || ''), 'tr');
        if (district !== 0) return district;

        return String(a.mahalle || '').localeCompare(String(b.mahalle || ''), 'tr');
    });

    fs.writeFileSync(COLLECTION_FILE, JSON.stringify(collection));
    console.log(`\nWrote ${collection.length} records to ${path.relative(path.join(__dirname, '..'), COLLECTION_FILE)}`);
};

try {
    generateCityData();
} catch (error) {
    console.error('Failed to generate data collection:', error.message);
    process.exitCode = 1;
}