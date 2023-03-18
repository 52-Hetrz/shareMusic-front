<template >
  <div>
    <el-row :gutter="2">
      <el-col :span="4" >
        <div class="block">
          <el-image
            style="width: 250px;height: 65px"
            :src="titleImage"
            fit="fill"
          >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </el-col>

      <el-col :span="18"
      >
        <el-menu
          style="padding-right: 10px"
          :default-active="activeIndex"
          active-text-color="#67C23A"
          mode="horizontal"
          @select="menuChange">
          <el-menu-item
            v-for="item of this.menuItems"
            :index="item.index"
            :key="item.index"
          >
            {{item.label}}
          </el-menu-item>
<!--          <el-menu-item-->
<!--            index="-1"-->
<!--            key="-1"-->
<!--            style="float: right">-->
<!--            用户-->
<!--          </el-menu-item>-->
        </el-menu>
      </el-col>
      <el-col :span="2" style="margin-top: 6px;padding-right: -2px">
        <div class="block" @click="clickHead">
          <el-avatar :size="45" :src="headImage" ></el-avatar>
        </div>
      </el-col>
    </el-row>




  </div>
</template>

<script>
import {getCookie} from "../../commom/utils";
import {LIFE_COOKIE, LIFE_SESSION_USER_ID} from "../../commom/constant";

export default {
  name: "HeaderCom",
  props:{
    isShowAside:Boolean,
    changeAside:Function
  },
  data(){
    return{
      titleImage:'static/images/sky.jpg',
      headImage:"static/images/head.png",
      activeIndex:'0',
      menuItems:[{label:'音乐',index:'0',path:'/music'},{label:'电影',index: '1',path:'/movie'}]
    }
  },
  methods:{
    menuChange(key){
      if(key === this.activeIndex){
        return
      }
      this.activeIndex = key
      this.$router.push(this.menuItems[key].path)
    },
    clickHead(){
      this.changeAside()
    }
  }

}
</script>

<style scoped>

</style>
