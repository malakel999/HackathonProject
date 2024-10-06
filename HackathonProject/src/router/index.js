import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import description from '@/components/description.vue'
import SolarSystem from '@/components/SolarSystem.vue'
import CosmicGaming from '@/components/CosmicGaming.vue'
import CosmicQuiz from '@/components/CosmicQuiz.vue'
// import Test from "@/components/icons/Test.vue"
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
  },
  {
    path: '/CosmicGaming',
  name: 'CosmicGaming',
  component: CosmicGaming,
  },
  {
    path: '/CosmicQuiz',
    name: 'CosmicQuiz',
    component: CosmicQuiz,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
