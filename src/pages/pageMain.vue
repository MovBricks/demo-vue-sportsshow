<template>
  <div id="pageMain">
    <div class="mainHeader">
      <div>
        <com-page-topheader></com-page-topheader>
      </div>
    </div>
    <div class="mainContext">
      <com-page-draggable class="mainContextDraggable"></com-page-draggable>
    </div>
  </div>
</template>

<script>
  import comPageDraggable from './pageDraggable.vue'
  import comPageSideBar from '../components/componentSideBar.vue'
  import comPageTopHeader from './pageTopHeader.vue'

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
    }
  }
</script>

<style scoped>
  .mainHeader{
    border-bottom: solid 10px darkred;
    display: flex;
    justify-content: flex-end;
  }
  .mainHeader>div{
    width: 60%;
  }
  .mainContext{
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }
  .mainContextDraggable{
    border-left: solid 0px darkblue;
    /*width: 855px;*/
  }

</style>
