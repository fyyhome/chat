import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 7,
    chatID: null,
    token: 'eyJleHAiOjE1MzU3MjI4NzgsImFsZyI6IkhTMjU2IiwiaWF0IjoxNTM1NzE5ODc4fQ.eyJleHAiOjE1MzU3MjI4NzgsInhoIjoiODAwMDExNjA5MyIsImlkIjoiNjE2MDQ4MDUxMiJ9.8F5DIxk7PLrLHWuBQR4OZiBDmcMJ_Vv6TQht9ePPHI8'
  },
  mutations: {
    descrement (state) {
      if (state.count > 0) {
        state.count--
      } else {
        console.log(state.count)
      }
    },
    setToken (state, token) {
      state.token = token
    },
    setChatID (state, id) {
      state.chatID = id
    }
  },
  getters: {
    getCount: state => state.count,
    getToken: state => state.token,
    getChatID: state => state.chatID
  }
})

export default store
