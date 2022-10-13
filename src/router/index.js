import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
//import Login from '../views/Login.vue';
//import Product from '../views/Product.vue';
//import User from '../views/User.vue';
//import UserProduct from '../views/User/UserProduct.vue';
import UserShop from '../views/User/UserShop.vue';
import UserSell from '../views/User/UserSell.vue';
//import UserEdit from '../views/User/UserEdit.vue';

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
        //component: UserProduct
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
        component: UserShop
      },
      {
        path: 'selling',
        name: 'UserSell',
        component: UserSell
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
