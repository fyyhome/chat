import axios from 'axios'
import { getAPPToken } from './assets/js/getAppData'
import store from './vuex/count'

const instance = axios.create({
  baseURL: 'http://120.27.137.151:9976',
  // baseURL: '',
  timeout: 8000
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
