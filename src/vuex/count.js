import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 7,
    chatID: null,
    token: 'eyJpYXQiOjE1MzU5MDI1MjIsImV4cCI6MTUzNTkwNTUyMiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE1MzU5MDU1MjIsImlkIjoiNjE2MDQ4MDUxMiIsInhoIjoiODAwMDExNjA5MyJ9.LBiOy70jhWyA9lnPtQTgSbf-vt2oQdqyfT1CET2PBHE'
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
