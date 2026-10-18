<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ywvnc4Vvt4_KyQz8hR3R15je3g09bdd3

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

The GitHub Actions workflow builds the static site from
`public/data/collection.json` and deploys `.output/public` to GitHub Pages.
Enable **GitHub Actions** as the Pages build and deployment source in repository settings.
The workflow configures Nuxt's base URL for project sites as well as custom domains.
Content pages use extensionless routes. GitHub Pages redirects directory URLs to a trailing slash; the page removes that slash from the address bar after loading. The redirect itself cannot be disabled on GitHub Pages.
