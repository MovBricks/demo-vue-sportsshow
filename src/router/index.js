import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'
import pageSports from '../pages/pageSports.vue'
import pageheadTitle from '../pages/pageHeadTitle.vue'
import pageSportsSteps from '../pages/pageSportsSteps.vue'
import sportsWeight from '../pages/pageSportsWeight.vue'
import pageDraggable from '../pages/pageDraggable.vue'
import pageSideBar from '../components/componentSideBar.vue'
import pageMain from '../pages/pageMain.vue'
import NotFoundComponent from '../components/Hello.vue'
import sportsWater from '../components/componentSportsWater.vue'
import pagePiazzaTalk from '../pages/pagePiazzaTalk.vue'
import pageLogin from '../pages/pageLogin.vue'

Vue.use(Router)

const devRoutesArray = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/btn',
    name: 'btn',
    component: pageQuiButton
  },
  {
    path: '/list',
    name: 'list',
    component: pageQuiList
  },
  {
    path: '/nav',
    name: 'nav',
    component: pageQuiNav
  },
  {
    path: '/sports',
    name: 'sports',
    component: pageSports
  },
  {
    path: '/headtitle',
    name: 'headTitle',
    component: pageheadTitle
  },
  {
    path: '/sportsSteps',
    name: 'sportsSteps',
    component: pageSportsSteps
  },
  {
    path: '/sportsWeight',
    name: 'sportsWeight',
    component: sportsWeight
  },
  {
    path: '/sportsWater',
    name: 'sportsWater',
    component: sportsWater
  },
  {
    path: '/pageDraggable',
    name: 'pageDraggable',
    component: pageDraggable
  },
  {
    path: '/pagePiazzaTalk',
    name: 'pagePiazzaTalk',
    component: pagePiazzaTalk
  },
  {
    path: '/pageSideBar',
    name: 'pageSideBar',
    component: pageSideBar
  },
  {
    path: '/pageMain',
    name: 'pageMain',
    component: pageMain
  },
  {
    path: '/pageLogin',
    name: 'pageLogin',
    component: pageLogin
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

const buildRoutesArray = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/pageMain',
    name: 'pageMain',
    component: pageMain
  },
  {
    path: '/pageLogin',
    name: 'pageLogin',
    component: pageLogin
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

export default new Router({
  // mode: 'history',
  routes: process.env.NODE_ENV === 'production'
    ? buildRoutesArray
    : devRoutesArray
})
