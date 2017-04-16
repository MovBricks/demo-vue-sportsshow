//pageQuiButton.vue
<template>
  <div id="pageQuiNav">
    <qui-nav v-on:navClickEvent="doSth" class="small"></qui-nav>
  </div>
</template>

<script>
  import quiNav from '../components/quiNav.vue'
  export default {
    name: 'pageQuiNav',
    components: {
      'qui-nav': quiNav
    },
    methods: {
      doSth: function () {
        alert('navClickEvent')
      },
      doSth2: function () {
        alert('6666')
      }
    }
  }
</script>

<style scoped>
  @import './css/pageQuiButton.css';
</style>
