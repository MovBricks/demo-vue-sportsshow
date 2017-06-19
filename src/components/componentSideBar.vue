<template>
  <!--<div id="pageSideBar" v-bind:class="classSideBarWidth">-->
  <div id="pageSideBar" >
    <div class="pageSideBarIcon" v-on:click="changeShowSideBar ()">
        <img v-bind:class="{plusIcon:!getShowSideBar}" src="../assets/xclose.png" alt="">
    </div>
    <transition name="sideBar">
      <div class="pageSideBarContext" v-show="getShowSideBar" v-bind:style="{width:450+'px'}">
        <ul v-model="hideComList" class="pageSideBarContextList">
          <el-button type="primary" size="large" v-for="item in hideComList" :key="item.key" v-on:click="removeHideItem (item)">
            {{ item.showname }}
          </el-button>
        </ul>
      </div>
    </transition>
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
  }
  li{
    list-style-type: none;
  }
  #pageSideBar{
    /*background-color: blue;*/
    height: 150px;
    overflow-x: hidden;
    /*position: relative;*/
    max-width: 450px;
  }
  .sideBarShowWidth{
    width: 450px;
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
    z-index: 100;
  }
  .pageSideBarIcon>img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .plusIcon{
    transform: rotate(-405deg);
  }

  .pageSideBarContext{
    height: 100%;
    background-color: burlywood;
  }
  .pageSideBarContextList{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .pageSideBarContextList>li{
    margin-top: 10px;
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

</style>
