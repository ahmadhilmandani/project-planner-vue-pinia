<template>
  <button @click="onClickAction" class="flex items-center justify-center px-3 py-2 w-full rounded-full border" 
  :class="buttonStyle == 'primary' ? 'border-emerald-400 text-emerald-400'
    : buttonStyle == 'danger' ? 'border-rose-400 text-rose-400'
      : buttonStyle == 'warning' ? 'border-amber-400 text-amber-400'
      : 'border-white text-white'"
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
