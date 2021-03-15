import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Product from '../views/Product.vue';
import User from '../views/User.vue';
import UserProduct from '../views/User/UserProduct.vue';
import UserShop from '../views/User/UserShop.vue';
import UserSell from '../views/User/UserSell.vue';
import UserEdit from '../views/User/UserEdit.vue';

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
    component: Login
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        name: 'User',
        component: UserProduct
      },
      {
        path: 'edit',
        name: 'UserEdit',
        component: UserEdit
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
