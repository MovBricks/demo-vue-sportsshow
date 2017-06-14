<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot><!--重点在这里-->
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载'
      }
    },
//    绑定事件的关键代码
    methods: {
      btnClickEvent: function () {
        alert(this.msg)
//      关键代码父组件触发自定义事件
        this.$emit('btnCaaa')
      }
    }
  }
</script>

<style scoped>
  @import './css/qui-btn.import.css';
</style>
