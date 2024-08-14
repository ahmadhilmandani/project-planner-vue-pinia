<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { IconBriefcase2, IconChevronDown, IconUserCircle, IconLogout, IconPointFilled } from '@tabler/icons-vue'
import axios from 'axios';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

const isProjectsOpen = ref(true)
const router = useRouter()

function handleLogout() {
  axios.post('http://127.0.0.1:8000/api/v1/logout',
    {},
    {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  ).then(() => {
    localStorage.removeItem('token')
    toast.success('See, ya!')
    router.replace('/login')
  }).catch((err) => {
    console.log(err)
    toast.error('Logout failed, please try again!')
  })
}
</script>

<template>
  <aside
    class="bg-neutral-900 border-r border-neutral-800 p-5 h-screen w-[240px] sticky top-0 bottom-0 left-0 overflow-y-auto z-[20000]">
    <div
      class="flex py-2 items-center justify-between mt-5 cursor-pointer hover:bg-[#1d1d1d] rounded-full transition-all"
      @click="() => { isProjectsOpen = !isProjectsOpen }">
      <div class="flex gap-3 items-center">
        <IconBriefcase2 class="w-10" />
        Projects
      </div>
      <IconChevronDown :class="isProjectsOpen ? '' : 'rotate-[-90deg]'" class="transition-all" />
    </div>

    <div v-if="isProjectsOpen">
      <RouterLink to="/" class="flex py-2 gap-3 mt-5 hover:bg-[#1d1d1d] rounded-full transition-all">
        <IconPointFilled class="w-10" />
        All
      </RouterLink>
      <RouterLink to="/done" class="flex py-2 gap-3 mt-5 hover:bg-[#1d1d1d] rounded-full transition-all">
        <IconPointFilled class="w-10" />
        Draft
      </RouterLink>
    </div>


    <RouterLink to="/profile" class="flex py-2 gap-3 mt-5 hover:bg-[#1d1d1d] rounded-full transition-all">
      <IconUserCircle class="w-10" />
      Profile
    </RouterLink>


    <div @click="handleLogout"
      class="flex py-2 gap-3 mt-5 hover:bg-[#1d1d1d] rounded-full transition-all cursor-pointer">
      <IconLogout class="w-10" />
      Log out
    </div>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-[#1d1d1d] rounded-full border border-neutral-700;
}
</style>