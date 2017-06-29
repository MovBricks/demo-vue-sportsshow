<template>
  <div id="pagePiazzaTall">
    <comment-box></comment-box>
    <stream-card><img src="../assets/logo.png"/></stream-card>
  </div>
</template>

<script>
  import CommentBox from '../components/PTCommentBox.vue'
  import StreamCard from '../components/PTStreamCard.vue'
  export default {
    name: 'pagePiazzaTall',
    components: {
      'comment-box': CommentBox,
      'stream-card': StreamCard
    },
    methods: {
    }
  }
</script>

<style scoped>
  #pagePiazzaTall{
    width: 590px;
    padding-left: 100px;
    padding-top: 50px;
  }
</style>
