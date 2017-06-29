<template>
  <div class="commentBox">
    <div class="headIcon">
      <img src="../assets/timg.png" alt="Icon">
    </div>
    <div class="commentTips">
      <div class="commentTipsWrapper" v-bind:style="{height: this.commentHeight + 'px'}">
        <textarea v-model="commentInputText" placeholder="有什么新鲜事?" class="commentTips" v-on:focus="changeCommentExpend(false)" v-on:blur="changeCommentExpend(true)"></textarea>
        <transition name="fade">
        <div class="imgInputWrapper" v-show="!commentExpend" v-on:click="imgInputlick">
          <input type="file" name="media_empty" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" multiple="multiple" class="fileInput">
          <img src="../assets/picture.svg" alt="发表图片">
        </div>
        </transition>
      </div>
      <transition name="fade2">
      <div class="commentTipsTool" v-show="commentExpend">
        <ul class="commentTipsToolEextras">
          <li>
            <button class="commentTipsToolEextrasButton"><img src="../assets/picture.svg"/></button>
          </li>
        </ul>
        <button class="commentTipsToolSend">发送</button>
      </div>
      </transition>
    </div>
  </div>
</template>



<script>
  import quiButton from '../components/quiButton.vue'
  import quiArrow from '../components/quiArrow.vue'
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
      'qui-btn': quiButton,
      'qui-arrow': quiArrow
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
  ul,li{
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
  .commentBox{
    display: flex;
    background-color: rgb(232,245,253);
    padding: 10px 12px;
    width: 590px;
    box-sizing: border-box;
  }
  .commentTips{
    overflow: hidden;
    flex-grow: 1;
    /*color: #1DA1F2;*/
    height: 100%;
  }
  .headIcon{
    margin: 0 10px;
    width: 32px;
    height: 32px;
    border-radius:50%;
    box-sizing: content-box;
  }
  .headIcon img{
    width: 100%;
    height: 100%;
  }

  .commentTipsWrapper{
    box-sizing: border-box;
    padding: 2px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    border: 2px solid rgb(198,231,251);
    border-radius: 18px;
    /*height: 30px;*/
    transition: height .3S ease
  }
  .imgInputWrapper{
    height: 100%;
  }
  .imgInputWrapper:hover {
    cursor:pointer
  }
  .fileInput{
    display: none;
  }
  .imgInputWrapper>img {
     width: 25px;
     height: 25px;
  }

  .commentTipsTool{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .commentTipsToolEextras{
    /*padding-top: 20px;*/
    /*height: 35px;*/
  }
  .commentTipsToolEextrasButton{
    box-sizing: border-box;
    height: 37px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .commentTipsToolEextrasButton:hover{
    background-image: linear-gradient(rgba(255,255,255,0), rgba(0, 132, 180,.1));
    /*background-color: rgba(255,255,255,0.25);*/
    color: #0084B4;
    border-radius: 4px;
    border-width: 1px;
    border-color: rgba(0, 132, 180,.5);
  }

  .commentTipsToolSend{
    padding: 6px 16px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
    border: 1px solid #1da1f2;
    color: #fff;
    background-color: #4AB3F4;
    /*border-color: transparent;*/
  }

  .commentTipsToolSend:hover{
    background-color: #1DA1F2;
    border-color: #1DA1F2;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .fade2-enter-active {
    transition: opacity .3s
  }
  .fade2-leave-active{

  }
  .fade2-enter, .fade2-leave-active {
    opacity: 0
  }

  @import "./css/normalize.css";
</style>
