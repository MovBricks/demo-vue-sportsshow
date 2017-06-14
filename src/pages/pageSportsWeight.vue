<template>
  <div id="pageSports">
    <com-sports-weight v-on:expandClick="showSportsDetail()"></com-sports-weight>
  </div>
</template>

<script>
  import comSportsWeight from '../components/componentSportsWeight.vue'
  import comSportsDetail from '../components/componentSportsDetail.vue'
  export default {
    name: 'pageSports',
    components: {
      'com-sports-weight': comSportsWeight,
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
