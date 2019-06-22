import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import home from './modules/home'
import Orders from './modules/orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    Orders,
    {
      path: '/',
      name: 'login',
      meta: 'Iniciar sesion',
      component: Login
    }
  ]
})
