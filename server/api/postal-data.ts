import { defineEventHandler } from 'h3'
import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
    // In production, we can use the public directory or just read the file from disk if we know where it is.
    // However, a simple way is to fetch it if we have a URL, or read the local file.
    // Since it's in public/pk.json, we can try to find it on disk.

    // For universal compatibility, if we are on the server, we might want to read the file.
    // In Nuxt, we can use process.cwd() or similar.

    const filePath = path.join(process.cwd(), 'public', 'pk.json');

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Fallback or handle error
    throw createError({
        statusCode: 404,
        statusMessage: 'Postal data not found',
    });
});
