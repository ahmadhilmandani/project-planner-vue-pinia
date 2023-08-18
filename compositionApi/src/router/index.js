import { createRouter, createWebHistory } from 'vue-router'
import AllProject from '../views/AllProject.vue'
import Done from '../views/Done.vue'
import OnProgress from '../views/OnProgress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: AllProject
    },
    {
      path: '/done',
      name: 'done',
      component: Done
    },
    {
      path: '/on-progress',
      name: 'OnProgress',
      component: OnProgress
    }
  ]
})

export default router
