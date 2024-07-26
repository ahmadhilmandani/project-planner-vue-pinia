import { ref } from "vue"
import { defineStore } from "pinia"

export const useOpenModal = defineStore('openModal', () => {
  const isModalOpen = ref(false)
  const closeModal = () => {
    isModalOpen.value = false
  }
  const openModal = () => {
    isModalOpen.value = true
  }

  return { isModalOpen, openModal, closeModal }


})