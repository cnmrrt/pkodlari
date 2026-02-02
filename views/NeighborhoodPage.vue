<script setup lang="ts">
import { inject, computed, onMounted, watch, ref, Ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { ChevronRight, MapPin, Check, Copy, Info, Share2 } from 'lucide-vue-next';
import { PostalData } from '../types';

const route = useRoute();
const postalData = inject<Ref<PostalData | null>>('postalData');
const copied = ref(false);

const city = computed(() => route.params.city as string);
const district = computed(() => route.params.district as string);
const neighborhood = computed(() => route.params.neighborhood as string);

const updateTitle = () => {
  if (neighborhood.value) {
    document.title = `${neighborhood.value} Posta Kodu | Rehber`;
  }
};

onMounted(updateTitle);
watch(neighborhood, updateTitle);

const isValid = computed(() => {
    return postalData?.value && city.value && district.value && neighborhood.value && 
           postalData.value[city.value] && 
           postalData.value[city.value][district.value] && 
           postalData.value[city.value][district.value][neighborhood.value];
});

const zipCode = computed(() => {
    if (!isValid.value) return '';
    return postalData!.value![city.value][district.value][neighborhood.value];
});

const copyToClipboard = () => {
    navigator.clipboard.writeText(zipCode.value);
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
};

const share = () => {
    if (navigator.share) {
        navigator.share({
        title: `${neighborhood.value} Posta Kodu`,
        text: `${city.value}, ${district.value}, ${neighborhood.value} mahallesinin posta kodu: ${zipCode.value}`,
        url: window.location.href,
        });
    }
};
</script>

<template>
  <div v-if="!isValid" class="py-20 text-center">
    <p class="text-slate-500">Mahalle verisi bulunamadı.</p>
    <RouterLink to="/" class="text-blue-600 font-medium mt-4 inline-block">Ana Sayfaya Dön</RouterLink>
  </div>

  <div v-else class="animate-in fade-in duration-500 max-w-2xl mx-auto py-8">
    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <RouterLink to="/" class="hover:text-slate-900 transition-colors">TÜRKİYE</RouterLink>
      <ChevronRight class="w-3 h-3" />
      <RouterLink :to="`/city/${city}`" class="hover:text-slate-900 transition-colors">{{ city }}</RouterLink>
      <ChevronRight class="w-3 h-3" />
      <RouterLink :to="`/city/${city}/${district}`" class="hover:text-slate-900 transition-colors">{{ district }}</RouterLink>
    </nav>

    <div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
      <div class="text-center mb-10">
        <div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">
          <MapPin class="w-6 h-6 text-slate-900" />
        </div>
        <h1 class="text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{{ neighborhood }}</h1>
        <p class="text-slate-500 font-medium uppercase tracking-widest text-sm">{{ district }}, {{ city }}</p>
      </div>

      <div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p>
          <div class="mono text-7xl font-bold text-slate-900 mb-8">{{ zipCode }}</div>
          <button 
            @click="copyToClipboard"
            class="flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"
            :class="copied ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'"
          >
            <Check v-if="copied" class="w-4 h-4" />
            <Copy v-else class="w-4 h-4" />
            {{ copied ? 'KOPYALANDI' : 'KODU KOPYALA' }}
          </button>
        </div>
        <!-- Decorative background number -->
        <div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">
          {{ zipCode.substring(0, 2) }}
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-4">
        <div class="flex items-start gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
          <Info class="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h4 class="text-sm font-bold text-slate-900 mb-1">Adres Yazımı Örneği</h4>
            <div class="text-sm text-slate-600 leading-relaxed italic">
                {{ neighborhood }} Mah. No:1 D:1<br />
                {{ zipCode }} {{ district }}/{{ city }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 flex justify-center">
      <button 
        @click="share"
        class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"
      >
        <Share2 class="w-4 h-4" /> PAYLAŞ
      </button>
    </div>
  </div>
</template>
