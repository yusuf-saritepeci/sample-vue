<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const infoVisible = ref(false);

function logout() {
  userStore.setUser(null);
}
</script>

<template>
  <div @mouseenter="infoVisible = true" @mouseleave="infoVisible = false">
    <div class="border border-black rounded px-3 py-2 hover:bg-gray-100">
      {{ user?.name }}
    </div>
    <div class="absolute right-0 bg-white min-w-40 shadow-md" v-if="infoVisible">
      <div class="py-2 text-center">
        {{ user?.email }}
      </div>
      <button class="w-full border border-black px-3 py-2 bg-red-500 text-white" @click="logout">
        {{ $t('login.logout') }}
      </button>
    </div>
  </div>
</template>
