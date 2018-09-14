import axios from 'axios'
// import { getAPPToken } from './assets/js/getAppData'
import store from './vuex/count'
import router from './router'

const instance = axios.create({
  baseURL: 'http://120.27.137.151:9976',
  // baseURL: '',
  timeout: 8000
})
// instance.defaults.headers.common['Authorization'] = ''
instance.interceptors.request.use(async (config) => {
  if (store.state.isLogin) {
    if (store.state.token !== '') {
      config.headers.Authorization = store.state.token
      return config
    } else {
      router.push('/')
    }
  } else {
    if (config.url.indexOf('/login') === -1) {
      router.push('/')
    } else {
      return config
    }
  }
  // if (store.state.token) {
  //   config.headers.Authorization = store.state.token
  //   return config
  // } else {
  //   await getAPPToken()
  //   config.headers.Authorization = store.state.token
  //   return config
  // }
}, (_error) => {
  return Promise.reject(_error)
})

export default instance
