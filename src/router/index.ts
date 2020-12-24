import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/Home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'Home'
      },
      {
        path: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'Product',
        component: () => import('@/views/Product.vue')
      },
      {
        path: 'Customer',
        component: () => import('@/views/Customer.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
