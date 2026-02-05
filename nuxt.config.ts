// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Posta Kodu Rehberi',
            script: [
                { src: 'https://cdn.tailwindcss.com' },
                {
                    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVZMM8PF');`
                }
            ],
            noscript: [
                {
                    innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVZMM8PF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    tagPosition: 'bodyOpen'
                }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
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
