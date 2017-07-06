<template>
  <div>
    <!--<component-->
      <!--v-for="(item, index) in slotTypeAndDataArray"-->
      <!--:is="slotTypeAndDataArray.type"-->
      <!--:key="index"-->
      <!--:slotObjData="slotTypeAndDataArray.data"></component>-->
    <slot-img v-if="slotDataImgArray.length > 0"
      :slotObjData="slotDataImgArray"
    ></slot-img>
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
        },
        slotDataImgArray: []
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
      getSlotDataImgArray: function () {
        this.slotDataImgArray = this.slotObj.filter((Obj) => {
          return Obj.type === 'img'
        })
      }
    },
    watch: {
      slotObj: function () {
//        console.log('slotObj change:' + JSON.stringify(this.slotObj))
        this.getSlotDataImgArray()
      }
    },
    mounted () {
      this.$nextTick(function () {
//        console.log('mounted:' + JSON.stringify(this.slotObj))
        this.getSlotDataImgArray()
      })
    }
  }

</script>

<style scoped>
  @import "../css/normalize.css";
</style>
