<script setup>
import { setLocale } from '@/i18n';

function onLocaleSelect(e) {
  const locale = e.target.value;
  setLocale(locale);
}
</script>

<template>
  <select class="border border-black rounded px-3 py-2 text-center" @change="onLocaleSelect">
    <option value="en">English</option>
    <option value="tr">Türkçe</option>
  </select>
</template>
