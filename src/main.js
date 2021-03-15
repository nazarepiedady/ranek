import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageLoading from './components/PageLoading'

Vue.config.productionTip = false

Vue.component('PageLoading', PageLoading);

Vue.filter('toMoney', value => {
  const money = Number(value);

  if (!isNaN(money)) {
    return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  } else {
    return money;
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
