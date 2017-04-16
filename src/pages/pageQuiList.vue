//pageQuiButton.vue
<template>
  <div id="pageQuiNav">
    <qui-list v-on:btnCaaa="doSth"></qui-list>
    <qui-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></qui-list>
    <qui-list ref="child1" tipsText="最右边是箭头" currentView="qui-arrow"></qui-list>
  </div>
</template>

<script>
  import quiList from '../components/quiList.vue'
  export default {
    name: 'pageQuiNav',
    components: {
      'qui-list': quiList
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

</style>
