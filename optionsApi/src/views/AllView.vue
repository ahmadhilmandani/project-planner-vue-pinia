<script>
import CardProject from '../components/CardProject.vue'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      projectsList: JSON.parse(localStorage.getItem("projectsList"))
    }
  },
  components: {
    CardProject
  },
  methods: {
    toogleIsDone(index) {
      this.projectsList[index].isDone = false
      localStorage.setItem("projectsList", JSON.stringify(this.projectsList))
    }
  }
}

</script>

<template>
  <div class="bg-neutral-950 flex flex-col justify-center items-center w-full min-h-screen gap-10 p-10">
    <h1 class="text-6xl text-white font-bold">Simple Project Planner</h1>
    <div v-for="(project, index) in projectsList">
      <CardProject :isDone="project.isDone" @toogleIsDone="() => { toogleIsDone(project.id - 1) }">
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
