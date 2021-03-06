import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "lazy-loaded-component" */ './views/chat.vue')
    }
  ]
})
