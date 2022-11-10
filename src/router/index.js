import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/views/Product.vue'),
    props: true
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue'),
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('@/views/User/UserProduct.vue')
      },
      {
        path: 'edit',
        name: 'UserEdit',
        component: () => import('@/views/User/UserEdit.vue')
      },
      {
        path: 'shopping',
        name: 'UserShop',
        component: () => import('@/views/User/UserShop.vue')
      },
      {
        path: 'selling',
        name: 'UserSell',
        component: () => import('@/views/User/UserSell.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    scrollTo({ top: 0, behavior: 'smooth' });
  }
})

export default router
