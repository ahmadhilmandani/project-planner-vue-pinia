<script>
import CardProject from './components/CardProject.vue'
import SidebarNav from './components/SidebarNav.vue'
import TopbarNav from './components/TopbarNav.vue'

export default {
  data() {
    return {
      projectsList: localStorage.getItem("projectsList")
    }
  },
  components: {
    CardProject,
    SidebarNav,
    TopbarNav
  },
  methods: {
    toogleIsDone(index) {
      this.projectsList[index].isDone = true
      console.log(this.projectsList[index].isDone)
    }
  }
}

</script>

<template>
  <div>
    <SidebarNav />
    <TopbarNav />
    <router-view />
  </div>
</template>

<style scoped></style>
