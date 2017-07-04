<template>
  <div>
    <component v-bind:is="slotComName()" :slotObjData="slotObj.data"></component>
  </div>
</template>

<script>
  import slotImg from './slotComponents/slotImg.vue'

  export default {
    name: 'PTStreamCardChoseSlot',
    data: function () {
      return {
        slotComNameArray: {
          img: 'slot-img'
        }
      }
    },
    props: {
      slotObj: {
        default: ''
      }
    },
    components: {
      'slot-img': slotImg
    },
    methods: {
      slotComName: function () {
        if (this.slotObj.type !== '') {
          return this.slotComNameArray[this.slotObj.type]
        }
      }
    }
  }

</script>

<style scoped>
  @import "../css/normalize.css";
</style>
