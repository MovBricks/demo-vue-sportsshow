<template>
  <div id="pageSportsDetail">
    <com-sports-steps></com-sports-steps>
  </div>
</template>

<script>
  import comSportsSteps from '../components/componentCalenderSportsSteps.vue'
  export default {
    name: 'pageSportsSteps',
    components: {
      'com-sports-steps': comSportsSteps
    }
  }
</script>

<style scoped>

</style>
