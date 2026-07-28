export default defineCachedEventHandler(async (event) => {
    // const data = await $fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/postakodlari.json');
    const data = await $fetch('https://pkodlari.com/pk.json');
    return data;
}, {
    maxAge: 60 * 60, // 1 hour
    name: 'postal-data'
});
