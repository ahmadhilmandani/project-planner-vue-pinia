<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="bg-neutral-950 w-full min-h-screen text-white">
    <nav class="bg-neutral-900 w-full h-16 flex justify-center items-center gap-10">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

