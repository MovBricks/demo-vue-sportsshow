<template>
  <div id="pageMain">
    <div class="mainHeader">
      <div>
        <com-page-topheader></com-page-topheader>
      </div>
    </div>
    <div class="mainContext">
      <!--<com-page-draggable v-show="contextPageIndex===0"></com-page-draggable>-->
      <!--<qui-btn v-show="contextPageIndex===1" msg="朋友PK"></qui-btn>-->
      <!--<qui-btn v-show="contextPageIndex===2" msg="广场闲逛"></qui-btn>-->
      <transition v-bind:name="transitionName" mode="out-in">
        <component v-bind:is="comName"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'
  import quiList from '../components/quiList.vue'

  import comPageDraggable from './pageDraggable.vue'
  import comPageSideBar from '../components/componentSideBar.vue'
  import comPageTopHeader from './pageTopHeader.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'pageSports',
    components: {
      'qui-btn': quiBtn,
      'qui-list': quiList,
      'com-page-topheader': comPageTopHeader,
      'com-page-sidebar': comPageSideBar,
      'com-page-draggable': comPageDraggable
    },
    data: function () {
      return {
        comNameArray: [
          'com-page-draggable',
          'qui-btn',
          'qui-list'
        ]
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters({
        contextPageIndex: 'getContextPageIndex',
        contextPageLastIndex: 'getContextPageLastIndex'
      }),
      comName: function () {
//        this.lastIndex = this.contextPageIndex
        return this.comNameArray[this.contextPageIndex]
      },
      transitionName: function () {
        console.log(this.contextPageLastIndex + '>' + this.contextPageIndex)
        console.log(this.contextPageLastIndex > this.contextPageIndex)
        if (this.contextPageLastIndex > this.contextPageIndex) {
          return 'component-translate-fade-reverse'
        } else {
          return 'component-translate-fade'
        }
      }
    }
  }
</script>

<style scoped>
  #pageMain{
    position: absolute;
    /*top: 84px;*/
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(246,247,251);
  }
  .mainHeader{
    /*border-bottom: solid 10px datazarkred;*/
    display: flex;
    justify-content: flex-end;
    height: 70px;
    align-items: center;
    background-color: rgb(48,55,73);
  }
  .mainHeader>div{
    width: 100%;
  }
  .mainContext{
    display: flex;
    justify-content: center;
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
  }

  .component-translate-fade-enter-active, .component-translate-fade-leave-active {
    transition: all .4s ease;
  }
  .component-translate-fade-enter, .component-translate-fade-leave-active {
    opacity: 0;
  }
  .component-translate-fade-enter {
    transform: translateX(100px);
  }
  .component-translate-fade-leave-active {
    transform: translateX(-100px);
  }

  .component-translate-fade-reverse-enter-active, .component-translate-fade-reverse-leave-active {
    transition: all .4s ease;
  }
  .component-translate-fade-reverse-enter, .component-translate-fade-reverse-leave-active {
    opacity: 0;
  }
  .component-translate-fade-reverse-enter {
    transform: translateX(-100px);
  }
  .component-translate-fade-reverse-leave-active {
    transform: translateX(100px);
  }

</style>
