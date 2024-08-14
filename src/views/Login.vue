<script setup>
import FillButtonComp from '../components/FillButtonComp.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const router = useRouter()

function handleLogin() {
  isLoading.value = true
  axios.post('http://127.0.0.1:8000/api/v1/login', {
    "email": email.value,
    "password": password.value
  },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((res) => {
    localStorage.setItem('token', res.data.token)
    toast.success(`Welcome back, ${res.data.user.name}!`)
    router.replace('/')
  }).catch((err) => {
    console.log(err)
    toast.error(`Failed to Login, Try Again!`)
  }).finally(() => {
    isLoading.value = false
  })
}
</script>

<template>
  <div class="max-w-[400px] w-full">
    <h1 class="text-5xl text-center mb-8">
      login
    </h1>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Email
      </label>
      <input @input="(e) => { email = e.target.value }" :value="email" type="email"
        class=" block w-full bg-transparent border rounded-lg border-zinc-400 focus:border-emerald-500 focus:outline-none p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Password
      </label>
      <input @input="(e) => { password = e.target.value }" :value="password" type="password"
        class=" block w-full bg-transparent border rounded-lg border-zinc-400 focus:border-emerald-500 focus:outline-none p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <FillButtonComp buttonStyle="primary" :onClickAction="handleLogin" :isLoading="isLoading">
        Login
      </FillButtonComp>
    </div>
    <div class="max-w-[320px] w-full mx-auto flex gap-2 justify-center text-xs text-center">
      Not Register yet?
      <RouterLink to="/register" class="text-emerald-500 text-xs">
        Register here!
      </RouterLink>
    </div>
  </div>
</template>
