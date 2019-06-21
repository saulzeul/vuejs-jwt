import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import home from './modules/home'
import events from './modules/events'
import machines from './modules/machines'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    events,
    machines,
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
