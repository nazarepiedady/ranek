import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      country: '',
    },
    user_products: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
