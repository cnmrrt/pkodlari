<script setup lang="ts">
import { computed, ref } from 'vue';
import { Search } from 'lucide-vue-next';
import { slugify } from '~/utils/slugify';

const plateCodes = [
  { code: '01', name: 'Adana' },
  { code: '02', name: 'Adıyaman' },
  { code: '03', name: 'Afyonkarahisar' },
  { code: '04', name: 'Ağrı' },
  { code: '05', name: 'Amasya' },
  { code: '06', name: 'Ankara' },
  { code: '07', name: 'Antalya' },
  { code: '08', name: 'Artvin' },
  { code: '09', name: 'Aydın' },
  { code: '10', name: 'Balıkesir' },
  { code: '11', name: 'Bilecik' },
  { code: '12', name: 'Bingöl' },
  { code: '13', name: 'Bitlis' },
  { code: '14', name: 'Bolu' },
  { code: '15', name: 'Burdur' },
  { code: '16', name: 'Bursa' },
  { code: '17', name: 'Çanakkale' },
  { code: '18', name: 'Çankırı' },
  { code: '19', name: 'Çorum' },
  { code: '20', name: 'Denizli' },
  { code: '21', name: 'Diyarbakır' },
  { code: '22', name: 'Edirne' },
  { code: '23', name: 'Elazığ' },
  { code: '24', name: 'Erzincan' },
  { code: '25', name: 'Erzurum' },
  { code: '26', name: 'Eskişehir' },
  { code: '27', name: 'Gaziantep' },
  { code: '28', name: 'Giresun' },
  { code: '29', name: 'Gümüşhane' },
  { code: '30', name: 'Hakkari' },
  { code: '31', name: 'Hatay' },
  { code: '32', name: 'Isparta' },
  { code: '33', name: 'Mersin' },
  { code: '34', name: 'İstanbul' },
  { code: '35', name: 'İzmir' },
  { code: '36', name: 'Kars' },
  { code: '37', name: 'Kastamonu' },
  { code: '38', name: 'Kayseri' },
  { code: '39', name: 'Kırklareli' },
  { code: '40', name: 'Kırşehir' },
  { code: '41', name: 'Kocaeli' },
  { code: '42', name: 'Konya' },
  { code: '43', name: 'Kütahya' },
  { code: '44', name: 'Malatya' },
  { code: '45', name: 'Manisa' },
  { code: '46', name: 'Kahramanmaraş' },
  { code: '47', name: 'Mardin' },
  { code: '48', name: 'Muğla' },
  { code: '49', name: 'Muş' },
  { code: '50', name: 'Nevşehir' },
  { code: '51', name: 'Niğde' },
  { code: '52', name: 'Ordu' },
  { code: '53', name: 'Rize' },
  { code: '54', name: 'Sakarya' },
  { code: '55', name: 'Samsun' },
  { code: '56', name: 'Siirt' },
  { code: '57', name: 'Sinop' },
  { code: '58', name: 'Sivas' },
  { code: '59', name: 'Tekirdağ' },
  { code: '60', name: 'Tokat' },
  { code: '61', name: 'Trabzon' },
  { code: '62', name: 'Tunceli' },
  { code: '63', name: 'Şanlıurfa' },
  { code: '64', name: 'Uşak' },
  { code: '65', name: 'Van' },
  { code: '66', name: 'Yozgat' },
  { code: '67', name: 'Zonguldak' },
  { code: '68', name: 'Aksaray' },
  { code: '69', name: 'Bayburt' },
  { code: '70', name: 'Karaman' },
  { code: '71', name: 'Kırıkkale' },
  { code: '72', name: 'Batman' },
  { code: '73', name: 'Şırnak' },
  { code: '74', name: 'Bartın' },
  { code: '75', name: 'Ardahan' },
  { code: '76', name: 'Iğdır' },
  { code: '77', name: 'Yalova' },
  { code: '78', name: 'Karabük' },
  { code: '79', name: 'Kilis' },
  { code: '80', name: 'Osmaniye' },
  { code: '81', name: 'Düzce' },
];

const query = ref('');
const filteredPlateCodes = computed(() => {
  const searchTerm = query.value.trim().toLocaleLowerCase('tr');
  if (!searchTerm) return plateCodes;

  return plateCodes.filter(({ code, name }) =>
    code.includes(searchTerm) || name.toLocaleLowerCase('tr').includes(searchTerm)
  );
});

useHead({
  title: 'Türkiye İl Plaka Kodları',
  meta: [{
    name: 'description',
    content: 'Türkiye’deki 81 ilin plaka kodlarını alfabetik sırayla veya plaka numarasına göre arayın.',
  }],
});

usePageSeo({
  title: 'Türkiye İl Plaka Kodları',
  description: 'Türkiye’deki 81 ilin plaka kodlarını alfabetik sırayla veya plaka numarasına göre arayın.',
});
</script>

<template>
  <div class="animate-in fade-in duration-500">
    <div class="text-center mb-12 py-9">
      <h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Türkiye İllerinin Plaka Kodları</h1>
      <p class="text-slate-500 mb-6">
        81 ilin plaka kodunu il adına veya plaka numarasına göre kolayca bulun.
      </p>
      <label class="plate-search">
        <Search class="w-5 h-5 text-slate-400" />
        <input
          v-model="query"
          type="search"
          placeholder="İl adı veya plaka kodu ara..."
          aria-label="İl adı veya plaka kodu ara"
        />
      </label>
    </div>

    <div class="plate-grid">
      <NuxtLink
        v-for="item in filteredPlateCodes"
        :key="item.code"
        :to="`/${slugify(item.name)}`"
        class="plate-card"
      >
        <span class="plate-number">{{ item.code }}</span>
        <span class="plate-city">{{ item.name }}</span>
        <span class="plate-link-label">Posta kodları</span>
      </NuxtLink>
      <p v-if="filteredPlateCodes.length === 0" class="plate-empty">
        Aramanızla eşleşen il veya plaka kodu bulunamadı.
      </p>
    </div>
  </div>
</template>

<style scoped>
.plate-search {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: min(100% - 2rem, 28rem);
  margin: 0 auto;
  padding: 0.875rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.plate-search:focus-within {
  border-color: #94a3b8;
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.06);
}

.plate-search input {
  width: 100%;
  border: 0;
  outline: 0;
  color: #0f172a;
  background: transparent;
}

.plate-search input::placeholder {
  color: #94a3b8;
}

.plate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 0.875rem;
  max-width: 64rem;
  margin: 0 auto 3rem;
}

.plate-card {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.plate-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
}

.plate-number {
  display: grid;
  width: 3rem;
  height: 2.5rem;
  flex: 0 0 auto;
  place-items: center;
  border: 2px solid #2563eb;
  border-radius: 0.5rem;
  color: #1d4ed8;
  font-size: 1.125rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.plate-city {
  color: #0f172a;
  font-weight: 600;
}

.plate-link-label {
  margin-left: auto;
  color: #94a3b8;
  font-size: 0.7rem;
  white-space: nowrap;
}

.plate-empty {
  grid-column: 1 / -1;
  padding: 3rem 1rem;
  color: #64748b;
  text-align: center;
}
</style>
