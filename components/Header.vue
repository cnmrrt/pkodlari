<!-- <script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
</script>

<template>
  <header>
    <div class="header-content">
      <a href="/" class="header-logo-link">
        <div class="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
            </path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <span class="header-logo-text">Posta Kodu Rehberi</span>
      </a>
      <nav>
        <a href="/">Şehirler</a>
        <a href="/telefon-kodlari">Telefon Kodları</a>
        <a href="https://postakodu.ptt.gov.tr/" target="_blank">PTT Sorgulama</a>
      </nav>
    </div>
  </header>
</template> -->

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';

const route = useRoute()

// Check if the current route starts with /es
const isSpanish = computed(() => route.path.startsWith('/es'))
</script>

<template>
  <header>
    <!-- Spanish Header -->
    <div v-if="isSpanish" class="header-content">
      <a href="/es" class="header-logo-link">
        <div class="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
            </path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <span class="header-logo-text">Guía de Códigos Postales</span>
      </a>
      <nav>
        <a href="/es">Ciudades</a>
        <!-- <a href="/es/codigos-telefonicos">Códigos Telefónicos</a> -->
        <!-- <a href="https://postakodu.ptt.gov.tr/" target="_blank" rel="noopener">Consulta PTT</a> -->
      </nav>
    </div>

    <!-- Default (Turkish/Other) Header -->
    <div v-else class="header-content">
      <a href="/" class="header-logo-link">
        <div class="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
            </path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <span class="header-logo-text">Posta Kodu Rehberi</span>
      </a>
      <nav>
        <a href="/">Şehirler</a>
        <a href="/telefon-kodlari">Telefon Kodları</a>
        <a href="https://postakodu.ptt.gov.tr/" target="_blank" rel="noopener">PTT Sorgulama</a>
      </nav>
    </div>
  </header>
</template>