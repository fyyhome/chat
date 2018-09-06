import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 7,
    chatID: null,
    token: 'eyJpYXQiOjE1MzYyMDM0MDYsImV4cCI6MTUzNjIwNjQwNiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE1MzYyMDY0MDYsImlkIjoiNjE2MDQ4MDUxMiIsInhoIjoiODAwMDExNjA5MyJ9.cIlZsgn-RXm1JxpswR8a1Gqah3Ipo8kwau0srxJwTdk'
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
