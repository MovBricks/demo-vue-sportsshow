<template>
  <div id="pageDraggable">
    <draggable  v-model="comList" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
      <transition-group type="transition" :name="'flip-list'" class="list-group" tag="div">
        <component v-for="item in comList" :is="item.name" :key="item.key"></component>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import comSportsWeight from '../components/componentSportsWeight.vue'
  import comSportsSteps from '../components/componentCalenderSportsSteps.vue'
  import comPageSports from './pageSports.vue'
  import draggable from 'vuedraggable'
  export default {
    name: 'pageSports',
    components: {
      'draggable': draggable,
      'com-sports-weight': comSportsWeight,
      'com-page-sports': comPageSports,
      'com-sports-steps': comSportsSteps
    },
    data: function () {
      return {
        comList: [
          {
            name: 'com-sports-weight',
            key: 'comSportsWeight'
          },
          {
            name: 'com-page-sports',
            key: 'comPageSports'
          },
          {
            name: 'com-sports-steps',
            key: 'comSportsSteps'
          }
        ],
        isDragging: false
      }
    },
    methods: {
    },
    computed: {
      dragOptions () {
        return {
          delay: 30,
          animation: 500,
          filter: '.backdrop',
          ghostClass: 'ghost'
        }
      }
    }
  }
</script>

<style scoped>
  .flip-list-move {
    /*transition: transform 1s;*/
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
  }
  #pageDraggable{
    /*-webkit-user-select: none;  !* Chrome all / Safari all /opera15+*!*/
    /*-moz-user-select: none;     !* Firefox all *!*/
    /*-ms-user-select: none;      !* IE 10+ *!*/
    /*user-select: none;*/
  }
</style>
