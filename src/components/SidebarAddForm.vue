<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { IconBriefcase2, IconChevronDown, IconUserCircle, IconLogout, IconPointFilled } from '@tabler/icons-vue'

const isProjectsOpen = ref(true)
</script>

<template>
  <aside
    class="bg-neutral-900 border-r border-neutral-800 p-5 h-screen w-[240px] sticky top-0 bottom-0 left-0 overflow-y-auto z-[20000]">

    <div class="flex py-2 items-center justify-between mt-5 cursor-pointer hover:bg-[#1d1d1d] rounded-full transition-all" @click="() => { isProjectsOpen = !isProjectsOpen }">
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


    <RouterLink to="/on-progress" class="flex py-2 gap-3 mt-5 hover:bg-[#1d1d1d] rounded-full transition-all">
      <IconUserCircle class="w-10" />
      Profile
    </RouterLink>


    <RouterLink to="/on-progress" class="flex py-2 gap-3 mt-5 hover:bg-[#1d1d1d] rounded-full transition-all">
      <IconLogout class="w-10" />
      Log out
    </RouterLink>
  </aside>
</template>

<style>
.router-link-active{
  @apply bg-[#1d1d1d] rounded-full border border-neutral-700;
}
</style>