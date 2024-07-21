<template>
  <div
    class="bg-neutral-950 flex flex-col justify-center items-center w-full min-h-screen gap-10 px-10 py-24 fixed z-[200]">
    <h1 class="text-[80px] text-white">404</h1>
    <h1 class="text-[40px] text-white">
      <span class="text-[24px] text-rose-500 line-through scratch decoration-white mr-4">Her Love</span>
      Page is not found
    </h1>
    <p class="text-white mt-5 text-center">
      The page you are looking for was not found.
      <br>
      please comeback to one of this page
    </p>
    <div class="flex gap-x-3 gap-y-3 max-w-[320px] flex-wrap justify-stretch">
      <router-link
        class="flex-1 px-6 py-1 rounded-full text-white text-center bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-75"
        :to="{ name: 'all' }">Semua</router-link>
      <router-link
        class="flex-1 px-6 py-1 rounded-full text-white text-center bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-75"
        :to="{ name: 'on-progress' }">Berjalan</router-link>
      <router-link
        class="flex-1 px-6 py-1 rounded-full text-white text-center bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-75"
        :to="{ name: 'done' }">Selesai</router-link>
      <button
        class="flex-1 px-6 py-1 rounded-full text-white text-center bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-75"
        @click="goBack">Kembali</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}

</script>


<style scoped>
span.scratch {
  font-family: 'Bebas Neue', sans-serif;
  @apply tracking-wide
}

button,
a {
  font-family: 'Bebas Neue', sans-serif;
  @apply tracking-wide
}
</style>