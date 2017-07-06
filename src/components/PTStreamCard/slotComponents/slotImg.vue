<template>
  <div>
    <!--<img class="slotImgSize" :src="imgSrc()" alt="">-->

    <el-carousel
      height="300px"
      :autoplay="false">
      <el-carousel-item v-for="(item, index) in slotObjData" :key="index">
        <div class="slotImgSizeWrapper">
          <img class="slotImgSize" :src="imgSrc(item)" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
  export default {
    props: {
      slotObjData: {
        default: ''
      }
    },
    methods: {
      imgSrc: function (item) {
//        console.log('this.slotObjData:' + JSON.stringify(this.slotObjData))
        console.log('item:' + JSON.stringify(item))
        if (item.type === 'img') {
          return item.data
        }
      }
    },
    mounted () {
//      console.log('slotObjData:' + JSON.stringify(this.slotObjData))
    }
  }
</script>
<style scoped>
  .slotImgSizeWrapper{
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slotImgSize{
    max-width:100%;
  }
</style>

