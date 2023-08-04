<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CardProject from './components/CardProject.vue'
</script>

<template>
  <div class="bg-neutral-950 flex flex-col justify-center items-center w-full min-h-screen gap-10 p-20">
    <h1 class="text-6xl text-white font-bold">Simple Project Planner</h1>

    <!-- tampilan card bila BELUM selesai projectnya -->
    <CardProject>
      <template #title>
        Belajar Vue JS 3
      </template>
      <template #deadline>
        05 Mei 2023
      </template>
      <template #deadlineLeft>
        11 Hari
      </template>
      <template #body>
        {{ ` When used with Vue <2.7, you need to install the @vue/composition-api plugin. You can learn how to do that
          here. Once this is done, you can proceed with the below.`}} </template>
          <template #prepNeeded>
            <div class="text-white text-sm mt-6 px-5 flex justify-between items-center">
              <div>
                <div>Preperation Needed: </div>
                <ul class="list-disc">
                  <li>Satu satu satu</li>
                  <li>Dua dua dua</li>
                  <li>Tiga tiga tiga</li>
                </ul>
              </div>
              <div class="w-1/3">
                <h1 class="w-full p-2 text-center text-lg rounded-full bg-rose-500 border-[0.8px] border-rose-300">
                  Belum Selesai
                </h1>
                <div class="flex mt-2 items-center justify-center gap-2">
                  <h1
                    class="flex-1 p-2 text-center text-sm rounded-full bg-emerald-500 border-[0.8px] border-emerald-300 hover:bg-opacity-30 cursor-pointer">
                    Selesaikan
                  </h1>
                  <div
                    class="border-[0.8px] border-neutral-700 flex-1 p-2 rounded-full hover:bg-opacity-30 cursor-pointer hover:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash mx-auto" width="16"
                      height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
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
          </template>
    </CardProject>

    <!-- tampilan card bila SUDAH selesai projectnya -->
    <CardProject>
      <template #title>
        Belajar Pinia
      </template>
      <template #deadline>
        25 Mei 2023
      </template>
      <template #deadlineLeft>
        31 Hari
      </template>
      <template #body>
        complicated classes you want to add to your project that you do still like Use the components layer
        Vuelidate is considered model-based because the validation rules are defined next to your data, and the
        validation tree structure matches the data model structure.
      </template>
      <template #prepNeeded>
        <div class="text-white text-sm mt-6 px-5 flex justify-between items-center">
          <div>
            <div>Preperation Needed: </div>
            <ul class="list-disc">
              <li>Satu satu satu</li>
              <li>Dua dua dua</li>
              <li>Tiga tiga tiga</li>
            </ul>
          </div>
          <div class="w-1/3">
            <h1 class="w-full p-2 text-center text-lg rounded-full bg-emerald-500 border-[0.8px] border-emerald-300">
              Selesai
            </h1>
            <div class="flex mt-2 items-center justify-center gap-2">
              <div
                class="border-[0.8px] border-neutral-700 flex-1 p-2 rounded-full hover:bg-opacity-30 cursor-pointer hover:bg-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash mx-auto" width="16"
                  height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
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
      </template>
    </CardProject>
  </div>
</template>

<style scoped></style>
