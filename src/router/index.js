import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import home from './modules/home'
import Orders from './modules/orders'
import Commands from './modules/commands'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    Orders,
    Commands,
    {
      path: '/',
      name: 'login',
      meta: 'Iniciar sesion',
      component: Login
    }
  ]
})
