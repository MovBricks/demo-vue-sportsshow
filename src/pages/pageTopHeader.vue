<template>
  <div id="pageTopHeader">
    <com-head-tilte>
      <img slot="comp-head-title-nav-icon" class="ico" src="../assets/timg.png" />
    </com-head-tilte>
  </div>
</template>

<script>
  import componentHeadTitle from '../components/componentHeadTitle.vue'
  export default {
    name: 'pageSports',
    components: {
      'com-head-tilte': componentHeadTitle
    }
  }
</script>

<style scoped>

  .ico{
    height: 80px;
  }

  .with-icon span{
    display: block;
  }

</style>
