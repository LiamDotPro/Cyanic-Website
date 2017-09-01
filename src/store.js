/**
 * Created by li on 24/05/2017.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  projects: [],
  emailed: false
}

const mutations = {
  SET_PROJECTS (state, obj) {
    state.projects = obj
  },
  SET_EMAIL_STATUS (state, bool) {
    state.emailed = bool
  }
}

const actions = {
  LOAD_PROJECTS: ({commit}) => {
    Vue.http.get('https://odin.coffee:1337/projects').then(response => {
      let projects = response.body.map((el, index, arr) => {
        if (el.url !== null) {
          if (el.url.indexOf('https://') === 0) {
            el['urlClean'] = el.url.replace('https://', '')
          } else {
            el['urlClean'] = el.url.replace('http://', '')
          }
        }
        return el
      })
      commit('SET_PROJECTS', projects)
    })
  },
  UPDATE_EMAIL_STATUS: ({commit}) => {
    commit('SET_EMAIL_STATUS', true)
  }
}

const getters = {
  getProject: (state, getters) => (str) => {
    let outArr = state.projects.filter((el) => {
      return el.pagelink === str
    })

    if (outArr.length > 0) {
      return outArr[0]
    } else {
      return 'Article not found'
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
