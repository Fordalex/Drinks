import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('../views/BrandsView.vue'),
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('../views/CompaniesView.vue'),
    }
  ],
})

export default router
