import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  showComList: [
    {
      name: 'com-sports-weight',
      key: 'comSportsWeight',
      showname: '月均体重'
    },
    {
      name: 'com-sports-water',
      key: 'comSportsWater',
      showname: '每日饮水'
    },
    {
      name: 'com-sports-heart',
      key: 'comSportsHeart',
      showname: '心率'
    },
    {
      name: 'com-page-sports',
      key: 'comPageSports',
      showname: '卡路里'
    },
    {
      name: 'com-sports-steps',
      key: 'comSportsSteps',
      showname: '步数'
    }
  ],
  hideComList: [
  ],
  showSideBar: false
}

// getters
const getters = {
  getShowComList: state => state.showComList,
  getHideComList: state => state.hideComList,
  getShowSideBar: state => state.showSideBar
}

// actions
const actions = {
  changeShowComListOrder ({commit}, ComList) {
    // 仅改变顺序
    // console.log('vuex changeShowComList:' + JSON.stringify(ComList))
    commit(types.CHANGE_SHOW_COM_LIST, ComList)
  },
  changeShowComList ({commit}, Com) {
    //  删除showComList中对应对象
    var ComList = state.showComList.filter(function (item) {
      return item.key !== Com.key
    })
    commit(types.CHANGE_SHOW_COM_LIST, ComList)
    //  往showComList增加对应对象
    ComList = state.hideComList.slice()
    ComList.push(Com)
    commit(types.CHANGE_HIDE_COM_LIST, ComList)
  },
  changeHideComList ({commit}, Com) {
    // console.log('vuex changeHideComList:' + JSON.stringify(Com))
    //  删除hideComList中对应对象
    var ComList = state.hideComList.filter(function (item) {
      return item.key !== Com.key
    })
    commit(types.CHANGE_HIDE_COM_LIST, ComList)
    //  往showComList增加对应对象
    ComList = state.showComList.slice()
    ComList.push(Com)
    commit(types.CHANGE_SHOW_COM_LIST, ComList)
  },
  changeShowSideBar ({commit}) {
    commit(types.CHANGE_SHOW_SIDE_BAR)
  }
}

// mutations
const mutations = {
  [types.CHANGE_SHOW_COM_LIST] (state, ComList) {
    state.showComList = ComList
  },
  [types.CHANGE_HIDE_COM_LIST] (state, ComList) {
    state.hideComList = ComList
  },
  [types.CHANGE_SHOW_SIDE_BAR] (state) {
    state.showSideBar = !state.showSideBar
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
