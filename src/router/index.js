import { createRouter, createWebHistory } from 'vue-router'
import AllProject from '../views/AllProject.vue'
import Done from '../views/Done.vue'
import OnProgress from '../views/OnProgress.vue'
import MainLayout from '../layouts/MainLayout.vue'
import DetailProject from '../views/DetailProject.vue'
import AddProjects from '../views/AddProjects.vue'
import Login from '../views/Login.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
      ]
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
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
        },
        {
          path: '/add-task',
          name: 'AddTask',
          component: AddProjects
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        }
      ]
    }
  ]
})

export default router
