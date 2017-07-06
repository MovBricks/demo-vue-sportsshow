<template>
  <div>
    <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot><!--重点在这里-->
    <span>{{msg}}</span>
  </button>
    <div>
      <el-upload
        action=""
        list-type="picture-card"
        :auto-upload="false"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载'
      }
    },
    data: function () {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      btnClickEvent: function () {
        alert(this.msg)
//      关键代码父组件触发自定义事件
        this.$emit('btnCaaa')
      }
    }
  }
</script>

<style scoped>
  @import './css/qui-btn.import.css';
</style>
