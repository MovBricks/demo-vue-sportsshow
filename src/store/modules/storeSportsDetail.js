import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  timeCalorie: [
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 16,
        wday: '日'
      },
      value: 5521
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 17,
        wday: '一'
      },
      value: 1522
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 18,
        wday: '二'
      },
      value: 1523
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 19,
        wday: '三'
      },
      value: 1524
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 20,
        wday: '四'
      },
      value: 1525
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 21,
        wday: '五'
      },
      value: 1526
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 22,
        wday: '六'
      },
      value: 1200
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 23,
        wday: '日'
      },
      value: 2500
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 17,
        wday: '一'
      },
      value: 1522
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 18,
        wday: '二'
      },
      value: 1523
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 19,
        wday: '三'
      },
      value: 1524
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 20,
        wday: '四'
      },
      value: 1525
    },
    {
      timeObj: {
        year: 2017,
        month: 4,
        mday: 21,
        wday: '五'
      },
      value: 1526
    }
  ]
}

// getters
const getters = {
  getTimeCalorie: state => {
    // console.log('vuex getTimeCalorie: ' + state.timeCalorie.length)
    return state.timeCalorie
  }
}

// actions
const actions = {
  changeDetailCalorieTime ({commit}, now) {
    commit(types.CHANGE_DETAIL_CALORIE_TIME, now)
  }
}

// mutations
const mutations = {
  [types.CHANGE_DETAIL_CALORIE_TIME] (state, now) {
    state.timeCalorie = now.timeCalorie.slice()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
