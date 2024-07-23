import { createRouter, createWebHistory } from 'vue-router'
import AllProject from '../views/AllProject.vue'
import Done from '../views/Done.vue'
import OnProgress from '../views/OnProgress.vue'
import MainLayout from '../layouts/MainLayout.vue'
import DetailProject from '../views/DetailProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'all',
          component: AllProject
        },
        {
          path: '/projects/:id',
          name: 'detail-projects',
          component: DetailProject
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
    }
  ]
})

export default router
