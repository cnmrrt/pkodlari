<script setup lang="ts">
import { computed } from "vue";

const phoneCodes = [
  { name: "Adana", code: "322" },
  { name: "Adıyaman", code: "416" },
  { name: "Afyonkarahisar", code: "272" },
  { name: "Ağrı", code: "472" },
  { name: "Aksaray", code: "382" },
  { name: "Amasya", code: "358" },
  { name: "Ankara", code: "312" },
  { name: "Antalya", code: "242" },
  { name: "Artvin", code: "466" },
  { name: "Aydın", code: "256" },
  { name: "Balıkesir", code: "266" },
  { name: "Bartın", code: "378" },
  { name: "Batman", code: "488" },
  { name: "Bilecik", code: "228" },
  { name: "Bingöl", code: "426" },
  { name: "Bitlis", code: "434" },
  { name: "Bolu", code: "374" },
  { name: "Burdur", code: "248" },
  { name: "Bursa", code: "224" },
  { name: "Çanakkale", code: "286" },
  { name: "Çankırı", code: "376" },
  { name: "Çorum", code: "364" },
  { name: "Denizli", code: "258" },
  { name: "Diyarbakır", code: "412" },
  { name: "Düzce", code: "380" },
  { name: "Edirne", code: "284" },
  { name: "Elazığ", code: "424" },
  { name: "Erzincan", code: "446" },
  { name: "Erzurum", code: "442" },
  { name: "Eskişehir", code: "222" },
  { name: "Gaziantep", code: "342" },
  { name: "Giresun", code: "454" },
  { name: "Gümüşhane", code: "456" },
  { name: "Hakkari", code: "438" },
  { name: "Hatay", code: "326" },
  { name: "Isparta", code: "246" },
  { name: "İstanbul", code: "212 / 216" },
  { name: "İzmir", code: "232" },
  { name: "Kahramanmaraş", code: "344" },
  { name: "Karabük", code: "370" },
  { name: "Karaman", code: "338" },
  { name: "Kars", code: "474" },
  { name: "Kastamonu", code: "366" },
  { name: "Kayseri", code: "352" },
  { name: "Kilis", code: "348" },
  { name: "Kırıkkale", code: "318" },
  { name: "Kırklareli", code: "288" },
  { name: "Kırşehir", code: "386" },
  { name: "Kocaeli", code: "262" },
  { name: "Konya", code: "332" },
  { name: "Kütahya", code: "274" },
  { name: "Malatya", code: "422" },
  { name: "Manisa", code: "236" },
  { name: "Mardin", code: "482" },
  { name: "Mersin", code: "324" },
  { name: "Muğla", code: "252" },
  { name: "Muş", code: "436" },
  { name: "Nevşehir", code: "384" },
  { name: "Niğde", code: "388" },
  { name: "Ordu", code: "452" },
  { name: "Osmaniye", code: "328" },
  { name: "Rize", code: "464" },
  { name: "Sakarya", code: "264" },
  { name: "Samsun", code: "362" },
  { name: "Siirt", code: "484" },
  { name: "Sinop", code: "368" },
  { name: "Sivas", code: "346" },
  { name: "Tekirdağ", code: "282" },
  { name: "Tokat", code: "356" },
  { name: "Trabzon", code: "462" },
  { name: "Tunceli", code: "428" },
  { name: "Uşak", code: "276" },
  { name: "Van", code: "432" },
  { name: "Yalova", code: "226" },
  { name: "Yozgat", code: "354" },
  { name: "Zonguldak", code: "372" },
];

const cityList = computed(() =>
  [...phoneCodes].sort((a, b) => a.name.localeCompare(b.name, "tr"))
);

useHead({
  title: "Türkiye Telefon Kodları",
  meta: [
    {
      name: "description",
      content: "İl bazında Türkiye telefon alan kodlarını kolayca görüntüleyin.",
    },
  ],
});

usePageSeo({
  title: "Türkiye Telefon Kodları",
  description: "İl bazında Türkiye telefon alan kodlarını kolayca görüntüleyin.",
});
</script>

<template>
  <div class="animate-in fade-in duration-500">
    <div class="text-center mb-12 py-9">
      <h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Türkiye Telefon Kodları</h1>
      <p class="text-slate-500 mb-4">
        İl bazında telefon alan kodlarını hızlıca görüntüleyin.
      </p>
      <p class="text-sm text-slate-400">
        Bazı illerde birden fazla alan kodu kullanılabilir; bu sayfada başlıca/öne çıkan kod gösterilmektedir.
      </p>
    </div>

    <div class="districts">
      <div
        v-for="item in cityList"
        :key="item.name"
        class="soft-card p-5 rounded-xl flex items-center justify-between"
      >
        <div>
          <h2 class="font-semibold text-slate-900 text-sm">{{ item.name }}</h2>
          <p>
            Telefon kodu
          </p>
        </div>
        <div class="text-lg font-bold text-slate-900 whitespace-nowrap">{{ item.code }}</div>
      </div>
    </div>
  </div>
</template>
