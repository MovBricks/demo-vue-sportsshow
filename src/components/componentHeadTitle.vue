<template>
  <div class="comp-head-title-nav">
    <slot name="comp-head-title-nav-icon"></slot>
    <a v-for="(item, index) in items" :class="[commonClass,item.active ? 'active' : 'inactive']" v-on:click="navClickEvent(items,index)" >
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        commonClass: 'comp-head-title-nav-item',
        items: [
          {
            text: '数字面板',
            active: true
          },
          {
            text: '记录',
            active: false
          },
          {
            text: '社区',
            active: false
          },
          {
            text: '进阶版',
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
        /* 开放用户自定义的接口 */
        this.$emit('navClickEvent', items, index)
      }
    }
  }
</script>
<style scoped>

  .comp-head-title-nav{
    display: flex;
    justify-content: center;

    border-bottom: solid 10px darkred;
  }

  .comp-head-title-nav-item{
    width: 100px;
    text-align: center;
    margin-left: 5px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items:center;
  }

  .inactive:hover{
    background: dodgerblue;
  }

  .active{
    border-bottom:  5px solid goldenrod;
    color: goldenrod;
  }

</style>

