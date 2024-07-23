<script setup>
import { IconCalendarDue } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
import FillButtonComp from './FillButtonComp.vue'
defineProps({
  isDone: {
    validator(value) {
      return [true, false].includes(value)
    }
  },
  projectId: Number
})

</script>

<template>
  <div
    class="bg-neutral-900 border-[0.8px] border-neutral-800 w-[300px] aspect-[13/16] rounded-tr-3xl px-4 py-8 relative">
    <div>
      <small class="py-1 px-3 text-center rounded-full w-fit" :class="isDone ? 'bg-emerald-500' : 'bg-rose-500'">
      {{ isDone ? 'Selesai' : 'Belum selesai'}}
    </small>
      <h1 class="text-2xl text-white mt-3">
        <slot name="title"></slot>
      </h1>
      <div class="flex items-center gap-5 mt-2">
        <div class="flex text-white items-center gap-2">
          <IconCalendarDue />
          <p class="text-sm">
            <slot name="deadline"></slot>
          </p>
        </div>
        <p class="text-sm">
          <slot name="deadlineLeft"></slot>
        </p>
      </div>
    </div>

    <div class="text-white text-sm mt-5 border-neutral-700">
      <div class="text-sm text-neutral-500 mb-2">
        Deskripsi :
      </div>
      <p>
        <slot name="body"></slot>
      </p>
    </div>

    <RouterLink :to="'/projects/'+projectId" class="absolute bottom-5 right-5 left-5">
      <FillButtonComp>
        Detail
      </FillButtonComp>
    </RouterLink>
  </div>
</template>
