import axios from 'axios'
import Miracle from 'incu-webview'
import store from './vuex/count'

const getAPPToken = () => {
  return new Promise((resolve, reject) => {
    if (Miracle.isApp()) {
      Miracle.onAppReady(() => {
        store.commit('setToken', Miracle.getData().user.token)
        resolve()
      })
    } else {
      reject(new Error('Miracle 获取app数据失败'))
    }
  })
}

const instance = axios.create({
  // baseURL: 'http://120.27.137.151:9976',
  baseURL: '',
  timeout: 20000
})
instance.defaults.headers.common['Authorization'] = ''
instance.interceptors.request.use((config) => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
    return config
  } else {
    getAPPToken().then(() => {
      config.headers.Authorization = store.state.token
      return config
    }).catch((error) => {
      console.log(error)
    })
  }
}, (_error) => {
  return Promise.reject(_error)
})

export default instance
