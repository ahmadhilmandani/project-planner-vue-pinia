<script>
import CardProject from '../components/CardProject.vue'
import { useProjectStore } from '../stores/useProjectStore';

export default {
  setup() {
    const projects = useProjectStore()
    return { projects }
  },
  components: { CardProject }
}
</script>

<template>
  <div class="bg-neutral-800 flex flex-col justify-center items-center w-[calc(100%_-_240px)] min-h-screen gap-10 px-10 py-24">
  </div>
</template>