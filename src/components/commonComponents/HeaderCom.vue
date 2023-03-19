<template >
  <div>
    <el-row :gutter="2">
      <el-col :span="4" >
        <div style="font-size: 13px">
          <my-title></my-title>
        </div>
      </el-col>

      <el-col :span="18"
      >
        <el-menu
          style="padding-right: 10px;margin-top: 4px;height: 20px"
          :default-active="activeIndex"
          active-text-color="#67C23A"
          mode="horizontal"
          @select="menuChange">
          <el-menu-item
            style="height: 20px;font-size: 10px"
            v-for="item of this.menuItems"
            :index="item.index"
            :key="item.index"
          >
            {{item.label}}
          </el-menu-item>

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
import title from "./Title.vue";

export default {
  name: "HeaderCom",
  props:{
    isShowAside:Boolean,
    changeAside:Function
  },
  components:{
    myTitle:title
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
