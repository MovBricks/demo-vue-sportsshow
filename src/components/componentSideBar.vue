<template>
  <!--<div id="pageSideBar" v-bind:class="classSideBarWidth">-->
  <div id="pageSideBar">
    <div class="pageSideBarIcon" v-on:click="changeShowSideBar ()">
        <img v-bind:class="{plusIcon:!getShowSideBar}" src="../assets/xclose.png" alt="">
    </div>
    <div class="pageSideBarContextContainer">
      <transition name="sideBar">
        <div class="pageSideBarContext" v-show="getShowSideBar">
          <div class="pageSideBarContextTitle">可加载模块</div>
          <transition-group name="list-complete" v-model="hideComList" class="pageSideBarContextList" tag="ul">
            <li v-for="item in hideComList" :key="item.key" v-on:click="removeHideItem (item)">
              {{ item.showname }}
            </li>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'pageSportsSteps',
    data: function () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        getComList: 'getShowComList',
        getHideComList: 'getHideComList',
        getShowSideBar: 'getShowSideBar'
      }),
      hideComList: {
        get () {
//          console.log('getComList:' + JSON.stringify(this.getComList))
          return this.getHideComList
        },
        set (value) {
//          console.log('setComList:' + JSON.stringify(value))
          this.changeHideComList(value)
        }
      },
      classSideBarWidth: function () {
        return this.getShowSideBar ? {sideBarShowWidth: true} : {sideBarHideWidth: true}
      }
    },
    methods: {
      ...mapActions([
        'changeShowComList',
        'changeHideComList',
        'changeShowSideBar'
      ]),
      removeHideItem (item) {
        console.log('removeHideItem')
        this.changeHideComList(item)
      }
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style scoped>
  ul,li{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  #pageSideBar{
    /*overflow-x: hidden;*/
    /*position: relative;*/
    min-width: 350px;
    max-height: 500px;
    box-sizing: border-box;
  }
  .sideBarShowWidth{
    width: 350px;
  }
  .sideBarHideWidth{
    width: 45px;
  }
  .pageSideBarIcon{
    width: 45px;
    height: 45px;
    margin: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 101;
  }
  .pageSideBarIcon>img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .plusIcon{
    transform: rotate(-405deg);
  }
  .pageSideBarContextContainer{
    overflow-x: hidden;
    height: 100%;
  }
  .pageSideBarContext{
    height: 100%;
    min-height: 300px;
    min-width: 350px;
    background-color: rgb(48,55,73);
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .pageSideBarContextTitle{

    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    color: rgb(255,255,255);
    font-size: 1.5rem;
    border-bottom: solid 3px rgba(219, 230, 252, .5);
  }

  .pageSideBarContextList{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .pageSideBarContextList>li{
    /*margin-top: 10px;*/
    padding: 0 40px;
    height: 55px;
    line-height: 55px;
    background-color: rgb(48,55,73);
    width: 100%;
    cursor: pointer;
    /*transition: background-color .3s,color .3s;*/
    color: #bfcbd9;
    font-size: 1rem;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
  .pageSideBarContextList>li:hover{
    color: rgb(255,255,255);
    background-color: #48576a;
    /*border-left: 5px solid rgb(70,120,216);*/
  }
  .sideBar-enter-active {
    transition: all 1.0s;
  }
  .sideBar-leave-active {
    transition: all 1.0s;
  /*cubic-bezier(1.0, 0.5, 0.8, 1.0)*/
  }
  .sideBar-enter, .sideBar-leave-active {
    transform: translateX(450px);
    opacity: 0;
  }

  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    transform: translate(-30px);
  }
  .list-complete-enter-active {
    transition: all .5s;
  }
  .list-complete-leave-active {
    transition: all .5s;
  }

</style>
