<template>
  <div id="pageSportsDetail">
    <com-sports-detail></com-sports-detail>
  </div>
</template>

<script>
  import comSportsDetail from '../components/componentSportsDetail.vue'
  export default {
    name: 'pageSportsDetail',
    components: {
      'com-sports-detail': comSportsDetail
    }
  }
</script>

<style scoped>

</style>
