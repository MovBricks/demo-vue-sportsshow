//pageQuiButton.vue
<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn v-on:btnCaaa="doSth" msg="我可以点击" class="small"></qui-btn>
    <qui-btn v-on:btnCaaa="doSth2" msg="取消" class="small"></qui-btn>
    <qui-btn msg="下载" class="with-icon">
      <img slot="icon" class="ico" src="../assets/logo.png" />
    </qui-btn>
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      doSth: function () {
        alert('你点击了组件的click:btnClickEvent')
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
