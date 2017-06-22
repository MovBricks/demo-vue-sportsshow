<template>
  <div id="pageMain">
    <div class="mainHeader">
      <div>
        <com-page-topheader></com-page-topheader>
      </div>
    </div>
    <div class="mainContext">
      <com-page-draggable v-show="contextPageIndex===0"></com-page-draggable>
      <div v-show="contextPageIndex===1">朋友PK</div>
      <div v-show="contextPageIndex===2">广场闲逛</div>
    </div>
  </div>
</template>

<script>
  import comPageDraggable from './pageDraggable.vue'
  import comPageSideBar from '../components/componentSideBar.vue'
  import comPageTopHeader from './pageTopHeader.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'pageSports',
    components: {
      'com-page-topheader': comPageTopHeader,
      'com-page-sidebar': comPageSideBar,
      'com-page-draggable': comPageDraggable
    },
    data: function () {
      return {
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters({
        contextPageIndex: 'getContextPageIndex'
      })
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
    padding-top: 10px;
    display: flex;
    justify-content: center;

  }

</style>
