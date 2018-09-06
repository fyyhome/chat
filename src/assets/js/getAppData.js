import Miracle from 'incu-webview'
import store from '../../vuex/count'
import axios from '../../axios'

const getAPPToken = () => {
  return new Promise((resolve, reject) => {
    if (Miracle.isApp()) {
      Miracle.onAppReady(() => {
        store.commit('setToken', Miracle.getData().user.token)
        resolve()
      })
    } else {
      reject(new Error('Miracle 获取app的token失败'))
    }
  })
}

const getUserAvatar = () => {
  return new Promise((resolve, reject) => {
    if (store.state.token === '') {
      getAPPToken().then(() => {
        axios.get('http://api.ncuos.com/api/user/profile/index').then((res) => {
          store.commit('setAvatar', res.data.head_pic_url)
          resolve()
        }).catch(() => {
          reject(new Error('获取app头像失败'))
        })
      }).catch((error) => {
        console.log(error + '')
      })
    } else {
      axios.get('http://api.ncuos.com/api/user/profile/index').then((res) => {
        store.commit('setAvatar', res.data.head_pic_url)
        resolve()
      }).catch(() => {
        reject(new Error('获取app头像失败'))
      })
    }
  })
}

export {
  getAPPToken,
  getUserAvatar
}
