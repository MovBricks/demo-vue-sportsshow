<template>
  <div id="pagePiazzaTall">
    <comment-box></comment-box>
      <stream-card
        v-for="(item,index) in streamCardList"
        v-on:buttonCommentClick="showDialogComment(index)"
        v-on:buttonShareClick="showDialogShare(index)"
        :key="index"
        :cardsItemIndex="index"
        :cardsItemHeadIconSrc="item.cardsItemHeadIconSrc"
        :cardsItemID="item.cardsItemID"
        :cardsItemTimeUTC="item.cardsItemTimeUTC"
        :cardsItemText="item.cardsItemText"
        :countLike="item.countLike"
      >
        <stream-card-chose-slot :slotObj="item.cardsItemSlot" ></stream-card-chose-slot>
      </stream-card>
      <stream-card-dialog-comment
        v-if="dialogCommentShow"
        v-on:overlayClick="hideDialogComment()"
        :commentReplyCardsItemID="streamCardList[dialogShowIndex].cardsItemID"
        :commentReplyCardsItemText="streamCardList[dialogShowIndex].cardsItemText"
        :commentReplyCardsItemHeadIconSrc="streamCardList[dialogShowIndex].cardsItemHeadIconSrc"
      ></stream-card-dialog-comment>
      <stream-card-dialog-share
        v-if="dialogShareShow"
        v-on:overlayClick="hideDialogShare()"
        :commentReplyCardsItemID="streamCardList[dialogShowIndex].cardsItemID"
        :commentReplyCardsItemText="streamCardList[dialogShowIndex].cardsItemText"
        :commentReplyCardsItemHeadIconSrc="streamCardList[dialogShowIndex].cardsItemHeadIconSrc"
      ></stream-card-dialog-share>
  </div>
</template>

<script>
  import CommentBox from '../components/PTStreamCard/PTCommentBox.vue'
  import StreamCard from '../components/PTStreamCard/PTStreamCard.vue'
  import StreamCardDialogComment from '../components/PTStreamCard/PTStreamCardDialogComment.vue'
  import StreamCardDialogShare from '../components/PTStreamCard/PTStreamCardDialogShare.vue'
  import StreamCardChoseSlot from '../components/PTStreamCard/PTStreamCardChoseSlot.vue'
  export default {
    name: 'pagePiazzaTall',
    components: {
      'comment-box': CommentBox,
      'stream-card': StreamCard,
      'stream-card-dialog-comment': StreamCardDialogComment,
      'stream-card-dialog-share': StreamCardDialogShare,
      'stream-card-chose-slot': StreamCardChoseSlot
    },
    data: function () {
      return {
        dialogCommentShow: false,
        dialogShareShow: false,
        dialogShowIndex: 0,
        streamCardList: []
      }
    },
    methods: {
      hideDialogComment: function () {
        this.dialogCommentShow = false
      },
      showDialogComment: function (index) {
        this.dialogShowIndex = index
        this.dialogCommentShow = true
      },
      hideDialogShare: function () {
        this.dialogShareShow = false
      },
      showDialogShare: function (index) {
        this.dialogShowIndex = index
        this.dialogShareShow = true
      },
      makeTestData: function () {
        return [
          {
            cardsItemHeadIconSrc: 'https://avatars0.githubusercontent.com/u/25025692?v=3&s=460',
            cardsItemID: 'Move Brick',
            cardsItemTimeUTC: 0,
            cardsItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, temporibus!',
            countLike: 120,
            cardsItemSlot: {
              type: 'img',
              data: 'https://cn.vuejs.org/images/logo.png'
            }
          },
          {
            cardsItemHeadIconSrc: 'https://avatars2.githubusercontent.com/u/15327928?v=3&s=460',
            cardsItemID: 'Gary Zhang',
            cardsItemTimeUTC: 0,
            cardsItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            countLike: 22,
            cardsItemSlot: {
              type: 'img',
              data: 'http://www.easyicon.net/api/resizeApi.php?id=1202635&size=128'
            }
          }
        ]
      },
      axiosGetStreamCardList: function () {
        this.axios.get('/streamCardList').then(response => {
          response.data.streamCardList = this.makeTestData()
          this.streamCardList = response.data.streamCardList
        }).catch((err) => {
          console.log('axiosGetStreamCardList err:' + err)
        })
      }
    },
    mounted () {
      this.axiosGetStreamCardList()
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
