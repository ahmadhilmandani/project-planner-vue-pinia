<script>
</script>

<template>
  <div
    class="h-14 w-full fixed top-0 left-0 right-0 flex justify-end items-center border-r-[0.8px] bg-neutral-900 border-neutral-800 px-20 text-xs text-white gap-14">
    <router-link :to="{name: 'all'}">
      Semua
    </router-link>
    <router-link :to="{name: 'on-progress'}">
      Berjalan
    </router-link>
    <router-link :to="{name: 'done'}">
      Selesai
    </router-link>
    <a href="https://ahmadhilmandani.netlify.app/" target="_blank"
      class="bg-neutral-950 border-[0.8px] border-neutral-700 px-4 py-1 rounded-full font-semibold">
      Tentang Developer
    </a>
  </div>
</template>

<style>
.router-link-active {
  @apply bg-emerald-500 font-semibold tracking-wider border-[0.8px] px-3 py-1 rounded-full border-emerald-300
}
</style>