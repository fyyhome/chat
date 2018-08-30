import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 7
  },
  mutations: {
    descrement (state) {
      if (state.count > 0) {
        state.count--
      } else {
        console.log(state.count)
      }
    }
  },
  getters: {
    getCount: state => state.count
  }
})

export default store
