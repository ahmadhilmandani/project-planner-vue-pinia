<template>
  <div class="w-full min-h-screen xl:flex items-start relative">
    <SidebarAddForm />
    <RouterView />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

import { RouterView } from 'vue-router'
const router = useRouter()
onBeforeMount(() => {
  if (!localStorage.getItem('token')) {
    router.replace('/login')
  }
})

import SidebarAddForm from '../components/SidebarAddForm.vue'
</script>