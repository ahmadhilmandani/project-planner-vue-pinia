<script>
export default {
  computed: {
    isRoute(routeName) {
    this.$route.name === this.$route.name.startsWith(routeName) ? true : false
   } 
  }
}
</script>

<template>
  <div
    class="h-14 w-full fixed top-0 left-0 right-0 flex justify-end items-center border-r-[0.8px] bg-neutral-900 border-neutral-800 px-20 text-xs text-white gap-14">
    <router-link to="/all">
      Semua
    </router-link>
    <router-link to="/on-progress">
      Berjalan
    </router-link>
    <router-link to="/done">
      selesai
    </router-link>
    <a href="https://ahmadhilmandani.netlify.app/" target="_blank"
      class="bg-neutral-950 border-[0.8px] border-neutral-700 px-4 py-1 rounded-full font-semibold">
      Tentang Developer
    </a>
  </div>
</template>