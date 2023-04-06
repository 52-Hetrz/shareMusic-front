<template>
  <el-container style="height: 100%;">
    <el-container style="height: 5.5%;padding: 0 0 0 0">
      <el-header style="height: 100%">
        <HeaderCom
          :isShowAside="isShowAside" :changeAside="clickAside"
          style="height: 100%"></HeaderCom>
      </el-header>
    </el-container>


    <el-container style="height: 89%">
      <el-main style="height: 100%;background-color: rgba(238, 242, 240, 0.2);padding: 5px 5px 0 0" >
        <router-view/>
      </el-main>
      <AsideCom
        :isShowAside="isShowAside"
        style="height: 100%"
      >
      </AsideCom>
    </el-container>

    <el-footer style="height: 6%;background-color: black">
      <FooterCom></FooterCom>
    </el-footer>

  </el-container>
</template>

<script>
import HeaderCom from "./commonComponents/HeaderCom.vue";
import AsideCom from "./commonComponents/AsideCom.vue";
import FooterCom from "./commonComponents/FooterCom.vue";
import {deepCopy, getCookie} from "../commom/utils";
import {LIFE_COOKIE, LIFE_SESSION_USER_ID} from "../commom/constant";
import {activateIndex} from "../commom/global";
import bus from "../commom/eventBus";
export default {
  name: "Main",
  mounted() {
    bus.$emit('activeIndex',
      sessionStorage.getItem('activeIndex')===''||sessionStorage.getItem('activeIndex')===null?
      window.g.routePath.MUSIC:sessionStorage.getItem('activeIndex')
    )
  },
  components:{
    HeaderCom,
    AsideCom,
    FooterCom
  },
  data(){
    return{
      isShowAside:false,
      //activeIndex:sessionStorage.getItem('activeIndex')===''?window.g.routePath.MUSIC:sessionStorage.getItem('activeIndex')
    }
  },
  methods:{
    clickAside(){
      this.isShowAside = !this.isShowAside
    },
  }
}
</script>

<style scoped>

</style>
