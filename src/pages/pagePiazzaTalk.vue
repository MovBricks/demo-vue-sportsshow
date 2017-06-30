<template>
  <div id="pagePiazzaTall">
    <comment-box></comment-box>
    <stream-card
      v-on:buttonCommentClick="showDialogComment()"
      v-on:buttonShareClick="showDialogShare()"
    >
      <img src="../assets/logo.png"/>
    </stream-card>
    <stream-card-dialog-comment v-show="dialogCommentShow" v-on:overlayClick="hideDialogComment()"></stream-card-dialog-comment>
    <stream-card-dialog-share v-show="dialogShareShow" v-on:overlayClick="hideDialogShare()"></stream-card-dialog-share>
  </div>
</template>

<script>
  import CommentBox from '../components/PTCommentBox.vue'
  import StreamCard from '../components/PTStreamCard/PTStreamCard.vue'
  import StreamCardDialogComment from '../components/PTStreamCard/PTStreamCardDialogComment.vue'
  import StreamCardDialogShare from '../components/PTStreamCard/PTStreamCardDialogShare.vue'
  export default {
    name: 'pagePiazzaTall',
    components: {
      'comment-box': CommentBox,
      'stream-card': StreamCard,
      'stream-card-dialog-comment': StreamCardDialogComment,
      'stream-card-dialog-share': StreamCardDialogShare
    },
    data: function () {
      return {
        dialogCommentShow: false,
        dialogShareShow: false
      }
    },
    methods: {
      hideDialogComment: function () {
        this.dialogCommentShow = false
      },
      showDialogComment: function () {
        this.dialogCommentShow = true
      },
      hideDialogShare: function () {
        this.dialogShareShow = false
      },
      showDialogShare: function () {
        this.dialogShareShow = true
      }
    }
  }
</script>

<style scoped>
  #pagePiazzaTall{
    width: 590px;
    /*padding-left: 100px;*/
    /*padding-top: 50px;*/
  }
</style>
