<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import countryList from '@/data/country';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const name = ref(user.value?.name ?? '');
const email = ref(user.value?.email ?? '');
const phone = ref('');
const country = ref('');
const text = ref('');

function submit(event) {
  if (!name.value || !email.value || !phone.value || !country.value || !text.value) {
    alert('Please fill in all fields');
    return;
  }
  console.log('contact submit:', {
    name: name.value,
    email: email.value,
    phonenumber: phone.value,
    country_code: country.value,
    text: text.value
  });
  event.preventDefault();
}
</script>

<template>
  <form @submit="submit">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col">
        <label for="name">{{ $t('contact.name') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          type="text"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="email">{{ $t('contact.email') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          type="email"
          id="email"
          v-model="email"
          required="email"
        />
      </div>
      <div class="flex flex-col">
        <label for="phone">{{ $t('contact.phone') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          type="tel"
          id="phone"
          v-model="phone"
          pattern="[0-9]{3} ?[0-9]{3} ?[0-9]{2} ?[0-9]{2}"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="country">{{ $t('contact.country') }}</label>
        <input
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          name="country"
          id="country"
          v-model="country"
          required="country"
          list="countryList"
        />
        <datalist id="countryList">
          <option value="" disabled>{{ $t('contact.chooseCountry') }}</option>
          <option v-for="country in countryList" :key="country" :value="country">{{ $t(`country.${country}`) }}</option>
        </datalist>
      </div>
      <div class="flex flex-col">
        <label for="text">{{ $t('contact.text') }}</label>
        <textarea
          class="border border-black rounded p-1 invalid:border-2 invalid:border-red-500 valid:border-2 valid:border-green-500"
          name="text"
          id="text"
          v-model="text"
          required
        ></textarea>
      </div>
      <div>
        <button class="border border-black rounded px-3 py-2 bg-green-300 float-right" type="submit">
          {{ $t('contact.submit') }}
        </button>
      </div>
    </div>
  </form>
</template>
