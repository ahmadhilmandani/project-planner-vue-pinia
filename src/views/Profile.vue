<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import { FwbSpinner } from 'flowbite-vue';

const isLoading = ref(true)
const profileData = ref([])
onMounted(() => {
  axios.get('http://127.0.0.1:8000/api/v1/get-user',
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then((res) => {
    profileData.value.push(res.data.user)
  }).catch((err) => {
    toast.error('Failed to load data, please try again!')
  }).finally(() => {
    isLoading.value = false
  })
})

</script>

<template>
  <div class="bg-neutral-800 w-[calc(100%_-_240px)] min-h-screen p-10"
    :class="isLoading ? 'flex justify-center items-center' : ''">
    <main v-if="isLoading">
      <FwbSpinner size="8" class="fill-emerald-500" />
    </main>
    <main v-else>
      <small class="text-neutral-400">
        Profile
      </small>
      <header class="mb-12 mt-3">
        <h1 class="text-5xl">
          Profile
        </h1>
      </header>

      <div class="mb-8 pb-4 border-b border-neutral-700">
        <h2 class="mb-3 text-2xl">
          Nama
        </h2>
        <div>
          {{ profileData[0].name }}
        </div>
      </div>

      <div class="mb-8 pb-4 border-b border-neutral-700">
        <h2 class="mb-3 text-2xl">
          Email
        </h2>
        <div>
          {{ profileData[0].email }}
        </div>
      </div>
    </main>
  </div>
</template>