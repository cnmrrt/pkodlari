export default defineCachedEventHandler(async (event) => {
    const data = await $fetch('https://pkodlari.com/data/collection.json');
    return data;
}, {
    maxAge: 60 * 60, // 1 hour
    name: 'postal-data'
});
