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
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PRODUCT(state, payload) {
      state.user_products.unshift(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
