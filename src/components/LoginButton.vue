<script setup>
import { ref } from 'vue';
import MyModal from './MyModal.vue';
import { useUserStore } from '@/stores/user';

const { setUser } = useUserStore();

const showModal = ref(false);
const name = ref('');
const email = ref('');
const password = ref('');

function showLoginModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function login() {
  setUser({
    name: name.value,
    email: email.value,
    password: password.value
  });
  closeModal();
}
</script>

<template>
  <button class="border border-black rounded px-3 py-2 bg-green-300" @click="showLoginModal">
    {{ $t('login.login') }}
  </button>
  <MyModal :show="showModal">
    <template #header>
      <h1 class="text-xl font-bold">{{ $t('login.login') }}</h1>
    </template>
    <template #body>
      <div class="flex flex-col">
        <label for="name">{{ $t('login.name') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          type="text"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="email">{{ $t('login.email') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          type="email"
          id="email"
          v-model="email"
          required="email"
        />
      </div>
      <div class="flex flex-col">
        <label for="password">{{ $t('login.password') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          type="password"
          id="password"
          v-model="password"
          required="password"
        />
      </div>
    </template>
    <template #footer>
      <button class="rounded border border-black bg-white px-3 py-2" @click="closeModal">
        {{ $t('login.close') }}
      </button>
      <button class="rounded border border-black bg-green-500 px-3 py-2" @click="login">{{ $t('login.login') }}</button>
    </template>
  </MyModal>
</template>
