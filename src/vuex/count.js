import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 7,
    chatID: null,
    avatar: '',
    mySex: null,
    friendSex: null,
    avatarArr: [
      { boy: 'https://img5.duitang.com/uploads/item/201503/22/20150322065334_4NmAR.jpeg',
        girl: 'https://img4q.duitang.com/uploads/item/201503/22/20150322065402_eLx3K.jpeg'
      },
      {
        boy: 'https://img3.duitang.com/uploads/item/201508/15/20150815095648_EWxX5.jpeg',
        girl: 'https://img5.duitang.com/uploads/item/201508/15/20150815095636_P4SiJ.thumb.700_0.jpeg'
      }
    ],
    token: '',
    isLogin: false
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
    },
    setAvatar (state, str) {
      state.avatar = str
    },
    setMySex (state, sex) {
      state.mySex = sex
    },
    setFriendSex (state, sex) {
      state.friendSex = sex
    },
    setIsLOgin (state, status) {
      state.isLogin = status
    }
  },
  getters: {
    getCount: state => state.count,
    getToken: state => state.token,
    getChatID: state => state.chatID,
    getAvatar: state => state.avatar,
    getMySex: state => state.mySex,
    getFriendSex: state => state.friendSex,
    getAvatarArr: (state) => (index = 0) => {
      return state.avatarArr[index]
    },
    getIsLogin: state => state.isLogin
  }
})

export default store
