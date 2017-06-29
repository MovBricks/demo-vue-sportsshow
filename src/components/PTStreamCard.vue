<template>
  <li>
    <div class="streamCardsItem">
      <div class="cardsItemHeadIcon">
        <img src="../assets/timg.png" alt="">
      </div>
      <div class="cardsItemDetail">
        <div class="cardsItemTopInfo">
          <span class="cardsItemID">用户名</span><span class="cardsItemTime">1小时前</span>
        </div>
        <p class="cardsItemText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis placeat provident voluptas voluptate. Doloribus labore mollitia sunt. Ad dicta, dolores eius ex laborum nobis numquam odit possimus quibusdam veritatis? Dolorum sint tenetur veniam. Expedita incidunt, odio? Labore nesciunt repellendus voluptate.</p>
        <slot></slot>
        <ul class="cardsItemBottomTool">
          <li>回复</li>
          <li>转发</li>
          <li>点赞</li>
          <li>私信</li>
        </ul>
      </div>
    </div>
  </li>
</template>



<script>

  export default {
    name: 'PTCommentBox',
    data: function () {
      return {
        commentInputText: '',
        commentExpend: false,
        commentHeight: 30
      }
    },
    props: {
      msg: {
        default: '下载'
      },
      tipsText: {
        default: '默认的文案'
      },
      currentView: {
        default: 'qui-btn'
      }
    },
    components: {
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

  }

  .cardsItemHeadIcon{
    margin: 0 10px;
    width: 40px;
    height: 40px;
    border-radius:50%;
    box-sizing: content-box;
    flex-shrink: 0;
  }
  .cardsItemHeadIcon>img{
    width: 100%;
    height: 100%;
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
    font-size: 1rem;
  }
  .cardsItemBottomTool{
    display: flex;
  }
  .cardsItemBottomTool>li{
    padding-right: 10px;
  }

  @import "./css/normalize.css";
</style>
