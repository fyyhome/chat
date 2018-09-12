import axios from 'axios'
import { getAPPToken } from './assets/js/getAppData'
import store from './vuex/count'

const instance = axios.create({
  baseURL: 'http://120.27.137.151:9976',
  // baseURL: '',
  timeout: 8000
})
instance.defaults.headers.common['Authorization'] = ''
instance.interceptors.request.use(async (config) => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
    return config
  } else {
    await getAPPToken()
    config.headers.Authorization = store.state.token
    // getAPPToken().then(() => {
    //   config.headers.Authorization = store.state.token
    //   // return config
    // }).catch((error) => {
    //   console.log(error)
    // })
    return config
  }
}, (_error) => {
  return Promise.reject(_error)
})

export default instance
