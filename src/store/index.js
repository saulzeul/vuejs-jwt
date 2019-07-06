import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui'
import breadcrumb from  './modules/breadcrumb'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    ui,
    breadcrumb,
    order
  }
})
