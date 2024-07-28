<script setup>
import { useUserStore } from '@/stores/user';
import LocaleSwitcher from './LocaleSwitcher.vue';
import LoginButton from './LoginButton.vue';
import ProfileInfo from './ProfileInfo.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import MobileNavbarMenu from './MobileNavbarMenu.vue';

const userStore = useUserStore();
const router = useRouter();

const currentRoute = computed(() => router.currentRoute.value.name ?? 'home');
const routeIcon = computed(() => (currentRoute.value === 'home' ? 'home' : 'envelope'));

const { user } = storeToRefs(userStore);
</script>

<template>
  <nav class="bg-blue-100 h-20 flex items-center">
    <div class="container flex flex-row justify-between px-4 md:px-0">
      <div class="flex items-center gap-10">
        <i :class="`pi pi-${routeIcon}`" style="font-size: 2.5rem; color: coral"></i>
        <h1>{{ $t(currentRoute + '.title') }}</h1>
      </div>
      <div class="hidden items-center gap-10 md:flex">
        <RouterLink class="text-center border border-black rounded px-3 py-2" to="/">{{ $t('home.title') }}</RouterLink>
        <RouterLink class="text-center border border-black rounded px-3 py-2" to="/contact">{{
          $t('contact.title')
        }}</RouterLink>
        <LocaleSwitcher />
        <ProfileInfo v-if="user" />
        <LoginButton v-else />
      </div>
      <div class="md:hidden">
        <MobileNavbarMenu />
      </div>
    </div>
  </nav>
</template>
