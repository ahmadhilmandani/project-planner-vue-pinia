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
  <div class="bg-neutral-950 flex flex-col justify-center items-center w-full min-h-screen gap-10 px-10 py-24">
    <h1 class="text-6xl text-white font-bold">Simple Project Planner</h1>
    <div v-for="project in projects.objProjects">
      <CardProject :isDone="project.isDone"
        @toogleIsDone="() => { projects.toogleIsDone(projects.objProjects, project.id) }"
        @deleteProject="() => { projects.deleteProject(projects.objProjects, project.id) }">
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
          <ol v-if="project.stepToDo.length != 0" v-for="(thingTodo, index) in project.stepToDo">
            <li>{{ (++index) + ". " + thingTodo }}</li>
          </ol>
          <ol v-else>
            <li>-</li>
          </ol>
        </template>
      </CardProject>
    </div>
  </div>
</template>