<template>
  <div id="pageSports">
    <com-sports-pie numberUnit="Calorie" v-on:expandClick="showSportsDetail()"></com-sports-pie>
    <com-sports-detail v-if=sportsDetailShow v-on:overlayClick="hideSportsDetail()"></com-sports-detail>
  </div>
</template>

<script>
  import comSportsPie from '../components/componentSportsPie.vue'
  import comSportsDetail from '../components/componentSportsDetail.vue'
  export default {
    name: 'pageSports',
    components: {
      'com-sports-pie': comSportsPie,
      'com-sports-detail': comSportsDetail
    },
    data: function () {
      return {
        sportsDetailShow: false
      }
    },
    methods: {
      showSportsDetail () {
        this.sportsDetailShow = true
      },
      hideSportsDetail () {
        this.sportsDetailShow = false
      }
    }
  }
</script>

<style scoped>
</style>
