<template >
  <div>
    <el-row :gutter="2" style="height: 100%">
      <el-col :span="3" style="height: 100%">
        <div style="font-size: 13px">
          <my-title></my-title>
        </div>
      </el-col>

      <el-col :span="20"
              style="height: 100%"
      >
        <el-menu
          style="padding-right: 10px;height: 100%"
          :default-active="menuIndex.headerIndex"
          active-text-color="#67C23A"
          mode="horizontal"
          @select="menuChange">
          <el-menu-item
            style="font-size: 15px;height: 100%;padding-top: -2px"
            v-for="item of this.menuItems"
            :index="item.index"
            :key="item.index"
          >
            <div style="margin-top: -10px">{{item.label}}</div>
          </el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="1" style="margin-top: 1px;height: 100%">
        <div class="block" @click="clickHead" style="margin-right: -2px">
          <el-avatar :size="35" :src="headImage" ></el-avatar>
        </div>
      </el-col>

      <!-- 显示用户名 -->
<!--      <el-col :span="19"-->
<!--              style="height: 100%"-->
<!--      >-->
<!--        <el-menu-->
<!--          style="padding-right: 10px;height: 100%"-->
<!--          :default-active="menuIndex.headerIndex"-->
<!--          active-text-color="#67C23A"-->
<!--          mode="horizontal"-->
<!--          @select="menuChange">-->
<!--          <el-menu-item-->
<!--            style="font-size: 15px;height: 100%;padding-top: -2px"-->
<!--            v-for="item of this.menuItems"-->
<!--            :index="item.index"-->
<!--            :key="item.index"-->
<!--          >-->
<!--            <div style="margin-top: -10px">{{item.label}}</div>-->
<!--          </el-menu-item>-->

<!--        </el-menu>-->
<!--      </el-col>-->
<!--      <el-col :span="2" style="margin-top: 1px;height: 100%">-->
<!--        <div class="block" @click="clickHead">-->
<!--          <el-row>-->
<!--            <el-col :span="12">-->
<!--              <el-avatar :size="35" :src="headImage" ></el-avatar>-->
<!--            </el-col>-->
<!--            <el-col :span="12" style="font-size: 20px;margin-top: 4px">-->
<!--              <span >{{this.userName}}</span>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </div>-->
<!--      </el-col>-->
    </el-row>




  </div>
</template>

<script>
import title from "./Title.vue";
import {LIFE_SESSION_USER_ID} from "../../commom/constant";
import {menuIndex} from "../../commom/global";

export default {
  name: "HeaderCom",
  computed: {
    menuIndex() {
      return menuIndex
    }
  },
  props:{
    isShowAside:Boolean,
    changeAside:Function,
  },
  mounted() {
    this.userName = sessionStorage.getItem(LIFE_SESSION_USER_ID)
  },
  components:{
    myTitle:title
  },
  data(){
    return{
      titleImage:'static/images/sky.jpg',
      headImage:"static/images/head.png",
      userName:'',
      menuItems:[{label:'音乐',index:'0',path:window.g.routePath.MUSIC},{label:'电影',index: '1',path:window.g.routePath.MOVIE}]
    }
  },
  methods:{
    menuChange(key){
      if(key === menuIndex.headerIndex){
        return
      }
      menuIndex.asideIndex=''
      menuIndex.headerIndex = key
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
