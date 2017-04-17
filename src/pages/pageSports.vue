<template>
  <div id="pageSports">
    <com-sports-pie numberUnit="Calorie"></com-sports-pie>
  </div>
</template>

<script>
  import comSportsPie from '../components/componentSportsPie.vue'
  export default {
    name: 'pageSports',
    components: {
      'com-sports-pie': comSportsPie
    }
  }
</script>

<style scoped>
  @import './css/pageQuiButton.css';
</style>
