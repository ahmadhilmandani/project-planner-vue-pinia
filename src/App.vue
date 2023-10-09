<script>
import { RouterView } from 'vue-router'
import { IconClick } from '@tabler/icons-vue'
import SidebarAddForm from './components/SidebarAddForm.vue'
import TopNavbar from './components/TopNavbar.vue'

export default {
  components: { IconClick, TopNavbar, SidebarAddForm }
}
</script>

<template>
  <div class="w-full min-h-screen bg-neutral-950">
    <SidebarAddForm />
    <TopNavbar />
    <RouterView />
  </div>
</template>
