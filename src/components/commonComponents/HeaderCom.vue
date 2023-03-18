<template >
  <div>
    <el-row style="margin-right: 2%">
      <el-col :span="4">
        <span>image</span>
      </el-col>

      <el-col :span="20">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="menuChange">
          <el-menu-item
            v-for="item of this.menuItems"
            :index="item.index"
            :key="item.index"
          >
            {{item.label}}
          </el-menu-item>
          <el-menu-item
            index="-1"
            key="-1"
            style="float: right">
            用户
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {getCookie} from "../../commom/utils";
import {LIFE_COOKIE, LIFE_SESSION_USER_ID} from "../../commom/constant";

export default {
  name: "HeaderCom",
  data(){
    return{
      activeIndex:'0',
      menuItems:[{label:'音乐',index:'0',path:'/music'},{label:'电影',index: '1',path:'/movie'}]
    }
  },
  methods:{
    menuChange(key){
      if(key === this.activeIndex){
        return
      }
      if(key === '-1'){
        //todo:处理侧边栏
        return
      }
      this.activeIndex = key
      this.$router.push(this.menuItems[key].path)

    }
  }

}
</script>

<style scoped>

</style>
