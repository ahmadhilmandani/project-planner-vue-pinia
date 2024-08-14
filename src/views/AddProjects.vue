<template>
  <main class="bg-neutral-800 min-h-screen p-10 w-[calc(100%_-_240px)]">

    <div v-if="isLoading"
      class="bg-neutral-950 absolute top-0 right-0 left-0 bottom-0 z-[1000000000000] opacity-80 flex justify-center items-center text-white">
      Loading..
    </div>

    <small class="text-neutral-400">
      Add projects
    </small>

    <header>
      <h2 class="mt-8 mb-3 text-2xl">
        Title
      </h2>
      <input
        class="text-5xl mt-3 mb-8 block bg-transparent bebas-neue-font outline-0 w-full border-b border-neutral-600 focus:border-emerald-500"
        v-model="projectData.title" />
    </header>

    <section>
      <h2 class="mt-8 mb-3 text-2xl">
        Deadline
      </h2>
      <div class="flex items-center gap-2">
        <IconCalendarDue />
        <input type="date"
          class="text-sm block w-full bg-transparent outline-0 border-b border-neutral-600 focus:border-emerald-500"
          v-model="projectData.deadline" />
      </div>
    </section>

    <section>
      <h2 class="mt-8 mb-3 text-2xl">
        Deksripsi
      </h2>
      <div>
        <textarea
          class="text-sm block bg-transparent outline-0 border-b border-neutral-600 focus:border-emerald-500 w-full"
          v-model="projectData.summary">
        </textarea>
      </div>
    </section>

    <section>
      <h2 class="mt-8 mb-3 text-2xl">
        Fitur
      </h2>
      <ul>
        <li v-for="(valueOfStep, index) in projectData.step" :class="index != projectData.step - 1 ? 'mb-5' : ''"
          class="list-inside list-decimal flex items-center gap-4">
          {{ index + 1 }}
          <input
            class="text-sm block bg-transparent outline-0 border-b border-neutral-600 focus:border-emerald-500 w-full"
            v-model="projectData.step[index]" />
        </li>
      </ul>
      <OutlineButtonComp :onClickAction="addStep">
        Add task
      </OutlineButtonComp>
      <div class="mt-10" @click="saveTask">
        <FillButtonComp buttonStyle="primary">
          SAVE
        </FillButtonComp>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import { IconCalendarDue } from '@tabler/icons-vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import FillButtonComp from '../components/FillButtonComp.vue';
import OutlineButtonComp from '../components/OutlineButtonComp.vue'


const rouer = useRouter()
const isLoading = ref(false)
const projectData = ref(
  {
    title: '',
    deadline: '',
    summary: '',
    is_done: 0,
    step: [''],
  }
)

function saveTask() {

  isLoading.value = true
  axios.post('http://127.0.0.1:8000/api/v1/task', {
    "title": projectData.value.title,
    "deadline": projectData.value.deadline,
    "is_done": projectData.value.is_done,
    "summary": projectData.value.summary,
    "step": projectData.value.step
  },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(() => {
    rouer.replace('/')
  }).catch((err) => {
    console.log(err)
  }).finally(() => {
    isLoading.value = false
  })


}

function addStep() {
  projectData.value.step.push('')
}
</script>