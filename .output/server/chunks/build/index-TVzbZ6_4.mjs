import { _ as __nuxt_component_0$1, t as titleCase } from './server.mjs';
import { defineComponent, inject, computed, unref, mergeProps, ref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Loader2, Search, Map, Building2, MapPin } from 'lucide-vue-next';
import { u as useHead } from './composables-DS4h4PXI.mjs';
import { u as usePageSeo } from './usePageSeo-Dfhdqak8.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import 'perfect-debounce';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const query = ref("");
    const isFocused = ref(false);
    const results = computed(() => {
      if (!props.data || query.value.length < 2) return [];
      const lowerQuery = query.value.toLocaleLowerCase("tr");
      const items = [];
      Object.entries(props.data).forEach(([citySlug, cityItem]) => {
        if (cityItem.name.toLocaleLowerCase("tr").includes(lowerQuery)) {
          items.push({
            city: cityItem.name,
            citySlug,
            district: "",
            districtSlug: "",
            neighborhood: "",
            neighborhoodSlug: "",
            zipCode: "",
            type: "city"
          });
        }
        Object.entries(cityItem.districts).forEach(([distSlug, distItem]) => {
          if (distItem.name.toLocaleLowerCase("tr").includes(lowerQuery)) {
            items.push({
              city: cityItem.name,
              citySlug,
              district: distItem.name,
              districtSlug: distSlug,
              neighborhood: "",
              neighborhoodSlug: "",
              zipCode: "",
              type: "district"
            });
          }
          Object.entries(distItem.neighborhoods).forEach(([neighSlug, neighItem]) => {
            if (neighItem.name.toLocaleLowerCase("tr").includes(lowerQuery) || neighItem.zipCode.includes(query.value)) {
              items.push({
                city: cityItem.name,
                citySlug,
                district: distItem.name,
                districtSlug: distSlug,
                neighborhood: neighItem.name,
                neighborhoodSlug: neighSlug,
                zipCode: neighItem.zipCode,
                type: "neighborhood"
              });
            }
          });
        });
      });
      return items.slice(0, 6);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full max-w-xl mx-auto" }, _attrs))}><div class="${ssrRenderClass([isFocused.value ? "ring-2 ring-slate-900/5 border-slate-400" : "border-slate-200", "flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all"])}">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input type="text" placeholder="İl, ilçe veya mahalle ismi yazın..." class="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"${ssrRenderAttr("value", query.value)}></div>`);
      if (isFocused.value && query.value.length >= 2) {
        _push(`<div class="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-[60] overflow-hidden">`);
        if (results.value.length > 0) {
          _push(`<div class="divide-y divide-slate-100"><!--[-->`);
          ssrRenderList(results.value, (res, i) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: i,
              to: res.type === "city" ? `/${res.citySlug}` : res.type === "district" ? `/${res.citySlug}/${res.districtSlug}` : `/${res.citySlug}/${res.districtSlug}/${res.neighborhoodSlug}`,
              class: "flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="text-slate-400"${_scopeId}>`);
                  if (res.type === "city") {
                    _push2(ssrRenderComponent(unref(Map), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  } else if (res.type === "district") {
                    _push2(ssrRenderComponent(unref(Building2), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  }
                  _push2(`</div><div class="flex-1"${_scopeId}><div class="font-semibold text-sm text-slate-900"${_scopeId}>${ssrInterpolate(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.neighborhood || res.district || res.city))}</div><div class="text-[10px] text-slate-400 uppercase font-medium"${_scopeId}>${ssrInterpolate([("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.city), ("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.district)].filter(Boolean).join(" / "))}</div></div>`);
                  if (res.zipCode) {
                    _push2(`<div class="mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded"${_scopeId}>${ssrInterpolate(res.zipCode)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "text-slate-400" }, [
                      res.type === "city" ? (openBlock(), createBlock(unref(Map), {
                        key: 0,
                        class: "w-4 h-4"
                      })) : res.type === "district" ? (openBlock(), createBlock(unref(Building2), {
                        key: 1,
                        class: "w-4 h-4"
                      })) : (openBlock(), createBlock(unref(MapPin), {
                        key: 2,
                        class: "w-4 h-4"
                      }))
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "font-semibold text-sm text-slate-900" }, toDisplayString(("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.neighborhood || res.district || res.city)), 1),
                      createVNode("div", { class: "text-[10px] text-slate-400 uppercase font-medium" }, toDisplayString([("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.city), ("titleCase" in _ctx ? _ctx.titleCase : unref(titleCase))(res.district)].filter(Boolean).join(" / ")), 1)
                    ]),
                    res.zipCode ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded"
                    }, toDisplayString(res.zipCode), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="p-8 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "SearchBar" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const postalData = inject("postalData");
    useHead({
      title: "Türkiye Posta Kodları",
      meta: [{ name: "description", content: "Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın." }]
    });
    usePageSeo({ title: "Türkiye Posta Kodları", description: "Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın." });
    computed(() => {
      if (!postalData?.value) return [];
      return Object.values(postalData.value).sort((a, b) => a.name.localeCompare(b.name, "tr"));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchBar = __nuxt_component_0;
      if (!unref(postalData)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 flex flex-col items-center justify-center" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(Loader2), { class: "w-8 h-8 text-slate-400 animate-spin" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-in fade-in duration-500" }, _attrs))}><div class="text-center mb-12 py-9"><h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Türkiye Posta Kodları</h1><p class="text-slate-500 mb-10">Hızlıca ilçe ve mahalle posta kodlarını sorgulayın.</p>`);
        _push(ssrRenderComponent(_component_SearchBar, { data: unref(postalData) }, null, _parent));
        _push(`</div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><a href="/adana" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Adana</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">15 İLÇE </div></a><a href="/adiyaman" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Adıyaman</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/afyonkarahisar" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Afyonkarahisar</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">18 İLÇE </div></a><a href="/agri" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Ağrı</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/amasya" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Amasya</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/ankara" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Ankara</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">25 İLÇE </div></a><a href="/antalya" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Antalya</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">19 İLÇE </div></a><a href="/artvin" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Artvin</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/aydin" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Aydın</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div></a><a href="/balikesir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Balıkesir</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">20 İLÇE </div></a><a href="/bilecik" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bilecik</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/bingol" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bingöl</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/bitlis" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bitlis</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/bolu" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bolu</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/burdur" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Burdur</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">11 İLÇE </div></a><a href="/bursa" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bursa</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">10 İLÇE </div></a><a href="/canakkale" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Çanakkale</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 İLÇE </div></a><a href="/cankiri" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Çankırı</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 İLÇE </div></a><a href="/corum" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Çorum</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">14 İLÇE </div></a><a href="/denizli" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Denizli</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">19 İLÇE </div></a><a href="/diyarbakir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Diyarbakır</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div></a><a href="/edirne" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Edirne</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/elazig" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Elazığ</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">11 İLÇE </div></a><a href="/erzincan" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Erzincan</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/erzurum" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Erzurum</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">20 İLÇE </div></a><a href="/eskisehir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Eskişehir</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">14 İLÇE </div></a><a href="/gaziantep" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Gaziantep</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/giresun" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Giresun</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">16 İLÇE </div></a><a href="/gumushane" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Gümüşhane</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">5 İLÇE </div></a><a href="/hakkari" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Hakkari</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">5 İLÇE </div></a><a href="/hatay" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Hatay</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div></a><a href="/isparta" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Isparta</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div></a><a href="/mersin" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Mersin</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div></a><a href="/istanbul" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">İstanbul</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">39 İLÇE </div></a><a href="/izmir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">İzmir</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">30 İLÇE </div></a><a href="/kars" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kars</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/kastamonu" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kastamonu</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">20 İLÇE </div></a><a href="/kayseri" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kayseri</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">16 İLÇE </div></a><a href="/kirklareli" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kırklareli</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/kirsehir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kırşehir</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/kocaeli" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kocaeli</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 İLÇE </div></a><a href="/konya" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Konya</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">20 İLÇE </div></a><a href="/kutahya" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kütahya</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div></a><a href="/malatya" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Malatya</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div></a><a href="/manisa" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Manisa</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div></a><a href="/kahramanmaras" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kahramanmaraş</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div></a><a href="/mardin" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Mardin</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">10 İLÇE </div></a><a href="/mugla" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Muğla</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div></a><a href="/mus" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Muş</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/nevsehir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Nevşehir</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/nigde" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Niğde</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/ordu" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Ordu</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">19 İLÇE </div></a><a href="/rize" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Rize</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 İLÇE </div></a><a href="/sakarya" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Sakarya</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">16 İLÇE </div></a><a href="/samsun" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Samsun</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div></a><a href="/siirt" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Siirt</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/sivas" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Sivas</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div></a><a href="/tekirdag" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Tekirdağ</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">11 İLÇE </div></a><a href="/tokat" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Tokat</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/trabzon" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Trabzon</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">18 İLÇE </div></a><a href="/usak" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Uşak</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/van" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Van</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div></a><a href="/yozgat" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Yozgat</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">14 İLÇE </div></a><a href="/zonguldak" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Zonguldak</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/aksaray" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Aksaray</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a><a href="/bayburt" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bayburt</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">3 İLÇE </div></a><a href="/karaman" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Karaman</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/kirikkale" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kırıkkale</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div></a><a href="/batman" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Batman</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/sirnak" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Şırnak</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/bartin" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Bartın</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">4 İLÇE </div></a><a href="/ardahan" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Ardahan</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/igdir" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Iğdır</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">4 İLÇE </div></a><a href="/yalova" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Yalova</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/karabuk" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Karabük</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div></a><a href="/kilis" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Kilis</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">4 İLÇE </div></a><a href="/osmaniye" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Osmaniye</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div></a><a href="/duzce" class="soft-card p-4 rounded-xl text-center"><div class="font-semibold text-slate-900 text-sm truncate">Düzce</div><div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div></a></div><div class="mt-16 max-w-4xl mx-auto px-4 mb-12"><div class="soft-card p-8 rounded-2xl"><h2 class="text-2xl font-bold text-slate-900 mb-6">Posta Kodu Nedir ve Neden Önemlidir?</h2><div class="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base"><p> Posta kodu, mektup, kargo ve diğer gönderilerin adrese daha hızlı ve hatasız bir şekilde ulaştırılmasını sağlamak amacıyla kullanılan, rakam veya harflerden oluşan bir kodlama sistemidir. Türkiye&#39;de posta kodları 5 basamaklı sayısal değerlerden oluşur. Bu sistemde ilk iki rakam ilin plaka kodunu temsil ederken, diğer üç rakam ise dağıtım bölgesini, yani ilçe ve mahalle detaylarını belirtir. </p><div><h3 class="text-lg font-semibold text-slate-800 mb-3">Posta Kodu Kullanımının Avantajları</h3><ul class="space-y-2"><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Hızlı ve Doğru Teslimat:</strong> Gönderilerin ayrıştırma merkezlerinde otomatik sistemlerle işlenmesini sağlar, böylece insan hatası en aza iner ve teslimat süresi kısalır.</span></li><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Adres Karışıklığını Önleme:</strong> Türkiye genelinde aynı isme sahip birçok mahalle ve sokak bulunmaktadır. Posta kodu, bu benzerliklerden kaynaklanabilecek yanlış teslimatların önüne geçer.</span></li><li class="flex items-start"><span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span><span><strong class="text-slate-700">Verimlilik:</strong> Lojistik ve kargo firmalarının operasyonel süreçlerini optimize etmesine yardımcı olur, bu da genel hizmet kalitesini artırır.</span></li></ul></div><p> Sitemiz aracılığıyla Türkiye&#39;nin 81 iline, tüm ilçelerine ve mahallelerine ait güncel posta kodu bilgilerine ücretsiz ve hızlı bir şekilde ulaşabilirsiniz. Aradığınız konumu bulmak için il listesini kullanabilir veya ana sayfadaki arama kutusundan doğrudan sorgulama yapabilirsiniz. </p><p>Posta kodlarını <a href="https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama" rel="nofollow" target="_blank">https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama</a> üzerinden teyit edebilirsiniz.</p></div></div></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-TVzbZ6_4.mjs.map
