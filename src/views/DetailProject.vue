<script setup>
import { IconCalendarDue } from '@tabler/icons-vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import { useOpenModal } from '../stores/openModalStore'

import ModalComp from '../components/ModalComp.vue'
import FillButtonComp from '../components/FillButtonComp.vue'
import OutlineButtonComp from '../components/OutlineButtonComp.vue'

const id = useRoute().params.id

const openModal = useOpenModal()

const isEditMode = ref(false)
const projectData = ref(null)
const isLoading = ref(true)


function changeStatus(paramsStatusVal) {
  isLoading.value = true
  axios.put(`http://127.0.0.1:8000/api/v1/change-status/task/${id}`, {
    is_done: paramsStatusVal
  }).then((res) => {
    projectData.value = res.data.data
  }).catch((err) => {
    console.log(err)
  }).finally(() => {
    isLoading.value = false
    openModal.closeModal()
  })
}

function saveEdit() {
  isLoading.value = true
  axios.put(`http://127.0.0.1:8000/api/v1/task/${id}`, {
    "title": projectData.value.title,
    "summary": projectData.value.summary,
    "deadline": projectData.value.deadline,
    "is_done": projectData.value.is_done,
  },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(() => {
    isEditMode.value = false
  }).catch((err) => {
    console.log(err)
  }).finally(() => {
    isLoading.value = false
  })

}

onMounted(() => {
  axios.get(`http://127.0.0.1:8000/api/v1/task/${id}`)
    .then((res) => {
      projectData.value = res.data.data
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      isLoading.value = false
    })
})
</script>

<template>
  <ModalComp v-if="openModal.isModalOpen" :fillButtonAction="() => { changeStatus(1) }" />

  <div v-if="isLoading"
    class="bg-neutral-950 absolute top-0 right-0 left-0 bottom-0 z-[1000000000000] opacity-80 flex justify-center items-center text-white">
    Loading..
  </div>

  <main v-else class="bg-neutral-800 min-h-screen p-10 flex-1 flex justify-between relative">
    <div class="w-[65%]">
      <small class="text-neutral-400">
        All > See Detail Projects
      </small>
      <header>
        <input :readonly="!isEditMode"
          :class="isEditMode ? 'border-b border-neutral-600 focus:border-emerald-500' : 'border-0'"
          class="text-5xl mt-3 mb-8 block bg-transparent bebas-neue-font outline-0" v-model="projectData.title" />
      </header>
      <section class="flex items-center gap-10">
        <div class="flex text-white items-center gap-2">
          <IconCalendarDue />
          <input type="date" :readonly="!isEditMode"
            :class="isEditMode ? 'border-b border-neutral-600 focus:border-emerald-500' : 'border-0'"
            class="text-sm block bg-transparent outline-0" v-model="projectData.deadline" />
        </div>
        <p class="text-sm">
          30 hari lagi
        </p>
        <small v-if="!isEditMode" class="py-1 px-3 text-center rounded-full w-fit"
          :class="projectData.is_done ? 'bg-emerald-500' : 'bg-rose-500'">
          {{ projectData.is_done ? 'Selesai' : 'Belum selesai' }}
        </small>
        <div v-else class="flex gap-3 items-center">
          <small>
            Apakah selesai?
          </small>
          <small @click="() => { projectData.is_done = 1 }" :class="projectData.is_done == 1 ? 'bg-emerald-500' : ''"
            class="py-1 px-3 text-center cursor-pointer transition-all rounded-full w-fit border border-emerald-500">
            Iya
          </small>
          <small @click="projectData.is_done = 0" :class="projectData.is_done == 0 ? 'bg-rose-500' : ''"
            class="py-1 px-3 text-center cursor-pointer transition-all rounded-full w-fit border border-rose-500">
            Belum
          </small>
        </div>
      </section>

      <h2 class="mt-8 mb-3 text-2xl">
        Deksripsi
      </h2>
      <div>
        <textarea :readonly="!isEditMode"
          :class="isEditMode ? 'border-b border-neutral-600 focus:border-emerald-500' : 'border-0'"
          class="text-sm block bg-transparent outline-0 w-full" v-model="projectData.summary">
        </textarea>
      </div>

      <h2 class="mt-8 mb-3 text-2xl">
        Fitur
      </h2>
      <ul>
        <li v-for="(valueOfStep, index) in projectData.task_step"
          class="list-inside list-decimal flex items-center gap-4">
          {{ index + 1 }}
          <textarea :readonly="!isEditMode"
            :class="isEditMode ? 'border-b border-neutral-600 focus:border-emerald-500' : 'border-0'"
            class="text-sm block bg-transparent outline-0 w-full" v-model="valueOfStep.description">
          </textarea>
        </li>
      </ul>
    </div>

    <aside class="border w-[25%] border-neutral-700 p-5 h-fit fixed right-10">
      <div v-if="!isEditMode">
        <div class="mb-5" v-if="projectData.is_done == 0">
          <FillButtonComp buttonStyle="primary" :onClickAction="openModal.openModal">
            Selesaikan
          </FillButtonComp>
        </div>
        <div class="flex gap-5">
          <OutlineButtonComp :onClickAction="() => { isEditMode = true }" buttonStyle="warning">
            Edit
          </OutlineButtonComp>
          <OutlineButtonComp buttonStyle="danger">
            Delete
          </OutlineButtonComp>
        </div>
      </div>
      <div v-else>
        <FillButtonComp buttonStyle="primary" :onClickAction="() => { saveEdit() }">
          Simpan
        </FillButtonComp>
        <div class="mt-3">
          <OutlineButtonComp buttonStyle="danger" :onClickAction="() => { isEditMode = false }">
            Batal
          </OutlineButtonComp>
        </div>
      </div>
    </aside>
  </main>
</template>