<template>
  <button :disabled="isLoading" @click="onClickAction" class="flex items-center justify-center gap-4 px-3 py-2 w-full rounded-full disabled:cursor-not-allowed disabled:bg-opacity-60" 
  :class="buttonStyle == 'primary' ? 'bg-emerald-500'
    : buttonStyle == 'danger' ? 'bg-rose-500'
      : buttonStyle == 'warning' ? 'bg-amber-600'
      : 'bg-neutral-700'"
        >
    <slot></slot>
    <FwbSpinner v-if="isLoading" size="4" class="fill-neutral-800"/>
  </button>
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue';

defineProps({
  buttonStyle: String,
  onClickAction: Function,
  isLoading: Boolean
})
</script>
