<template >
  <div>
    <el-menu
      ref="elMenu"
      :collapse="isShowAside"
      class="el-aside-menu"
      background-color="rgba(240, 242, 241, 0.8)"
      text-color="black"
      :default-active="activeIndex"
      style="height: 100%"
      @select="handleClick"
    >
      <el-submenu
      :index="this.menuItems[1].index"
      >
        <template slot="title"><i :class=this.menuItems[1].ico></i>
          <span>{{this.menuItems[1].label}}</span></template>
        <el-menu-item
          style="text-align: center"
          v-for="item in this.menuItems[1].children"
          :index=item.path
          :key=item.index
        >{{item.label}}</el-menu-item>
      </el-submenu>
      <el-menu-item
        v-for="item in this.menuItems"
        v-show="item.index!=='1'"
        :index=item.path
        :key=item.index
      >
        <i :class=item.ico></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-menu-item index="-1" style="margin-bottom: 0">
        <i class="el-icon-switch-button"></i>
        <span>退出登录</span>
      </el-menu-item>
<!--        <el-menu-item-->
<!--          style="text-align: center"-->
<!--          :index=this.menuItems[0].path-->
<!--          :key=this.menuItems[0].index-->
<!--        >-->
<!--          <i :class=this.menuItems[0].ico></i>-->
<!--          <span slot="title">{{this.menuItems[0].label}}</span>-->
<!--        </el-menu-item>-->
<!--        <el-submenu-->
<!--          style="text-align: center"-->
<!--          :index=this.menuItems[1].path-->
<!--        >-->
<!--          <template slot="title">-->
<!--            <i :class=this.menuItems[1].ico></i>-->
<!--            <span>{{this.menuItems[1].label}}</span>-->
<!--          </template>-->
<!--              <el-menu-item-->
<!--                style="text-align: center;color: black"-->
<!--                v-for="subItem in this.menuItems[1].children"-->
<!--                :index=subItem.path-->
<!--                :key=subItem.index-->
<!--                :path=subItem.path-->
<!--              >{{subItem.label}}</el-menu-item>-->
<!--        </el-submenu>-->

    </el-menu>

  </div>
</template>

<script>
import {deleteCookie, getCookie, setCookie} from "../../commom/utils";
import {LIFE_COOKIE} from "../../commom/constant";
import {menuIndex} from "../../commom/global";
import bus from "../../commom/eventBus";

export default {
  name: "AsideCom",
  async mounted() {
    await this.invokeIndexAndPath(this.menuItems, this.indexPathMap)
  },
  created() {
    bus.$on('activeIndex',val=>{
      this.activeIndex = val
    })
  },
  props:{
    isShowAside:Boolean,
    defaultIndex:String
  },
  data(){
    return{
      menuItems:[
        {index:'0', label:'我的信息', path:window.g.routePath.INFO, ico:'el-icon-user-solid',isMulti:false},
        {index:'1', label:'我的发布', ico:'el-icon-folder-checked',path:'/user', children:[
            {label:'音乐',index:'1-1', path:window.g.routePath.PUBLISHED_MUSIC, isMulti:false},
            {label:'电影',index:'1-2', path:window.g.routePath.PUBLISHED_MOVIE, isMulti:false}
          ],isMulti:true},
        {index:'2', label:'我的收藏', path:window.g.routePath.FAVOURITE, ico:'el-icon-star-on',isMulti:false},
        {index:'3', label:'我的消息', path:window.g.routePath.MESSAGE, ico:'el-icon-chat-dot-round',isMulti:false},
      ],
      indexPathMap:{},
      activeIndex:this.defaultIndex,
      timeKey:0,
    }
  },
  methods:{
    handleClick(index){
      if(index === '-1'){
        this.logOut()
      }else{
        if(index === this.activeIndex){
          return
        }
        this.activeIndex = index
        this.sendActiveIndex(index)
        sessionStorage.setItem('activeIndex',index)
        this.$router.push(index)
      }
    },
    logOut(){
      deleteCookie(LIFE_COOKIE)
      sessionStorage.clear()
      sessionStorage.setItem('activeIndex','')
      this.$router.push("/")
    },
    invokeIndexAndPath(items, map){
      for(let i in items){
        let item = items[i]
        if(!item.isMulti){
          map[item.index] = item.path
        }else{
            this.invokeIndexAndPath(item.children, map)
        }
      }
    },
    sendActiveIndex(index){
      bus.$emit('activeIndex',index)
    },

  }
}
</script>

<style scoped>
.el-aside-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
