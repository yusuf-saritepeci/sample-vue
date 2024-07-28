<script setup>
import { RouterView } from 'vue-router';
import MyNavbar from './components/MyNavbar.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <div class="flex flex-col h-full bg-yellow-200">
    <MyNavbar />
    <div class="flex-1">
      <div class="container p-4 md:p-8">
        <RouterView />
      </div>
    </div>
    <SiteFooter />
  </div>
</template>
