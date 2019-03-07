import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import home from './modules/home'
import events from './modules/events'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    events,
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
