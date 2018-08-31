import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/count'
import instance from './axios'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$axios = instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
