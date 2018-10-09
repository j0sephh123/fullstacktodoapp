import Vue from 'vue'
import Vuex from 'vuex'

import items from './items';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    items
  },
  state: {

  },
  mutations: {
    
  },
  actions: {

  },
  getters: {

  }
})