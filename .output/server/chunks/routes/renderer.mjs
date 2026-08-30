import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'vue-bundle-renderer/runtime';
import { j as joinRelativeURL, u as useRuntimeConfig, e as encodePath, a as defineRenderHandler, b as getQuery, c as createError, f as getRouteRules, h as getResponseStatusText, i as getResponseStatus, k as useNitroApp } from '../nitro/nitro.mjs';
import { renderToString } from 'vue/server-renderer';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'unhead/server';
import { stringify, uneval } from 'devalue';
import { walkResolver } from 'unhead/utils';
import { isRef, toValue, hasInjectionContext, inject, getCurrentScope, ref, watchEffect, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated } from 'vue';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'unhead/plugins';

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (instance) {
      return instance;
    }
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const scope = getCurrentScope();
  if (scope && !scope.active)
    return { patch() {
    }, dispose() {
    }, _poll() {
    } };
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[{"rel":"icon","type":"image/svg+xml","href":"/favicon.svg"}],"style":[{"innerHTML":"*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;margin:0;padding:0} body{font-family:'Roboto','Segoe UI',Arial,sans-serif;background-color:#f8fafc;color:#1e293b;-webkit-font-smoothing:antialiased} a{color:inherit;text-decoration:none} ul li{list-style:none;} input{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;} svg{display:block;vertical-align:middle} button{cursor:pointer;} .mono{font-family:'Roboto','Segoe UI',Arial,sans-serif} header{background-color:rgb(255, 255, 255);border-bottom-width:1px;border-color:rgb(226, 232, 240);position:sticky;top:0;z-index:50} .header-content{display:flex;max-width:64rem;margin-left:auto;margin-right:auto;padding-left:1.5rem;padding-right:1.5rem;height:4rem;align-items:center;justify-content:space-between} .header-logo-link{display:flex;align-items:center;gap:.5rem} .header-logo{background-color:rgb(15, 23, 42);padding:.375rem;color:rgb(255, 255, 255);border-radius:.5rem} .header-logo svg{width:1rem;height:1rem;} .header-logo-text{font-weight:700;color:rgb(15, 23, 42);letter-spacing:-.025em;} header nav{display:flex;font-size:.875rem;line-height:1.25rem;font-weight:500;color:rgb(100, 116, 139);gap:1.5rem;} header nav a{transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;} header nav a:hover{color:rgb(15, 23, 42);} .home-h1-container{text-align:center;margin-bottom:3rem;padding-top:2.25rem;padding-bottom:2.25rem;} .home-h1-container h1{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:rgb(15, 23, 42);letter-spacing:-.025em;margin-bottom:1rem;} .home-h1-container p{color:rgb(100, 116, 139);margin-bottom:2.5rem;} .home-search-bar-container{position:relative;width:100%;max-width:36rem;margin-left:auto;margin-right:auto;} .first-search-div{display:flex;align-items:center;gap:.75rem;padding-left:1rem;padding-right:1rem;padding-top:.75rem;padding-bottom:.75rem;background-color:rgb(255, 255, 255);border-width:1px;border-radius:.75rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;border-color:rgb(226, 232, 240);} .first-search-div svg{width:1.25rem;height:1.25rem;color:rgb(148, 163, 184);} .first-search-div input{width:100%;background-color:transparent;outline:2px solid transparent;outline-offset:2px;color:rgb(51, 65, 85);} .first-search-div input::placeholder{color:rgb(148, 163, 184);} .ring-2{box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.05);} .ring-slate-900/5{box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.05);} .border-slate-200{border-color:rgb(226, 232, 240)} .border-slate-400{border-color:rgb(148, 163, 184)} .search-detail-container{position:absolute;top:100%;left:0;right:0;margin-top:.5rem;background-color:rgb(255, 255, 255);border-width:1px;border-color:rgb(226, 232, 240);border-radius:.75rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);z-index:60;overflow:hidden;} .search-detail-container a{display:flex;align-items:center;gap:1rem;padding:1rem;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;} .search-detail-container a:hover{background-color:rgb(248, 250, 252);} .search-detail-container a .location-icon{color:rgb(148, 163, 184);} .search-detail-container a .location-icon svg{width:1rem;height:1rem;} .search-detail-container a .location-info div:first-child{font-weight:600;font-size:.875rem;line-height:1.25rem;color:rgb(15, 23, 42);} .search-detail-container a .location-info div:nth-child(2){font-size:10px;color:rgb(148, 163, 184);text-transform:uppercase;font-weight:500;} .search-detail-container a .location-info{flex:1 1 0%;} .search-zip-code{font-size:.75rem;line-height:1rem;font-weight:700;color:rgb(15, 23, 42);background-color:rgb(241, 245, 249);padding-left:.5rem;padding-right:.5rem;padding-top:.25rem;padding-bottom:.25rem;border-radius:.25rem;} .home-cities{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;} .home-cities a{background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,.02);transition:all .2s ease;padding:1rem;border-radius:.75rem;text-align:center;} @media (min-width:640px){.home-cities{grid-template-columns:repeat(3,minmax(0,1fr))}} @media (min-width:768px){.home-cities{grid-template-columns:repeat(4,minmax(0,1fr))}} @media (min-width:1024px){.home-cities{grid-template-columns:repeat(6,minmax(0,1fr))}} .home-cities a:hover{border-color:#cbd5e1;box-shadow:0 10px 15px -3px rgba(0,0,0,.05);transform:translateY(-2px);} .home-cities a div:first-child{font-weight:600;color:rgb(15, 23, 42);font-size:.875rem;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;} .home-cities a div:nth-child(2){font-size:10px;font-weight:700;color:rgb(148, 163, 184);margin-top:.25rem;text-transform:uppercase;letter-spacing:.05em;} .home-content-container{margin-top:4rem;max-width:56rem;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;margin-bottom:3rem;} .h-c-first-div{background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,.02);transition:all .2s ease;padding:2rem;border-radius:1rem;} .h-c-first-div h2{font-size:1.5rem;line-height:2rem;font-weight:700;color:rgb(15, 23, 42);margin-bottom:1.5rem;} .h-c-second-div{color:rgb(71, 85, 105);line-height:1.625;font-size:.875rem;line-height:1.25rem;} @media (min-width:640px){.h-c-second-div{font-size:1rem;line-height:1.5rem}} .cityTitleContainer{margin-bottom:2.5rem;display:flex;align-items:center;gap:1rem;} .cityTitleContainer a{color:rgb(148, 163, 184);transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;} .cityTitleContainer a:hover{color:rgb(15, 23, 42);} .cityTitleContainer a svg{width:1.25rem;height:1.25rem;} .cityTitleContainer h1{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:rgb(15, 23, 42);letter-spacing:-.025em;} .cityTitleContainer p{color:rgb(100, 116, 139);font-size:.875rem;line-height:1.25rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;} .districts{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1rem;} @media (min-width:640px){.districts{grid-template-columns:repeat(2,minmax(0,1fr))}} @media (min-width:1024px){.districts{grid-template-columns:repeat(3,minmax(0,1fr))}} .districts a{background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,.02);transition:all .2s ease;padding:1.5rem;border-radius:.75rem;display:flex;align-items:center;justify-content:space-between;} .districts a:hover{border-color:#cbd5e1;box-shadow:0 10px 15px -3px rgba(0,0,0,.05);transform:translateY(-2px);} .districts a div h3 {font-weight:700;color:rgb(15, 23, 42);font-size:1.125rem;line-height:1.75rem;} .districts a div p{font-size:.75rem;line-height:1rem;color: rgb(148, 163, 184);font-weight:500;text-transform:uppercase;letter-spacing:.05em;} .districts a svg {width:1.5rem;height:1.5rem;color:rgb(203, 213, 225);} .header{margin-bottom:2.5rem;display:flex;flex-direction:column;justify-content:space-between;gap:1.5rem;} @media (min-width:768px){.header{flex-direction:row;align-items:flex-end}} .districtTitleContainer{display:flex;align-items:center;gap:1rem;} .districtTitleContainer a{color:rgb(148, 163, 184); transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;} .districtTitleContainer a:hover{color:rgb(15, 23, 42);} .districtTitleContainer a svg{width:1.25rem;height:1.25rem;} .districtTitleContainer h1{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:rgb(15, 23, 42);letter-spacing:-.025em;} .districtTitleContainer p{color:rgb(100, 116, 139);font-size:.875rem;line-height:1.25rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;} .neighborhood-search-container{position:relative;width:100%;} @media (min-width:768px){.neighborhood-search-container{width:16rem}} .neighborhood-search-container svg{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);width:1rem;height:1rem;color:rgb(148, 163, 184);} .neighborhood-search-container input{width:100%;border-width:1px;padding-left:2.25rem;padding-top:.5rem;padding-bottom:.5rem;background-color:rgb(255, 255, 255);border-color:rgb(226, 232, 240);border-radius:.5rem;outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;font-size:.875rem;line-height:1.25rem} .neighborhood-search-container input:focus{border-color:rgb(148, 163, 184);} .neighborhoods-links-container a:hover{border-color:#cbd5e1;box-shadow:0 10px 15px -3px rgba(0,0,0,.05);transform:translateY(-2px);} .neighborhoods-links-container a:hover svg{color:rgb(100, 116, 139);} .mahalle-name{min-width:0;padding-right:1rem;} .mahalle-name h4{font-weight:600;color:rgb(15, 23, 42);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:1rem;line-height:1.5rem} .mahalle-name p{font-size:10px;color:rgb(148, 163, 184);font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-top:.125rem;} .mahalle-zip-code{display:flex;align-items:center;gap:.75rem;} .mahalle-zip-code span{font-weight:700;color:rgb(15, 23, 42);background-color:rgb(241, 245, 249);padding-top:.375rem;padding-bottom:.375rem;padding-left:.75rem;padding-right:.75rem;border-radius:.5rem;font-size:.875rem;line-height:1.25rem;} .mahalle-zip-code svg{width:1rem;height:1rem;color:rgb(203, 213, 225);transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;} .breadcrumb{display:flex;align-items:center;gap:.5rem;font-size:.75rem;line-height:1rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:2rem;overflow-x:auto;white-space:nowrap;padding-bottom:.5rem;color:rgb(148, 163, 184)} .breadcrumb svg{width:.75rem;height:.75rem;} .breadcrumb a:hover{color:rgb(15, 23, 42);} main{max-width:64rem;margin-left:auto;margin-right:auto;padding-left:1.5rem;padding-right:1.5rem;padding-top:2rem;padding-bottom:2rem;} .main-content-neighborhood{transition-duration:500ms;max-width:42rem;margin-left:auto;margin-right:auto;} .main-info-container{background-color:rgb(255, 255, 255);border-width:1px;border-color:rgb(226, 232, 240);border-radius:2rem;padding:2rem;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);} @media (min-width:768px){.main-info-container{padding:3rem}} .main-info-title-container{text-align:center;margin-bottom:2.5rem;} .main-info-logo{display:inline-flex;padding:.75rem;background-color:rgb(248, 250, 252);border-radius:1rem;margin-bottom:1.5rem;} .main-info-logo svg{color:rgb(15, 23, 42);width:1.5rem;height:1.5rem;} .main-info-title-container h1{font-size:2.25rem;line-height:2.5rem;font-weight:700;color:rgb(15, 23, 42);margin-bottom:.5rem;letter-spacing:-.025em;} .main-info-subtitle{color:rgb(100, 116, 139);font-weight:500;text-transform:uppercase;letter-spacing:.1em;font-size:.875rem;line-height:1.25rem;} .post-code-view-container{background-color:rgb(248, 250, 252);border-radius:1.5rem;padding:2rem;text-align:center;position:relative;overflow:hidden;} .sub-post-code-view-container{position:relative;z-index:10;} .sub-post-code-view-container p{font-size:.75rem;line-height:1rem;font-weight:700;color:rgb(148, 163, 184);text-transform:uppercase;letter-spacing:.3em;margin-bottom:1rem;} .postCode{font-family:'Roboto','Segoe UI',Arial,sans-serif;font-size:4.5rem;line-height:1;font-weight:700;color:rgb(15, 23, 42);margin-bottom:2rem;} .copy-btn{display:flex;align-items:center;gap:.5rem;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:1rem;border-radius:1rem;font-weight:700;font-size:.875rem;line-height:1.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;color:rgb(255, 255, 255);} .copy-btn.active:scale-95{transform:scale(0.95);} .green-btn{background-color:rgb(22, 163, 74);} .black-btn{background-color:rgb(15, 23, 42);} .black-btn:hover{background-color:rgb(30, 41, 59);} .copy-btn svg{width:1rem;height:1rem;} .btn-bg{position:absolute;bottom:-2.5rem;right:-2.5rem;font-size:12rem;font-weight:900;color:rgba(226, 232, 240, 0.5);-webkit-user-select:none;user-select:none;} .share-btn{display:flex;justify-content:center;margin-top:2rem;} .share-btn button{display:flex;align-items:center;gap:.5rem;color:rgb(148, 163, 184);transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;font-weight:700;font-size:.75rem;line-height:1rem;text-transform:uppercase;letter-spacing:.1em;} .share-btn button:hover{color:rgb(15, 23, 42);} .share-btn button svg{width:1rem;height:1rem;} .other-neighborhoods{margin-top:2.5rem;} .other-neighborhoods h2{font-size:1.25rem;line-height:1.75rem;font-weight:700;color:rgb(15, 23, 42);margin-bottom:1rem;} .neighborhoods-links-container{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1rem;} @media (min-width:640px){.neighborhoods-links-container{grid-template-columns:repeat(2,minmax(0,1fr))}} .neighborhoods-links-container a{background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,.02);transition:all .2s ease;padding:1rem;border-radius:.75rem;display:flex;align-items:center;justify-content:space-between;} .neighborhoods-links-container a h3{font-weight:600;color:rgb(15, 23, 42);font-size:.875rem;line-height:1.25rem;} .neighborhoods-links-container a p{font-size:10px;font-weight:700;color:rgb(148, 163, 184);letter-spacing:.05em;margin-top:.25rem;} .neighborhoods-links-container a svg{width:1.25rem;height:1.25rem;color:rgb(203, 213, 225);} .page-text{margin-top:2rem;text-align:center;} .page-text h2{font-size:1.25rem;line-height:1.75rem; font-weight:700; color:rgb(15, 23, 42); margin-bottom:.5rem;} .page-text p{color:rgb(71, 85, 105); line-height:1.5;} .page-text ul{margin-top:1rem; color:rgb(71, 85, 105);line-height:1.5;} .map-container{margin-top:3rem; background-color:rgb(255, 255, 255); border-width:1px;border-color:rgb(226, 232, 240);border-radius:2rem;padding:1rem;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);overflow:hidden;} @media (min-width:768px){.map-container{padding:1.5rem}} .map-title{margin-bottom:1rem;display:flex;align-items:center;gap:.5rem;padding-left:.5rem;padding-right:.5rem;} .map-title svg{width:1rem;height:1rem;color:rgb(148, 163, 184);} .map-title h3{font-weight:700;color:rgb(15, 23, 42);font-size:.875rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:.025em;} .map{width:100%;aspect-ratio:16 / 9;border-radius:1rem;overflow:hidden;} footer{margin-top:5rem;padding-top:3rem;padding-bottom:3rem;text-align:center;color:rgb(148, 163, 184);font-size:.75rem;line-height:1rem;font-weight:500;border-top-width:1px;border-color:rgb(226, 232, 240);}"}],"script":[{"innerHTML":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PVZMM8PF');"}],"noscript":[{"innerHTML":"<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-PVZMM8PF\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>","tagPosition":"bodyOpen"}],"htmlAttrs":{"lang":"tr"},"title":"Posta Kodu Rehberi"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

function baseURL() {
	
	return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
	
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('../build/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getPrecomputedDependencies = () => import('../build/client.precomputed.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);

const getSSRRenderer = lazyCachedFunction(async () => {
	
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	
	const precomputed = await getPrecomputedDependencies();
	
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: undefined,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});

const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = await getPrecomputedDependencies();
	// @ts-expect-error virtual file
	const spaTemplate = await import('../virtual/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "").then((r) => {
		{
			return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
		}
	});
	
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: undefined,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => import('../build/styles.mjs').then((r) => r.default || r));

function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}

