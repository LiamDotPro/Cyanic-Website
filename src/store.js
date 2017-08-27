/**
 * Created by li on 24/05/2017.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  projects: []
}

const mutations = {
  SET_PROJECTS (state, obj) {
    state.projects = obj
  }
}

const actions = {
  LOAD_PROJECTS: ({commit}) => {
    Vue.http.get('http://localhost:2000/projects').then(response => {
      commit('SET_PROJECTS', response.body)
    })
  }
}

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
