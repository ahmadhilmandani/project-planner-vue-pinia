<script setup>
import { IconCalendarDue } from '@tabler/icons-vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import FillButtonComp from '../components/FillButtonComp.vue'
import OutlineButtonComp from '../components/OutlineButtonComp.vue'

const projectData = ref(null)
const isLoading = ref(true)
const id = useRoute().params.id

console.log(id)

onMounted(() => {
  axios.get(`http://127.0.0.1:8000/api/v1/task/${id}`)
    .then((res) => {
      console.log(res.data.data)
      projectData.value = res.data.data
    }).catch((err) => {

    }).finally(() => {
      isLoading.value = false

    })
})
</script>

<template>
  <div v-if="isLoading"
    class="bg-neutral-950 absolute top-0 right-0 left-0 bottom-0 z-[1000000000000] opacity-80 flex justify-center items-center text-white">
    Loading..
  </div>

  <div v-else class="bg-neutral-800 min-h-screen p-10 flex-1 flex justify-between relative">

    <div class="w-[65%]">

      <small class="text-neutral-400">
        All > See Detail Projects
      </small>
      <h1 class="text-5xl mt-3 mb-8">
        {{ projectData.title }}
      </h1>

      <div class="flex items-center gap-10">
        <div class="flex text-white items-center gap-2">
          <IconCalendarDue />
          <p class="text-sm">
            {{ projectData.deadline }}
          </p>
        </div>
        <p class="text-sm">
          30 hari lagi
        </p>
        <small class="py-1 px-3 text-center rounded-full w-fit"
          :class="projectData.is_done ? 'bg-emerald-500' : 'bg-rose-500'">
          {{ projectData.is_done ? 'Selesai' : 'belum selesai' }}
        </small>
      </div>

      <h2 class="mt-8 mb-3 text-2xl">
        Deksripsi
      </h2>
      <div>
        {{ projectData.summary }}
      </div>

      <h2 class="mt-8 mb-3 text-2xl">
        Fitur
      </h2>
      <ul>
        <li v-for="valueOfStep in projectData.task_step" class="list-inside list-decimal">
          {{ valueOfStep.description }}
        </li>
      </ul>

    </div>

    <div class="border w-[25%] border-neutral-700 p-5 h-fit fixed right-10">

      <RouterLink :to="'/projects/' + projectId" class="block">
        <FillButtonComp buttonStyle="primary">
          Selesaikan
        </FillButtonComp>
      </RouterLink>
      <div class="flex gap-5">
        <RouterLink :to="'/projects/' + projectId" class="mt-5 block flex-1">
          <OutlineButtonComp buttonStyle="danger">
            Delete
          </OutlineButtonComp>
        </RouterLink>
        <RouterLink :to="'/projects/' + projectId" class="mt-5 block flex-1">
          <OutlineButtonComp buttonStyle="warning">
            Edit
          </OutlineButtonComp>
        </RouterLink>
      </div>
    </div>

  </div>

</template>