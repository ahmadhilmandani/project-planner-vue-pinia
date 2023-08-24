<script>
import { IconPlus } from '@tabler/icons-vue';
import { useProjectStore } from '../stores/useProjectStore';
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators'
import { computed } from 'vue';

export default {
  setup() {
    const projects = useProjectStore()

    let title = computed({
      set(newValue) {
        projects.changeState('title', newValue)
      },
      get() {
        return projects.getState.title
      }
    })

    let deadline = computed({
      set(newValue) {
        projects.changeState('deadline', newValue)
      },
      get() {
        return projects.getState.deadline
      }
    })

    const rules = () => {
      return {
        title: {
          required: helpers.withMessage('Judul harus diisi, ya!', required),
        },
        deadline: {
          required: helpers.withMessage('Biar ga telat.. mending dikasih deadline!', required),
        },
      };
    };

    const v$ = useVuelidate(rules, {
      title,
      deadline,
    });

    v$.value.$touch()

    const addingProject = async () => {
      projects.loading = true

      if (!v$.value.$invalid) {
        projects.addProjects()
      }

      projects.loading = false
    }

    return { projects, v$, addingProject }

  },
  components: { IconPlus }
}
</script>

<template>
  <aside
    class="bg-neutral-900 border-[0.8px] border-t-0 border-neutral-800 p-5 h-screen w-[320px] fixed top-0 bottom-0 left-0 overflow-y-auto z-[20000]">
    <form class="border-[0.8px] border-neutral-800 w-full min-h-full p-5">
      <h1 class="text-xl">Tambah project</h1>

      <div class="mt-5 mb-5">
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="title">Judul
          project <span class="text-rose-400 font-semibold">*</span></label>
        <input v-model="projects.title" type="text" id="title"
          class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-sm">
        <div v-if="v$.title.$error">
          <div v-for="error of v$.title.$errors" :key="error.$uid">
            <div class="text-xs text-rose-400 mt-2 mb-5">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="deadline">Tenggat
          waktu <span class="text-rose-400 font-semibold">*</span></label>
        <input v-model="projects.deadline" type="date" id="deadline"
          class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-black invert text-sm" />
        <div v-if="v$.deadline.$error">
          <div v-for="error of v$.deadline.$errors" :key="error.$uid">
            <div class="text-xs text-rose-400 mt-2 mb-5">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="description">Deskripsi</label>
        <input v-model="projects.description" type="textarea" id="description"
          class="w-full border-[0.8px] border-neutral-700 outline-none bg-transparent text-sm h-40">
      </div>

      <div>
        <label class="block bg-transparent mb-2 text-sm whitespace-nowrap" for="step">Langkah</label>
        <div v-for="number in projects.numbersOfstep">
          <input type="text" id="step" :value="null"
            class="w-full border-b-[0.8px] border-neutral-700 outline-none bg-transparent text-sm"
            @change="(e) => { projects.handleStep(e) }">
        </div>
        <div v-if="projects.isStepError">
          <div class="text-xs text-rose-400 mt-2 mb-5">
            Langkah diatas masih kosong nih, isi dulu aja!
          </div>
        </div>
        <div class="flex items-center mt-2 gap-x-2 group">
          <IconPlus color="white" :size="20" stroke-width="1.4" class=" group-hover:opacity-60" />
          <button type="button" class="text-xs group-hover:opacity-60" @click="projects.addNumbersOfstepStep">tambah
            langkah</button>
        </div>
      </div>

      <button type="submit" class="w-full block mt-10" @click.prevent="addingProject">
        <h1
          class="p-1 text-lg text-center rounded-full bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-30 cursor-pointer">
          Tambah
        </h1>
      </button>
    </form>
  </aside>
</template>