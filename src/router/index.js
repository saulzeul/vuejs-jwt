import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import home from './modules/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    {
      path: '/',
      name: 'login',
      meta: 'Iniciar sesion',
      component: Login
    }
  ]
})
