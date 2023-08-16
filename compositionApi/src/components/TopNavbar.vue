<script>
import { RouterLink } from 'vue-router'
export default {
  setup() {


  }
}
</script>

<template>
  <nav
    class="w-full h-14 px-16 flex justify-end items-center gap-16 fixed top-0 left-0 right-0 z-[2000] bg-neutral-900 border-[0.8px] border-t-0 border-neutral-800">
    <RouterLink class="hover:opacity-60 text-xs" :to="{ name: 'all' }">Semua</RouterLink>
    <RouterLink class="hover:opacity-60 text-xs" to="/on-progress">Berjalan</RouterLink>
    <RouterLink class="hover:opacity-60 text-xs" to="/on-progress">Selesai</RouterLink>
    <a class="hover:opacity-60 text-xs rounded-full px-3 py-1 bg-neutral-950 border-[0.8px] border-neutral-700"
      href="https://ahmadhilmandani.netlify.com/" target="_blank">Tentang Developer</a>
  </nav>
</template>


<style>
.router-link-active {
  @apply bg-emerald-500 font-semibold tracking-wider border-[0.8px] px-3 py-1 rounded-full border-emerald-300
}
</style>