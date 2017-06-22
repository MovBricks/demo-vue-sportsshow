import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  contextPageIndex: 0
}

// getters
const getters = {
  getContextPageIndex: state => state.contextPageIndex
}

// actions
const actions = {
  changeContextPageIndex ({commit}, contextPageIndex) {
    // console.log('vuex changeCalorieNow:' + now)
    commit(types.CHANGE_SHOW_CONTEXT_PAGE, contextPageIndex)
  }
}

// mutations
const mutations = {
  [types.CHANGE_SHOW_CONTEXT_PAGE] (state, contextPageIndex) {
    state.contextPageIndex = contextPageIndex
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
