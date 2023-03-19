<template >
  <div>
    <el-menu
      :collapse="isShowAside"
      class="el-aside-menu"
      background-color="rgba(240, 242, 241, 0.8)"
      text-color="black"
      style="height: 100%"
      @select="handleClick"
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
      <el-menu-item index="-1" style="margin-bottom: 0">
        <span>退出登录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {deleteCookie, getCookie, setCookie} from "../../commom/utils";
import {LIFE_COOKIE} from "../../commom/constant";

export default {
  name: "AsideCom",
  props:{
    isShowAside:Boolean
  },
  methods:{
    handleClick(value){
      if(value === '-1'){
        this.logOut()
      }
    },
    logOut(){
      // console.log('before delete:'+getCookie(LIFE_COOKIE))
      deleteCookie(LIFE_COOKIE)
      // console.log('after delete:'+getCookie(LIFE_COOKIE))
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.el-aside-menu:not(.el-menu--collapse) {
  width: 150px;
  min-width: 20px;
  min-height: 400px;
}
</style>
