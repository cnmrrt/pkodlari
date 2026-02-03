<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
</script>

<template>
  <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="bg-slate-900 p-1.5 rounded-lg text-white">
          <MapPin class="w-4 h-4" />
        </div>
        <span class="font-bold text-slate-900 tracking-tight">Posta Kodu Rehberi</span>
      </NuxtLink>
      <nav class="text-sm font-medium text-slate-500 flex gap-6">
        <NuxtLink to="/" class="hover:text-slate-900 transition-colors">Şehirler</NuxtLink>
        <a href="https://postakodu.ptt.gov.tr/" target="_blank" class="hover:text-slate-900 transition-colors">PTT Sorgulama</a>
      </nav>
    </div>
  </header>
</template>
