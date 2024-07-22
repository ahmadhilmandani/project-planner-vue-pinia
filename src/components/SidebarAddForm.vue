<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { IconBriefcase2, IconChevronDown, IconUserCircle, IconLogout, IconPointFilled } from '@tabler/icons-vue'

const isProjectsOpen = ref(true)
</script>

<template>
  <aside
    class="bg-neutral-900 border-r border-neutral-800 p-5 h-screen w-[240px] fixed top-0 bottom-0 left-0 overflow-y-auto z-[20000]">


    <div class="flex items-center justify-between mt-5 cursor-pointer" @click="()=>{isProjectsOpen = !isProjectsOpen}">
      <div class="flex gap-3 items-center">
        <IconBriefcase2 class="w-10" />
        Projects
      </div>
      <IconChevronDown :class="isProjectsOpen ? '': 'rotate-[-90deg]'" class="transition-all" />
    </div>

    <div v-if="isProjectsOpen">
      <RouterLink to="/" class="flex gap-3 mt-5">
        <IconPointFilled class="w-10" />
        All
      </RouterLink>
      <RouterLink to="/done" class="flex gap-3 mt-5">
        <IconPointFilled class="w-10" />
        Done
      </RouterLink>
      <RouterLink to="/on-progress" class="flex gap-3 mt-5 mb-10">
        <IconPointFilled class="w-10" />
        Progress
      </RouterLink>
    </div>


    <RouterLink to="/on-progress" class="flex gap-3 mt-5">
      <IconUserCircle class="w-10" />
      Profile
    </RouterLink>


    <RouterLink to="/on-progress" class="flex gap-3 mt-5">
      <IconLogout class="w-10" />
      Log out
    </RouterLink>


  </aside>
</template>