<template >
  <div>
    <el-menu
      ref="elMenu"
      :collapse="isShowAside"
      class="el-aside-menu"
      background-color="rgba(240, 242, 241, 0.8)"
      text-color="black"
      :default-active="menuIndex.asideIndex"
      style="height: 100%"
      @select="handleClick"
    >
      <template
        v-for="item in this.menuItems"
      >
        <el-menu-item
          style="text-align: left"
          v-if="!item.isMulti"
          :index=item.path
          :key=item.index
        >
          <i :class=item.ico></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu
          style="text-align: left"
          v-else
          :index=item.index
        >
          <template slot="title">
            <i :class=item.ico></i>
            <span>{{item.label}}</span>
          </template>
              <el-menu-item
                style="text-align: center"
                v-for="subItem in item.children"
                :index=subItem.path
                :key=subItem.index
                :path=subItem.path
              >{{subItem.label}}</el-menu-item>
        </el-submenu>
      </template>
<!--      <el-menu-item-->
<!--        v-for="item in this.menuItems"-->
<!--        :index=item.index-->
<!--        :key=item.index-->
<!--      >-->
<!--        <i :class=item.ico></i>-->
<!--        <span slot="title">{{item.label}}</span>-->
<!--      </el-menu-item>-->

      <el-menu-item index="-1" style="margin-bottom: 0">
        <span>退出登录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {deleteCookie, getCookie, setCookie} from "../../commom/utils";
import {LIFE_COOKIE} from "../../commom/constant";
import {menuIndex} from "../../commom/global";

export default {
  name: "AsideCom",
  computed: {
    menuIndex() {
      return menuIndex
    }
  },
  props:{
    isShowAside:Boolean,
  },
  data(){
    return{
      menuItems:[
        {index:'0', label:'我的信息', path:window.g.routePath.INFO, ico:'el-icon-user-solid',isMulti:false},
        {index:'1', label:'我的发布', ico:'el-icon-upload2',children:[
            {label:'音乐',index:'1-1', path:window.g.routePath.PUBLISHED_MUSIC},
            {label:'电影',index:'1-2', path:window.g.routePath.PUBLISHED_MOVIE}
          ],isMulti:true},
        {index:'2', label:'我的收藏', path:window.g.routePath.FAVOURITE, ico:'el-icon-star-on',isMulti:false},
        {index:'3', label:'我的消息', path:window.g.routePath.MESSAGE, ico:'el-icon-chat-dot-round',isMulti:false},
      ],
    }
  },
  methods:{
    handleClick(index){
      if(index === '-1'){
        this.logOut()
      }else{
        if(index === menuIndex.asideIndex){
          return
        }
        menuIndex.asideIndex = index
        menuIndex.headerIndex = ''
        this.$router.push(index)
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
