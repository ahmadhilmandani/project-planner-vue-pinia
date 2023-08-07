<script>
  import CardProject from './components/CardProject.vue'
export default {
  data() {
    return {
      projectsList: [
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
          isDone: true
        },
      ]
    }
  },
  components: {
    CardProject
  }
}

</script>

<template>
  <div class="bg-neutral-950 flex flex-col justify-center items-center w-full min-h-screen gap-10 p-20">
    <h1 class="text-6xl text-white font-bold">Simple Project Planner</h1>

    <div v-for="project in projectsList">
      <CardProject :isDoneProps="project.isDone">
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
</template>

<style scoped></style>
