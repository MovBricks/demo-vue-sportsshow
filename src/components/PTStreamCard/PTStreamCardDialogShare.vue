<template>
  <div class="backdrop">
    <div class="overlay" v-on:click="overlayClick()"></div>
    <div class="dialogContext">
      <div class="dialogContextHead">
        <h3>分享给你的关注者?</h3>
      </div>
      <div class="dialogContextComment">
        <div class="commentTips">
          <div class="commentTipsWrapper" v-bind:style="{height: this.commentReplyHeight + 'px'}">
            <textarea v-model="commentReplyInputText" placeholder="添加评论..." class="commentTips" v-on:focus="changeCommentExpend(false)" v-on:blur="changeCommentExpend(true)"></textarea>
          </div>
        </div>
      </div>
      <div class="dialogContextCardsItemIconDetail">
        <div class="cardsItemHeadIcon">
          <img :src="commentReplyCardsItemHeadIconSrc" alt="">
          <!--<img src="https://pbs.twimg.com/profile_images/814218236904488960/XnQ8GQa__bigger.jpg" alt="">-->
        </div>
        <div class="cardsItemDetail">
          <div class="cardsItemTopInfo">
            <span class="cardsItemID">{{commentReplyCardsItemID}}</span><span class="cardsItemTime">{{cardsItemTime}}</span>
          </div>
          <p class="cardsItemText">{{commentReplyCardsItemText}}</p>
        </div>
      </div>
      <div class="dialogShareTool">
        <button class="dialogShareToolButton">分享</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'PTStreamCardDialogShare',
    data: function () {
      return {
        commentReplyExpend: false,
        commentReplyHeight: 35,
        commentReplyInputText: ''
      }
    },
    props: {
      commentReplyCardsItemHeadIconSrc: {
        default: '',
        type: String
      },
      commentReplyCardsItemID: {
        default: 'N/A',
        type: String
      },
      commentReplyCardsItemText: {
        default: 'N/A',
        type: String
      }
    },
    components: {
    },
    computed: {
      cardsItemTime: function () {
        return '1小时前'
      }
    },
    methods: {
      overlayClick () {
        this.$emit('overlayClick')
      },
      imgInputlick: function () {
        alert('imgInputlick')
      },
      changeCommentExpend: function (isblur) {
        if (isblur === true) {
          if (!this.commentReplyExpend || this.commentReplyInputText !== '') {
            return
          }
        } else {
          if (this.commentReplyExpend) {
            return
          }
        }
        this.commentReplyExpend = !this.commentReplyExpend
        this.commentReplyHeight = this.commentReplyExpend ? 80 : 35
      }
    }
  }

</script>

<style scoped>
  ul,li,p,h3{
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  button{
    border-width: 0;
    padding: 0;
    background-color: rgba(0,0,0,0);
    outline: none;
  }
  button:hover{
    cursor:pointer
  }

  textarea{
    border-width: 0;
    padding: 0;
    outline: none;
    resize: none;
  }
  .backdrop{
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.5;
    background-color: rgb(0, 0, 0);
    z-index: 1001;
  }
  .dialogContext{
    width: 590px;
    z-index: 1010;
    border-radius: 6px;
    background-color: #ffffff;
  }
  .dialogContextHead{
    border-radius: 6px 6px 0 0;
    padding: 12px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e1e8ed;
  }
  .dialogContextCardsItemIconDetail{
    display: flex;
    padding: 15px;
    min-height: 50px;
    border-radius: 0 0 6px 6px;
  }
  .cardsItemHeadIcon{
    margin-top: 5px;
    margin-right: 10px;
    width: 48px;
    height: 48px;
    /*box-sizing: content-box;*/
    flex-shrink: 0;
  }
  .cardsItemHeadIcon>img{
    width: 100%;
    height: 100%;
    border-radius:50%;
  }

  .cardsItemTopInfo{
    padding: 5px 0;
  }
  .cardsItemID{
    font-weight: bold;
  }
  .cardsItemTime:hover,
  .cardsItemID:hover{
    cursor: pointer;
    color: #0084B4;
    text-decoration: underline;
  }
  .cardsItemTime{
    padding-left: 5px;
    font-size: 0.9rem;
    color: #657786;
  }

  .cardsItemText{
    color: #14171a;
    font-size: 0.9rem;
  }

  .dialogContextComment{
    background-color: rgb(232,245,253);
    padding: 15px;

  }

  .dialogContextCommentTitle>span {
    color: #0084B4;
  }
  .commentTips{
    /*overflow: hidden;*/
    flex-grow: 1;
    /*color: #1DA1F2;*/
    height: 100%;
  }


  .commentTipsWrapper{
    box-sizing: border-box;
    padding: 4px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    border: 2px solid rgb(198,231,251);
    border-radius: 18px;
    height: 80px;
    transition: height .3S ease
  }

  .imgInputWrapper>img {
    width: 25px;
    height: 25px;
  }

  .dialogShareTool{
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    padding-top: 0px;
  }

  .dialogShareToolButton{
    padding: 6px 16px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
    border: 1px solid #1da1f2;
    color: #fff;
    background-color: #4AB3F4;
    /*border-color: transparent;*/
  }
  .dialogShareToolButton:hover{
    background-color: #1DA1F2;
    border-color: #1DA1F2;
  }

  .commentTipsToolSend:hover{
    background-color: #1DA1F2;
    border-color: #1DA1F2;
  }


  @import "../css/normalize.css";
</style>
