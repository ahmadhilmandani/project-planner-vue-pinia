<template>
  <button @click="onClickAction" class="flex items-center justify-center px-3 py-2 w-full rounded-full" 
  :class="buttonStyle == 'primary' ? 'bg-emerald-500'
    : buttonStyle == 'danger' ? 'bg-rose-500'
      : buttonStyle == 'warning' ? 'bg-amber-600'
      : 'bg-neutral-700'"
        >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  buttonStyle: String,
  onClickAction: Function,
})
</script>