function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) {
		return encodePath(path);
	}
	return encodePath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function createSSRContext(event) {
	const url = encodeEventPath(event.path);
	const ssrContext = {
		url,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

const entryIds = [];

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const handler = defineRenderHandler((event) => {
	
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	return renderRoute(event, ssrError);
});
async function renderRoute(event, ssrError) {
	const nitroApp = useNitroApp();
	
	const ssrContext = createSSRContext(event);
	
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		setSSRError(ssrContext, ssrError);
	}
	
	const routeOptions = getRouteRules(event);
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	
	!ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	
	const renderer = await getRenderer(ssrContext);
	{
		for (const id of entryIds) {
			ssrContext.modules.add(id);
		}
	}
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		
		
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	
	
	const inlinedStyles = !ssrContext["~renderResponse"] && !ssrContext._renderResponse && true ? await renderInlineStyles(ssrContext.modules ?? []) : [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	if (ssrContext["~preloadManifest"] && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			fetchpriority: "low",
			crossorigin: "anonymous",
			href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`)
		}] }, {
			...headEntryOptions,
			tagPriority: "low"
		});
	}
	
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		
		
		
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		
		
		
		const dependencyOptions = ssrContext["~lazyHydratedModules"]?.size ? { exclude: ssrContext["~lazyHydratedModules"] } : undefined;
		const stylesheetHrefs = new Set(link.map((l) => l.href));
		ssrContext.head.push({ link: [...getPreloadLinks(ssrContext, renderer.rendererContext, dependencyOptions), ...getPrefetchLinks(ssrContext, renderer.rendererContext, dependencyOptions)].filter((l) => !stylesheetHrefs.has(l.href)) }, headEntryOptions);
		
		ssrContext.head.push({ script: renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			
			
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [_rendered.html, APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

export { baseURL as b, headSymbol as h, renderer as r, useHead as u };
//# sourceMappingURL=renderer.mjs.map
