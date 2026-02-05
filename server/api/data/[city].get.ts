export default defineCachedEventHandler(async (event) => {
    const city = getRouterParam(event, 'city');
    if (!city) {
        throw createError({
            statusCode: 400,
            statusMessage: 'City parameter is required'
        });
    }

    try {
        const data = await $fetch(`https://pkodlari.com/data/${city}.json`);
        return data;
    } catch (error) {
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
