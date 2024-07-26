<script setup>
import { IconCalendarDue } from '@tabler/icons-vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ModalComp from '../components/ModalComp.vue'
import FillButtonComp from '../components/FillButtonComp.vue'
import OutlineButtonComp from '../components/OutlineButtonComp.vue'
import { useOpenModal } from '../stores/openModalStore'

const openModal = useOpenModal()
const projectData = ref(null)
const isLoading = ref(true)
const id = useRoute().params.id

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
onMounted(() => {
  axios.get(`http://127.0.0.1:8000/api/v1/task/${id}`)
    .then((res) => {
      projectData.value = res.data.data
    }).catch((err) => {

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
          {{ projectData.is_done ? 'Selesai' : 'Belum selesai' }}
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

      <div class="mb-5" v-if="projectData.is_done == 0">
        <FillButtonComp buttonStyle="primary" :onClickAction="openModal.openModal" >
          Selesaikan
        </FillButtonComp>
      </div>
      <div class="flex gap-5">
        <RouterLink :to="'/projects/' + projectId" class="block flex-1">
          <OutlineButtonComp buttonStyle="warning">
            Edit
          </OutlineButtonComp>
        </RouterLink>

        <RouterLink :to="'/projects/' + projectId" class="block flex-1">
          <OutlineButtonComp buttonStyle="danger">
            Delete
          </OutlineButtonComp>
        </RouterLink>
      </div>
    </div>

  </div>

</template>