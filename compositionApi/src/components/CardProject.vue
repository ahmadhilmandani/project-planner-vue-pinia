<script>
export default {
  props: ['isDone'],
  methods: {
    toogleIsDone() {
      this.$emit("toogleIsDone")
    },
    deleteProject() {
      this.$emit("deleteProject")
    }
  }
}

</script>

<template>
  <div class="bg-neutral-900 border-[0.8px] border-neutral-800 w-[560px] rounded-tr-3xl px-4 py-8">
    <div class="flex gap-8 items-center">
      <h1 class="text-2xl text-white bg-neutral-800 px-5 py-2 rounded-full w-fit">
        <slot name="title"></slot>
      </h1>
      <div class="flex text-white items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-due" width="20" height="20"
          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M16 3v4"></path>
          <path d="M8 3v4"></path>
          <path d="M4 11h16"></path>
          <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <p class="text-sm">
          <slot name="deadline"></slot>
        </p>
      </div>
      <p class="text-xs text-neutral-400">
        <slot name="deadlineLeft"></slot>
        hari lagi
      </p>
    </div>

    <div class="text-white text-sm mt-5 p-5 border-t-[0.8px] border-b-[0.8px] border-neutral-700">
      <div class="text-sm text-neutral-700 mb-2">
        Deskripsi :
      </div>
      <p>
        <slot name="body"></slot>
      </p>
    </div>

    <div class="text-white text-sm mt-6 px-5 flex justify-between items-center">
      <div>
        <div>Langkah penyelesaian project </div>
        <slot name="thingsToDo">
        </slot>
      </div>
      <div class="w-1/3">
        <h1 v-if="isDone"
          class="cursor-default p-2 text-center text-sm rounded-full bg-emerald-500 border-[0.8px] border-emerald-300">
          Selesai
        </h1>
        <h1 v-else class="cursor-default p-2 text-center text-lg rounded-full bg-rose-500 border-[0.8px] border-rose-300">
          Belum Selesai
        </h1>
        <div class="flex mt-2 items-center justify-center gap-2">
          <h1 v-if="isDone === false"
            class="flex-1 p-2 text-center text-sm rounded-full bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-30 cursor-pointer"
            @click="toogleIsDone">
            Selesaikan
          </h1>
          <div
            class="border-[0.8px] border-neutral-700 flex-1 p-2 rounded-full hover:bg-opacity-30 cursor-pointer hover:bg-neutral-700"
            @click="deleteProject">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash mx-auto" width="16"
              height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
