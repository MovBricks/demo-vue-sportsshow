<template>
  <div id="pageDraggable" class="pageDraggableMain" v-bind:class="classMainFlex">
    <div class="pageDraggableComs">
      <draggable  v-model="comList" :options="dragOptions" @start="isDragging=true" @end="dragEndSortList()">
        <transition-group type="transition" :name="'flip-list'" class="list-group" tag="div">
          <div v-for="item in comList" :key="item.key" class="test">
            <el-button type="danger" class="comButton" icon="circle-cross" v-show="getShowSideBar"  v-on:click="removeShowItem (item)"></el-button>
            <component :is="item.name" ></component>
          </div>
        </transition-group>
      </draggable>
    </div>
    <com-side-bar></com-side-bar>
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
      classMainFlex: function () {
        return {
          classMainFlexSpace: true
//          classMainFlexCenter: !this.getShowSideBar
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
          delay: 30,
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
  .classMainFlexSpace{
    justify-content: space-between;
  }
  .classMainFlexCenter{
    justify-content: center;
  }
  .pageDraggableComs{
    /*max-width: 880px;*/
    min-width: 570px;
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
    padding-left: 10px;
    padding-bottom: 30px;
    position: relative;
  }
  .comButton{
    position: absolute;
    right: 3px;
    top: 3px;
    z-index: 100;
  }
</style>
