import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  calorieNow: 0,
  calorieTarget: 8000
}

// getters
const getters = {
  getCalorieNow: state => state.calorieNow,
  getCalorieTarget: state => state.calorieTarget
}

// actions
const actions = {
  changeCalorieNow ({commit}, now) {
    // console.log('vuex changeCalorieNow:' + now)
    commit(types.CHANGE_CALORIE_NOW, now)
  },
  changeCalorieTarget ({commit}, target) {
    commit(types.CHANGE_CALORIE_TARGET, target)
  }
}

// mutations
const mutations = {
  [types.CHANGE_CALORIE_NOW] (state, now) {
    state.calorieNow = now.nowCalorie
  },

  [types.CHANGE_CALORIE_TARGET] (state, target) {
    state.calorieTarget = target.targetCalorie
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
