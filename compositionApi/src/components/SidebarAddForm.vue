<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { IconPlus } from '@tabler/icons-vue';

export default {
  setup() {

    let title = ref(null)
    let deadline = ref(null)
    let description = ref('')
    let stepToDo = ref([])
    let numbersOfstep = ref(1)
    let isStepError = ref(false)
    let isLoading = ref(false)

    const rules = {
      title: { required: helpers.withMessage('Judul harus diisi, ya!', required) },
      deadline: { required: helpers.withMessage('Isi aja, ya.. biar bisa diingetin!', required) },
    }

    const handleStep = (e, number) => {
      if (e.target.value !== '' || e.target.value !== null || e.target.value !== undefined) {
        if (stepToDo.value.length >= number)
          return stepToDo.value[number] = e.target.value

          stepToDo.value.push(e.target.value)
      }
    }

    const addStep = () => {
      if (stepToDo.value.length < numbersOfstep.value)
        return isStepError.value = true

      numbersOfstep.value = numbersOfstep.value + 1
      isStepError.value = false
    }

    const v$ = useVuelidate(rules, { title, deadline, description, stepToDo })

    return { v$, title, deadline, description, stepToDo, numbersOfstep, isStepError, handleStep, addStep }

  },
  methods: {
    async handleAddProject() {
      const isFormCorrect = await this.v$.$validate()
      this.isLoading = true

      if (isFormCorrect) {
        let projects = JSON.parse(localStorage.getItem("projects"))
        const timeDifference = new Date(this.deadline) - new Date();

        if (projects == null || projects[0] == null) {
          projects = [{ id: 1, title: this.title, body: this.description, deadline: this.deadline, deadlineLeft: Math.floor(timeDifference / (24 * 60 * 60 * 1000)), stepToDo: this.stepToDo, isDone: false }]
          localStorage.setItem("projects", JSON.stringify(projects))
        }
        else {
          projects.push({ id: (projects[projects.length - 1].id + 1), title: this.title, body: this.description, deadline: this.deadline, deadlineLeft: Math.floor(timeDifference / (24 * 60 * 60 * 1000)), stepToDo: this.stepToDo, isDone: false })
          localStorage.setItem("projects", JSON.stringify(projects))
        }
        location.reload();
      }
      this.isLoading = false
    }
  },
  components: { IconPlus }
}
</script>

<template>
  <aside
    class="bg-neutral-900 border-[0.8px] border-t-0 border-neutral-800 p-5 h-screen w-[320px] fixed top-0 bottom-0 left-0 overflow-y-auto z-[20000]">
    <form class="border-[0.8px] border-neutral-800 w-full min-h-full p-5" @submit.prevent="handleAddProject">
      <h1 class="text-xl">Tambah project</h1>

      <div class="mb-5">
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="title">Judul
          project</label>
        <input v-model="title" type="text" id="title"
          class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-sm">
        <div v-if="v$.title.$error">
          <div v-for="error of v$.title.$errors" :key="error.$uid">
            <div class="text-xs text-rose-400 mt-2 mb-5">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="deadline">Tenggat
          waktu</label>
        <input v-model="deadline" type="date" id="deadline"
          class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-black invert text-sm" />
        <div v-if="v$.deadline.$error">
          <div v-for="error of v$.deadline.$errors" :key="error.$uid">
            <div class="text-xs text-rose-400 mt-2 mb-5">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="description">Deskripsi</label>
        <input v-model="description" type="textarea" id="description"
          class="w-full border-[0.8px] border-neutral-700 outline-none bg-transparent text-sm h-40">
      </div>

      <div>
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="step">Langkah</label>
        <div v-for="number in numbersOfstep">
          <input type="text" id="step" :value="null"
            class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-sm"
            @change="(e) => { handleStep(e, number - 1) }">
        </div>
        <div v-if="isStepError">
          <div class="text-xs text-rose-400 mt-2 mb-5">
            Langkah diatas masih kosong nih, isi dulu aja!
          </div>
        </div>
      </div>
      <div class="flex items-center mt-2 gap-x-2 group">
        <IconPlus color="white" :size="20" stroke-width="1.4" class=" group-hover:opacity-60" />
        <button type="button" class="text-xs group-hover:opacity-60" @click="addStep">tambah langkah</button>
      </div>


      <button type="submit" class="w-full block mt-10">
        <h1
          class="p-1 text-lg text-center rounded-full bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-30 cursor-pointer">
          Tambah
        </h1>
      </button>

    </form>
  </aside>
</template>