import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  stepsData: {
    range: ['2016-01-01', '2016-06-30'],
    data: []
  }
}

// getters
const getters = {
  getStepsData: state => {
    // console.log('vuex getStepsData!!')
    return state.stepsData
  }
}

// actions
const actions = {
  changeStepsData ({commit}, stepsData) {
    commit(types.CHANGE_CALENDER_STEPS, stepsData)
  }
}

// mutations
const mutations = {
  [types.CHANGE_CALENDER_STEPS] (state, stepsData) {
    if (!(stepsData.range instanceof Array) || !(stepsData.data instanceof Array)) {
      return
    }
    state.stepsData.range = stepsData.range.slice()
    state.stepsData.data = stepsData.data.slice()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
