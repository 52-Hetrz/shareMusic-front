<template >
  <div>
    <el-menu
      :collapse="isShowAside"
      class="el-aside-menu"
      background-color="rgba(240, 242, 241, 0.8)"
      text-color="black"
      style="height: 100%"
    >
      <el-menu-item index="1">
        <i class="el-icon-user-solid"></i>
        <span slot="title">我的信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-upload2"></i>
        <span slot="title">我的发布</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-star-on"></i>
        <span slot="title">我的收藏</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-chat-dot-round"></i>
        <span slot="title">我的消息</span>
      </el-menu-item>
      <el-menu-item index="5" style="margin-bottom: 0">
        <span>退出登录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideCom",
  props:{
    isShowAside:Boolean
  },
}
</script>

<style scoped>
.el-aside-menu:not(.el-menu--collapse) {
  width: 150px;
  min-width: 20px;
  min-height: 400px;
}
</style>
