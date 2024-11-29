import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/distilleries',
      name: 'distilleries',
      component: () => import('../views/DistilleriesView.vue'),
    },
    {
      path: '/distilleries/:id',
      name: 'distillery',
      component: () => import('../views/DistilleryView.vue'),
    }
  ],
})

export default router
