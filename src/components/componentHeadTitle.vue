<template>
  <div class="compHeaderTitleNav">
    <div>
      <el-button size="large" class="headerButton">
        <img class="litImage" src="../assets/imgLit/lit-person.png" alt="个人">个人</el-button>
      <el-button size="large" class="headerButton">
        <img class="litImage" src="../assets/imgLit/lit-home.png" alt="主页">主页</el-button>
      <el-button size="large" class="headerButton">
        <img class="litImage" src="../assets/imgLit/lit-friends.png" alt="朋友">朋友</el-button>
    </div>
    <div>
      <el-button icon="setting" size="large" class="headerButton"></el-button>
      <el-button icon="message" size="large" class="headerButton"></el-button>
      <div class="headerUserIcon">
        <slot name="comp-head-title-nav-icon" ></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    },
    methods: {
      navClickEvent: function (items, index) {
        /* 默认切换类的动作 */
        items.forEach(function (el) {
          el.active = false
        })
        items[index].active = true
        /* 开放用户自定义的接口 */
        this.$emit('navClickEvent', items, index)
      }
    }
  }
</script>
<style scoped>

  .compHeaderTitleNav,
  .compHeaderTitleNav>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerButton{
    border-width: 0;
  }

  .litImage{
    width: 16px;
    height: 16px;
  }
  .headerUserIcon{
    width:50px;
    height:50px;
    border-radius:50%;
    overflow:hidden;
  }
  .headerUserIcon img{
    width: 100%;
    height: 100%;
  }
</style>

