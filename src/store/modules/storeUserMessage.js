// import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
  msgData: [
    {
      from: '系统通知',
      date: '2017-07-01',
      text: '欢迎来到猛男计划'
    },
    {
      from: 'Move Brick',
      date: '2017-07-02',
      text: '我是Move Brick，你好可以认识一下吗我是Move Brick，你好可以认识一下吗我是Move Brick，你好可以认识一下吗我是Move Brick，你好可以认识一下吗'
    },
    {
      from: '系统通知',
      date: '2017-07-01',
      text: '欢迎来到猛男计划'
    }
  ]
}

// getters
const getters = {
  getUserMsgData: state => state.msgData
}

// actions
const actions = {
  // changeCalorieNow ({commit}, now) {
  //   // console.log('vuex changeCalorieNow:' + now)
  //   commit(types.CHANGE_CALORIE_NOW, now)
  // },
  // changeCalorieTarget ({commit}, target) {
  //   commit(types.CHANGE_CALORIE_TARGET, target)
  // }
}

// mutations
const mutations = {
  // [types.CHANGE_CALORIE_NOW] (state, now) {
  //   state.calorieNow = now.nowCalorie
  // },
  //
  // [types.CHANGE_CALORIE_TARGET] (state, target) {
  //   state.calorieTarget = target.targetCalorie
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
