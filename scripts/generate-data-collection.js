import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const OUTPUT_FILE = path.join(DATA_DIR, 'collection.json');

const itemKey = (item) =>
    [item.il, item.ilce, item.mahalle, String(item.postaKodu ?? '')]
        .join('|')
        .toLocaleLowerCase('tr');

const collectJsonFiles = (dir) => {
    const files = [];

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...collectJsonFiles(fullPath));
            continue;
        }

        if (!entry.name.endsWith('.json')) continue;
        if (fullPath === OUTPUT_FILE) continue;
        if (entry.name === 'all.json') continue;

        files.push(fullPath);
    }

    return files.sort();
};

const readPostalArray = (filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8').trim();
    if (!raw) return [];

    const data = JSON.parse(raw);
    if (!Array.isArray(data)) {
        throw new Error(`Expected an array in ${filePath}`);
    }

    return data;
};

const generateDataCollection = () => {
    console.log(`Reading JSON files from ${DATA_DIR}...`);

    const files = collectJsonFiles(DATA_DIR);
    const seen = new Set();
    const collection = [];

    for (const filePath of files) {
        const records = readPostalArray(filePath);
        let added = 0;

        for (const item of records) {
            if (!item || typeof item !== 'object' || !item.il) continue;

            const key = itemKey(item);
            if (seen.has(key)) continue;

            seen.add(key);
            collection.push(item);
            added++;
        }

        console.log(`  ${path.relative(DATA_DIR, filePath)}: +${added}`);
    }

    collection.sort((a, b) => {
        const city = a.il.localeCompare(b.il, 'tr');
        if (city !== 0) return city;

        const district = String(a.ilce || '').localeCompare(String(b.ilce || ''), 'tr');
        if (district !== 0) return district;

        return String(a.mahalle || '').localeCompare(String(b.mahalle || ''), 'tr');
    });

    // Minified output by removing formatting arguments (null, 2)
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(collection));

    console.log(`\nWrote ${collection.length} records to ${path.relative(path.join(__dirname, '..'), OUTPUT_FILE)}`);
    console.log(`Source files: ${files.length}`);
};

try {
    generateDataCollection();
} catch (error) {
    console.error('Failed to generate data collection:', error.message);
    process.exit(1);
}