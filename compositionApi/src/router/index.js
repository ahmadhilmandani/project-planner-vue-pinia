import { createRouter, createWebHistory } from 'vue-router'
import AllProject from '../views/AllProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: AllProject
    }
  ]
})

export default router
