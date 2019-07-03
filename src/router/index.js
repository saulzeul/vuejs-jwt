import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Orders from './modules/orders'
import Commands from './modules/commands'
import Menu from './modules/menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    Orders,
    Commands,
    Menu,
    {
      path: '/',
      name: 'login',
      meta: 'Iniciar sesion',
      component: Login
    }
  ]
})
