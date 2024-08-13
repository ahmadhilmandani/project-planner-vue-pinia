<script setup>
import FillButtonComp from '../components/FillButtonComp.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="max-w-[400px] w-full">
    <h1 class="text-5xl text-center mb-8">
      login
    </h1>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Username
      </label>
      <input type="text"
        class=" block w-full bg-transparent border rounded-lg border-zinc-400 focus:border-emerald-500 focus:outline-none p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Password
      </label>
      <input type="password"
        class=" block w-full bg-transparent border rounded-lg border-zinc-400 focus:border-emerald-500 focus:outline-none p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <FillButtonComp buttonStyle="primary">
        Login
      </FillButtonComp>
    </div>
    <div class="max-w-[320px] w-full mx-auto flex gap-2 justify-center text-xs text-center">
      Not Register yet?
      <RouterLink to="/register" class="text-emerald-500">
        Register here
      </RouterLink>
    </div>
  </div>
</template>
