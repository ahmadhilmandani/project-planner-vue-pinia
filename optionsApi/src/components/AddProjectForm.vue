<script>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { IconPlus } from '@tabler/icons-vue';
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      title: '',
      deadline: '',
      description: '',
      step: [],
      isLoading: false,
      numbers: 1,
      isStepError: false,
    };
  },
  validations: {
    title: { required: helpers.withMessage('Judul harus diisi, ya!', required) },
    deadline: { required: helpers.withMessage('Biar bisa diingetin, isi dulu, ya!', required) }
  },
  methods: {
    async handleAddProject() {
      this.isLoading = true
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        let projectsList = JSON.parse(localStorage.getItem("projectsList"))
        const timeDifference = new Date(this.deadline) - new Date();

        if (projectsList == null || projectsList[0] == null) {
          projectsList = [{ id: 1, title: this.title, body: this.description, deadline: this.deadline, deadlineLeft: Math.floor(timeDifference / (24 * 60 * 60 * 1000)), thingsToDo: this.step, isDone: false }]
          localStorage.setItem("projectsList", JSON.stringify(projectsList))
        }
        else {
          projectsList.push({ id: (projectsList[projectsList.length - 1].id + 1), title: this.title, body: this.description, deadline: this.deadline, deadlineLeft: Math.floor(timeDifference / (24 * 60 * 60 * 1000)), thingsToDo: this.step, isDone: false })
          localStorage.setItem("projectsList", JSON.stringify(projectsList))
        }
        location.reload();
      }
    },
    addStep() {
      if (this.step.length < this.numbers)
        return this.isStepError = true

      this.numbers++
      this.isStepError = false
    },
    handleStep(e, number) {
      if (e.target.value !== '' || e.target.value !== null || e.target.value !== undefined) {
        if (this.step.length >= number)
          return this.step[number] = e.target.value

        this.step.push(e.target.value)
      }
    }
  },
  components: {
    IconPlus
  }
}
</script>



<template>
  <form action="" class="bg-neutral-900 border-[0.8px] border-neutral-800 px-10 py-5 text-white"
    @submit.prevent="handleAddProject">
    <h1 class="text-xl mb-4">Tambah project</h1>

    <div class="mb-5">
      <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="title">Judul
        project</label>
      <input v-model="title" type="text" ref="title" id="title"
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
      <input v-model="deadline" type="date" ref="deadline" id="deadline"
        class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-black invert text-sm" />
      <div v-if="v$.deadline.$error">
        <div v-for="error of v$.deadline.$errors" :key="error.$uid">
          <div class="text-xs text-rose-400 mt-2 mb-5">{{ error.$message }}</div>
        </div>
      </div>
    </div>


    <div class="mb-5">
      <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="description">Deskripsi</label>
      <input v-model="description" type="textarea" ref="description" id="description"
        class="w-full border-[0.8px] border-neutral-700 outline-none bg-transparent text-sm h-40">
    </div>

    <div ref="stepContainer">
      <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="step">Langkah</label>
      <div v-for="number in numbers">
        <input :v-model="stepInput" type="text" id="step" :ref="`step_${number}`" :value="null"
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
</template>
