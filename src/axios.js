import axios from 'axios'
// import { getAPPToken } from './assets/js/getAppData'
import store from './vuex/count'
import router from './router'

const instance = axios.create({
  baseURL: 'http://120.27.137.151:9976',
  // baseURL: '',
  timeout: 8000
})

const cancelToken = axios.CancelToken
const source = cancelToken.source()
// instance.defaults.headers.common['Authorization'] = ''
instance.interceptors.request.use(async (config) => {
  if (store.state.isLogin) {
    if (store.state.token !== '') {
      config.headers.Authorization = store.state.token
      return config
    } else {
      config.cancelToken = source.token
      router.push('/')
      return config
    }
  } else {
    if (config.url.indexOf('/login') === -1) {
      config.cancelToken = source.token
      router.push('/')
      return config
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
