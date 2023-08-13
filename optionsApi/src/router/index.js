import { createRouter, createWebHistory } from 'vue-router'
import AllView from '../views/AllView.vue'
import DoneView from '../views/DoneView.vue'
import OnProgressView from '../views/OnProgressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: AllView,
      props: { newsletterPopup: false }
    },
    {
      path: '/done',
      name: 'done',
      component: DoneView
    },
    {
      path: '/on-progress',
      name: 'on-progress',
      component: OnProgressView
    }
  ]
})

export default router
