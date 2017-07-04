<template>
  <img :src="imgSrc()" alt="">
</template>

<script>
  export default {
    props: {
      slotObjData: {
        default: ''
      }
    },
    methods: {
      imgSrc: function () {
        if (this.slotObjData !== '') {
          return this.slotObjData
        }
      }
    }
  }
</script>
<style scoped>

</style>

