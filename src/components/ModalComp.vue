<template>
  <div
    class="w-full h-screen flex justify-center items-center bg-neutral-950/90 fixed top-0 bottom-0 right-0 left-0 z-[999999999999999]">
    <div class="w-[400px] bg-neutral-700 px-10 py-5 rounded-xl shadow-2xl text-center">
      <h1>
        Anda Yakin Ingin Menyelesaikan Proyek?
      </h1>

      <div class="mt-5">
        <OutlineButtonComp :onClickAction="openModal.closeModal">
          Tidak
        </OutlineButtonComp>
      </div>
      <div class="mt-3">
        <FillButtonComp buttonStyle="primary" :onClickAction="fillButtonAction">
          Iya
        </FillButtonComp>
      </div>
    </div>

  </div>
</template>

<script setup>
import FillButtonComp from './FillButtonComp.vue'
import OutlineButtonComp from './OutlineButtonComp.vue'
import { useOpenModal } from '../stores/openModalStore'

defineProps({
  fillButtonAction: Function
})

const openModal = useOpenModal()
</script>