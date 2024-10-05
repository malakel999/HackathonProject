import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import description from '@/components/description.vue'
import SolarSystem from '@/components/SolarSystem.vue'
const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'description',
    component: description,

  },
  {
    path: '/SolarSystem',
  name: 'SolarSystem',
  component: SolarSystem,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
