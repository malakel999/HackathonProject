import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import description from '@/components/description.vue'
import SolarSystem from '@/components/SolarSystem.vue'
import vis2d  from '@/components/vis2d.vue'
import quiz from '@/components/quiz.vue'
import ftr from '@/components/ftr.vue'
import game from '@/components/game.vue'
import prediction from '@/components/prediction.vue'
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
    children:[{
      path: '/vis2d',
      name :'vis2d',
      component: vis2d,
    },
    {
      path: '/quiz',
      name :'quiz',
      component: quiz,
    },{
      path: '/prediction',
      name :'prediction',
      component: prediction,
    },
    {
      path: '/game',
      name :'game',
      component: game,
    },
    {
      path: '/ftr',
      name :'ftr',
      component: ftr,
    }
  ]

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
