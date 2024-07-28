<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import LocaleSwitcher from './LocaleSwitcher.vue';
import LoginButton from './LoginButton.vue';
import { ref } from 'vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const menuVisible = ref(false);

function toggleMenu() {
  menuVisible.value = !menuVisible.value;
}

function logout() {
  userStore.setUser(null);
}
</script>

<template>
  <div>
    <div class="border border-black rounded px-3 py-2 hover:bg-gray-100" @click="toggleMenu">
      <i class="pi pi-bars" style="font-size: 2.5rem"></i>
    </div>
    <div class="flex flex-col gap-1 absolute right-0 bg-white min-w-40 shadow-md" v-if="menuVisible">
      <RouterLink class="text-center border border-black rounded px-3 py-2" to="/">{{ $t('home.title') }}</RouterLink>
      <RouterLink class="text-center border border-black rounded px-3 py-2" to="/contact">{{
        $t('contact.title')
      }}</RouterLink>
      <LocaleSwitcher />
      <div v-if="user">
        <div class="py-2">
          {{ user?.name }}
        </div>
        <div class="py-2">
          {{ user?.email }}
        </div>
        <button class="w-full border border-black px-3 py-2 bg-red-500 text-white" @click="logout">
          {{ $t('login.logout') }}
        </button>
      </div>
      <LoginButton v-else />
    </div>
  </div>
</template>
