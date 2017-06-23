<template>
  <div class="compHeaderTitleNav">
    <div class="headerLogo">
      <img class="logoImage" src="../assets/Nuclear.png" alt="logo">猛男计划
    </div>
    <ul class="headerChoseItems">
      <li v-for="(item, index) in items" v-on:click="navClickEvent(items,index)" >
        <a class="headerButton" :class="{headerButtonClicked:item.active}">{{item.text}}</a>
      </li>
    </ul>
    <ul class="headerUsr">
      <li>
        <i class="el-icon-setting"></i>
      </li>
      <li>
        <i class="el-icon-message"></i>
      </li>
      <div class="headerUserIcon">
        <slot name="comp-head-title-nav-icon" ></slot>
      </div>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data: function () {
      return {
        items: [
          {
            text: '个人数据',
            active: true
          },
          {
            text: '朋友PK',
            active: false
          },
          {
            text: '广场闲逛',
            active: false
          }
        ]
      }
    },
    methods: {
      navClickEvent: function (items, index) {
        /* 默认切换类的动作 */
        items.forEach(function (el) {
          el.active = false
        })
        items[index].active = true
        this.changeContextPageIndex(index)
      },
      ...mapActions([
        'changeContextPageIndex'
      ])
    }
  }
</script>
<style scoped>
  ul,li{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .compHeaderTitleNav,
  .compHeaderTitleNav>*{
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
  }
  .compHeaderTitleNav{
    /*justify-content: space-between;*/
  }

  .headerLogo{
    cursor: default;
    padding-left: 10px;
    /*display: flex;*/
    font-size: 2rem;
    color: rgb(156,160,169);
    flex: 1 0 auto;
  }
  .logoImage{
    height: 40px;
  }

  .headerButton{
    /*box-sizing: border-box;*/
    display: inline-block;
    border-width: 0;
    /*background-color: rgb(156,160,169);*/
    color: rgb(156,160,169);
    cursor: pointer;
    padding: 10px 0px;
    margin: 0 10px;
    font-size: 1rem;
    text-align: center;
    width: 80px;
    transition: border-color .3s,background-color .3s,color .3s;
    border-bottom: 3px solid transparent;
  }
  .headerButton:hover{
    color: rgb(255,255,255);
    /*background-color: rgba(210,212,217,0.5);*/
  }
  .headerButtonClicked{
    border-bottom: 3px solid rgb(70,120,216);
    color: rgb(255,255,255);
  }

  .headerChoseItems{
    /*display: flex;*/
    flex: 2 0 auto;
    justify-content: center;
    align-items: baseline;
  }
  .litImage{
    width: 16px;
    height: 16px;
  }

  .headerUsr{
    padding-right: 10px;
    flex: 1.5 0 auto;
    justify-content: flex-end;
    color: rgb(156,160,169);
  }
  .headerUsr>li{
    cursor: pointer;
    width: 25px;
    padding: 0 5px;
  }
  .headerUsr>li:hover{
    color: rgb(255,255,255);
  }

  .headerUserIcon{
    padding: 0 5px;
    cursor: pointer;
    width:40px;
    height:40px;
    border-radius:50%;
    overflow:hidden;
  }
  .headerUserIcon img{
    width: 100%;
    height: 100%;
  }
</style>

