import { ref } from "vue"
import { defineStore } from "pinia"

export const useOpenModal = defineStore('openModal', () => {
  const isModalOpen = ref(false)
  const modalMsg = ref('')
  const closeModal = () => {
    isModalOpen.value = false
  }
  const openModal = (paramMsg) => {
    isModalOpen.value = true
    modalMsg.value = paramMsg
  }

  return { isModalOpen, openModal, closeModal,modalMsg }


})