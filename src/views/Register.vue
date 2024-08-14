<script setup>
import axios from 'axios';
import FillButtonComp from '../components/FillButtonComp.vue';
import { RouterLink, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { ref } from 'vue';

const router = useRouter()

const registerData = ref({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

const isLoading = ref(false)

function handleRegister() {
  isLoading.value = true
  axios.post('http://127.0.0.1:8000/api/v1/register', {
    "name": registerData.value.name,
    "email": registerData.value.email,
    "password": registerData.value.password,
    "password_confirmation": registerData.value.passwordConfirmation,
  },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((res) => {
    localStorage.setItem('token', res.data.token)
    toast.success(`Hello, ${res.data.user.name}!`)
    router.replace('/')
  }).catch((err) => {
    toast.error(`Failed to register, Try Again!`)
  }).finally(() => {
    isLoading.value = false
  })
}
</script>

<template>
  <div class="max-w-[400px] w-full">
    <h1 class="text-5xl text-center mb-8">
      Register
    </h1>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Name
      </label>
      <input v-model="registerData.name" type="text"
        class=" block w-full bg-transparent border-0 rounded-lg ring-1 ring-inset ring-zinc-400 focus:ring-2 focus:ring-emerald-500 focus:ring-inset p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Email
      </label>
      <input v-model="registerData.email" type="email"
        class=" block w-full bg-transparent border-0 rounded-lg ring-1 ring-inset ring-zinc-400 focus:ring-2 focus:ring-emerald-500 focus:ring-inset p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Password
      </label>
      <input v-model="registerData.password" type="password"
        class=" block w-full bg-transparent border-0 rounded-lg ring-1 ring-inset ring-zinc-400 focus:ring-2 focus:ring-emerald-500 focus:ring-inset p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <label class="block text-zinc-300 mb-2 text-xs">
        Confirm Password
      </label>
      <input v-model="registerData.passwordConfirmation" type="password"
        class=" block w-full bg-transparent border-0 rounded-lg ring-1 ring-inset ring-zinc-400 focus:ring-2 focus:ring-emerald-500 focus:ring-inset p-2 text-xs mx-auto">
    </div>
    <div class="max-w-[320px] w-full mx-auto mb-5">
      <FillButtonComp buttonStyle="primary" :isLoading="isLoading" :onClickAction="handleRegister">
        Register
      </FillButtonComp>
    </div>
    <div class="max-w-[320px] w-full mx-auto flex gap-2 justify-center text-xs text-center">
      Already Registered?
      <RouterLink to="/login" class="text-emerald-500 text-xs">
        Login here!
      </RouterLink>
    </div>
  </div>
</template>
