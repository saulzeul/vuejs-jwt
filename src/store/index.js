import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui'
import breadcrumb from  './modules/breadcrumb'

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
    breadcrumb
  }
})
