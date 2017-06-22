import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import storeSportsPie from './modules/storeSportsPie'
import storeSportsDetail from './modules/storeSportsDetail'
import storeCalenderSportsSteps from './modules/storeCalenderSportsSteps'
import storeDraggableComponent from './modules/storeDraggableComponent'
import storeHeadTitle from './modules/storeHeadTitle'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    storeSportsPie,
    storeSportsDetail,
    storeCalenderSportsSteps,
    storeDraggableComponent,
    storeHeadTitle
  },
  strict: process.env.NODE_ENV !== 'production'
})
