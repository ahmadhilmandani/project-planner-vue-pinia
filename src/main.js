import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { updateGlobalOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

import '../node_modules/flowbite-vue/dist/index.css'

const app = createApp(App)

updateGlobalOptions({
  autoClose: 3500,
  toastStyle: {
    color: 'black !important',
    fontSize: '12px',
    zIndex: '1000000000000000000000000000000000000'
  },
  clearOnUrlChange: false
})

app.use(router)
app.use(createPinia())

app.mount('#app')
