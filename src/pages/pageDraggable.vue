<template>
  <div id="pageDraggable" class="pageDraggableMain">
    <transition name="coms-translate">
    <div class="pageDraggableComs" v-bind:class="classComsLeft">
      <draggable  v-model="comList" :options="dragOptions" @start="isDragging=true" @end="dragEndSortList()">
        <transition-group type="transition" :name="'flip-list'" class="list-group" tag="div">
          <div v-for="item in comList" :key="item.key">
            <el-button type="danger" class="comButton" icon="circle-cross" v-show="getShowSideBar"  v-on:click="removeShowItem (item)"></el-button>
            <component :is="item.name" ></component>
          </div>
        </transition-group>
      </draggable>
    </div>
    </transition>
    <com-side-bar class="pageDraggableSideBar"></com-side-bar>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import { mapGetters, mapActions } from 'vuex'
  import comSportsWeight from '../components/componentSportsWeight.vue'
  import comSportsSteps from '../components/componentCalenderSportsSteps.vue'
  import comPageSports from './pageSports.vue'
  import comSideBar from '../components/componentSideBar.vue'

  export default {
    name: 'pageSports',
    components: {
      'draggable': draggable,
      'com-side-bar': comSideBar,
      'com-sports-weight': comSportsWeight,
      'com-page-sports': comPageSports,
      'com-sports-steps': comSportsSteps
    },
    data: function () {
      return {
        hideComList: this.getHideComList,
        isDragging: false
      }
    },
    methods: {
      ...mapActions([
        'changeShowComListOrder',
        'changeShowComList',
        'changeHideComList'
      ]),
      removeShowItem (Item) {
        this.changeShowComList(Item)
      },
      dragEndSortList () {
//        console.log('dragEndSortList comList change!!!!')
//        this.changeShowComList(this.comList)
      }
    },
    computed: {
      ...mapGetters({
        getComList: 'getShowComList',
        getHideComList: 'getHideComList',
        getShowSideBar: 'getShowSideBar'
      }),
      classComsLeft: function () {
        return {
          classComsLeftLeft: this.getShowSideBar,
          classComsLeftCenter: !this.getShowSideBar
        }
      },
      comList: {
        get () {
//          console.log('drag get value:' + JSON.stringify(this.getComList))
          return this.getComList
        },
        set (value) {
//          console.log('drag set value:' + JSON.stringify(value))
          this.changeShowComListOrder(value)
        }
      },
      dragOptions () {
        return {
          disabled: !this.getShowSideBar,
//          delay: 30,
          animation: 500,
          filter: '.backdrop',
          ghostClass: 'ghost'
        }
      }
    },
    watch: {
    },
    mounted () {
      this.$nextTick(function () {
        this.comList = this.getComList
      })
    }
  }
</script>

<style scoped>
  .pageDraggableMain{
    display: flex;
    position: relative;
    width: 100%;
  }
  .classComsLeftLeft{
    left: 0;
  }
  .classComsLeftCenter{
    left: calc((100% - 900px)/2);
  }
  .pageDraggableComs{
    /*max-width: 880px;*/
    /*min-width: 570px;*/
    /*max-width: 900px;*/
    width: 900px;
    position: absolute;
    transition: left 1s ease;
  }
  .ghost {
    opacity: 0.3;
    background: #F8FBFB;
  }
  .list-group {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-around;*/
  }
  .list-group>*{
    /*transition: all 1s ease;*/
    margin-left: 20px;
    margin-bottom: 20px;
    position: relative;
  }
  .comButton{
    position: absolute;
    right: 3px;
    top: 3px;
    z-index: 99;
  }
  .pageDraggableSideBar{
    position: absolute;
    right: 0;
    z-index: 110;
  }

  /*.coms-translate-enter-active, .coms-translate-leave-active {*/
    /*transition: all 1s;*/
  /*}*/
  /*.coms-translate-enter, .coms-translate-leave-active {*/
    /*opacity: 0;*/
  /*}*/
  /*.coms-translate-enter {*/
    /*!*transform: translateX(31px);*!*/
  /*}*/
  /*.coms-translate-leave-active {*/
    /*!*transform: translateX(-31px);*!*/
  /*}*/
</style>
