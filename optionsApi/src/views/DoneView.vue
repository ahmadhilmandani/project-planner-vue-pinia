<script>
import CardProject from '../components/CardProject.vue'

export default {
  data() {
    return {
      projectsList: JSON.parse(localStorage.getItem("projectsList"))
    }
  },
  components: {
    CardProject,
  },
  methods: {
    toogleIsDone(projectId) {
      for (let index = 0; index < this.projectsList.length; index++) {
        if (this.projectsList[index].id === projectId) {
          this.projectsList[index].isDone = true
          localStorage.setItem("projectsList", JSON.stringify(this.projectsList))
          break;
        }
      }
    },
    deleteProject(projectId) {
      this.projectsList = this.projectsList.filter((project) => {
        return project.id != projectId
      })
      localStorage.setItem("projectsList", JSON.stringify(this.projectsList))
    }
  },
  computed: {
    filteredProjects() {
      return this.projectsList.filter((projectList) => projectList.isDone === true)
    }
  }
}

</script>

<template>
  <div class="bg-neutral-950 flex flex-col justify-center items-center w-full min-h-screen gap-10 px-10 py-24">
    <h1 class="text-6xl text-white font-bold">Simple Project Planner</h1>

    <div v-for="(project, index) in filteredProjects">
      <CardProject :isDone="project.isDone" @toogleIsDone="() => { toogleIsDone(project.id) }"
        @deleteProject="() => { deleteProject(project.id) }">
        <template #title>
          {{ project.title }}
        </template>
        <template #deadline>
          {{ project.deadline }}
        </template>
        <template #deadlineLeft>
          {{ project.deadlineLeft }}
        </template>
        <template #body>
          {{ project.body }}
        </template>
        <template #thingsToDo>
          <ul class="list-disc" v-for="thingTodo in project.thingsToDo">
            <li>{{ thingTodo }}</li>
          </ul>
        </template>
      </CardProject>
    </div>
  </div>
  <router-view />
</template>

<style scoped></style>
