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
    },
    test() {
      localStorage.setItem("projectsList", JSON.stringify([
        {
          id: "1",
          title: "Belajar Pinia",
          deadline: "05 Desember 2023",
          deadlineLeft: "11 Hari",
          body: "When used with Vue <2.7, you need to install the @vue/composition-api plugin. You can learn how to do that here. Once this is done, you can proceed with the below.",
          thingsToDo: [
            "Vue JS basic",
            "Kuota Internet",
            "Kopi",
          ],
          isDone: false
        },
        {
          id: "2",
          title: "Belajar Supabase",
          deadline: "27 Januari 2024",
          deadlineLeft: "42 Hari",
          body: "complicated classes you want to add to your project that you do still like Use the components layer Vuelidate is considered model-based because the validation rules are defined next to your data, and the validation tree structure matches the data model structure.",
          thingsToDo: [
            "Vue JS basic",
            "Pinia",
            "Kuota Internet",
            "Kopi",
          ],
          isDone: false
        },
      ]))
    }
  }
}

</script>

<template>
  <div>
    <!-- <div class="fixed top-0 bottom-0 left-0 right-0 bg-blue-500 z-[99]" @click="test"></div> -->
    <SidebarNav />
    <TopbarNav />
    <router-view />
  </div>
</template>

<style scoped></style>
