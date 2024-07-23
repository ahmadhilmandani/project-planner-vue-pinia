<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import CardProject from '../components/CardProject.vue'
import { IconAdjustmentsHorizontal, IconPlus } from '@tabler/icons-vue';

const projects = ref(null)
const isLoading = ref(true)

onMounted(() => {
  axios.get('http://127.0.0.1:8000/api/v1/task')
    .then(function (response) {
      console.log(response.data.data)
      projects.value = response.data.data
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      isLoading.value = false
    })
})
</script>

<template>
  <div v-if="isLoading"
    class="bg-neutral-950 absolute top-0 right-0 left-0 bottom-0 z-[1000000000000] opacity-80 flex justify-center items-center text-white">
    Loading..
  </div>

  <div class="bg-neutral-800 w-full min-h-screen p-10 flex-1">
    <small class="text-neutral-400">
      All
    </small>
    <div class="mb-8 mt-3 flex justify-between">
      <h1 class="text-5xl">
        All Of Your Projects
      </h1>
      <div class="flex gap-3">
        <div class="flex items-center gap-2 border px-5 py-1 rounded-full cursor-pointer">
          Filter
          <IconAdjustmentsHorizontal />
        </div>
        <button class="flex items-center gap-2 px-5 py-1 rounded-full bg-emerald-500 font-bold border-0">
          Add Projects
          <IconPlus class="text-neutral-800" />
        </button>
      </div>
    </div>
    <div class="flex items-center flex-wrap gap-5">
      <CardProject v-for="value in projects">
        <template #title>
          {{ value.title }}
        </template>
        <template #deadline>
          {{ value.deadline }}
        </template>
        <template #deadlineLeft>
          {{ value.deadline }}
        </template>
        <template #body>
          {{ value.summary }}
        </template>
        <template #thingsToDo>
          <ul>
            <li v-for="valueOfTaskStep in value">
              {{ valueOfTaskStep.description }}
            </li>
          </ul>
        </template>
      </CardProject>
    </div>
  </div>
</template>