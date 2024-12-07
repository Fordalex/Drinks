import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard } from "@auth0/auth0-vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: authGuard
    },
    {
      path: '/spirits/:id',
      name: 'spirit',
      component: () => import('../views/SpiritView.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/distilleries',
      name: 'distilleries',
      component: () => import('../views/DistilleriesView.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/distilleries/:id',
      name: 'distillery',
      component: () => import('../views/DistilleryView.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('../views/BrandsView.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('../views/CompaniesView.vue'),
      beforeEnter: authGuard
    },
  ],
})

export default router
