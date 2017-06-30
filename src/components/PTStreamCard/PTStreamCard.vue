<template>
  <li>
    <div class="streamCardsItem">
      <div class="cardsItemHeadIcon">
        <!--<img src="../assets/timg.png" alt="">-->
        <img src="https://pbs.twimg.com/profile_images/814218236904488960/XnQ8GQa__bigger.jpg" alt="">
      </div>
      <div class="cardsItemDetail">
        <div class="cardsItemTopInfo">
          <span class="cardsItemID">{{cardsItemID}}</span><span class="cardsItemTime">{{cardsItemTime}}</span>
        </div>
        <p class="cardsItemText">{{cardsItemText}}</p>
        <slot></slot>
        <ul class="cardsItemBottomTool">
          <li>
            <button class="cardsItemBottomToolButton maskIconComment" v-on:click="buttonCommentClick()">
              <!--<img class="cardsItemBottomToolButtonComment" src="../assets/cardsItem/comment.svg" alt="回复">-->
            </button>
          </li>
          <li>
            <button class="cardsItemBottomToolButton maskIconShare" v-on:click="buttonShareClick()">
              <!--<img src="../assets/cardsItem/share.svg" alt="转发">-->
            </button>
          </li>
          <li>
            <button class="cardsItemBottomToolButton cardsItemBottomToolButtonLike maskIconLike">
              <!--<img src="../assets/cardsIheart-like.net.svg.svg" alt="点赞">-->
              <div style="width: 20px;height: 20px;display: inline-block;"></div>
              <div class="cardsItemBottomToolButtonCountLike">{{countLike}}</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>

  export default {
    name: 'PTStreamCard',
    data: function () {
      return {
        commentInputText: '',
        commentExpend: false,
        commentHeight: 30,
        cardsItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, blanditiis doloribus eaque officia provident quasi quisquam rerum similique voluptatum.',
        cardsItemID: '我是用户名'
      }
    },
    props: {
      countLike: {
        default: 120,
        type: Number
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
      imgInputlick: function () {
        alert('imgInputlick')
      },
      changeCommentExpend: function (isblur) {
        console.log('isblur:' + isblur + ' ' + this.commentExpend)
        if (isblur === true) {
          if (!this.commentExpend || this.commentInputText !== '') {
            return
          }
        } else {
          if (this.commentExpend) {
            return
          }
        }
        this.commentExpend = !this.commentExpend
        this.commentHeight = this.commentExpend ? 80 : 30
      },
      buttonCommentClick: function () {
        this.$emit('buttonCommentClick')
      },
      buttonShareClick: function () {
        this.$emit('buttonShareClick')
      }
    }
  }

</script>

<style scoped>
  ul,li,p{
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
  .streamCardsItem{
    display: flex;
    border: 1px solid #e6ecf0;
    padding: 9px 12px;
    background-color: #ffffff;
  }
  .streamCardsItem:hover{
    background-color:#f5f8fa
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
  .cardsItemDetail{
    /*width: 530px;*/
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
  .cardsItemBottomTool{
    display: flex;
  }
  .cardsItemBottomTool>li{
    padding-right: 60px;
  }
  .cardsItemBottomToolButton{
    height: 20px;
    width: 20px;
  }

  .cardsItemBottomToolButtonLike{
    display: flex;
    width: auto;
  }

  .maskIconComment{
    background: url(../../assets/cardsItem/comment.svg) no-repeat center;
  }
  .maskIconComment:hover{
    background-image: url(../../assets/cardsItem/comment-hover.svg);
  }

  .maskIconShare{
    background: url(../../assets/cardsItem/share.svg) no-repeat center;
  }
  .maskIconShare:hover{
    background-image: url(../../assets/cardsItem/share-hover.svg);
  }

  .maskIconLike{
    background: url(../../assets/cardsItem/heart-like.svg) no-repeat left;
    color: #14171a;
  }
  .maskIconLike:hover{
    background-image: url(../../assets/cardsItem/heart-like-hover.svg);
    color: #e0245e;
  }

  .cardsItemBottomToolButtonCountLike{

  }
  @import "../css/normalize.css";
</style>
