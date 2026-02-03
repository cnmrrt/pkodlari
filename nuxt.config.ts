// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/sitemap'],
    site: {
        url: 'https://pkodlari.com',
        name: 'Posta Kodu Rehberi',
    },
    sitemap: {
        sources: [
            '/api/sitemap-urls'
        ],
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Posta Kodu Rehberi',
            script: [
                { src: 'https://cdn.tailwindcss.com' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap' }
            ],
            style: [
                {
                    innerHTML: `
            body { 
                font-family: 'Inter', sans-serif;
                background-color: #f8fafc;
                color: #1e293b;
                -webkit-font-smoothing: antialiased;
            }
            .mono { font-family: 'JetBrains Mono', monospace; }
            .soft-card {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                box-shadow: 0 1px 3px rgba(0,0,0,0.02);
                transition: all 0.2s ease;
            }
            .soft-card:hover {
                border-color: #cbd5e1;
                box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
                transform: translateY(-2px);
            }
          `
                }
            ]
        }
    }
})
