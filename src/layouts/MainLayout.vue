<template>
  <div class="w-full min-h-screen xl:flex items-start relative">
    <SidebarAddForm />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import SidebarAddForm from '../components/SidebarAddForm.vue'
</script>