<template>
  <el-container style="height: 100%">
    <el-container>
      <el-header style="height: 8%;padding: 0 0 0 0">
        <HeaderCom :isShowAside="isShowAside" :changeAside="clickAside"></HeaderCom>
      </el-header>
    </el-container>


    <el-container style="height: 87%">
      <el-main style="height: 100%;background-color: black" >
        <router-view/>
      </el-main>
      <AsideCom
        :isShowAside="isShowAside"
      >

      </AsideCom>
    </el-container>

    <el-footer style="height: 5%">
      <FooterCom></FooterCom>
    </el-footer>

  </el-container>
</template>

<script>
import HeaderCom from "./commonComponents/HeaderCom.vue";
import AsideCom from "./commonComponents/AsideCom.vue";
import FooterCom from "./commonComponents/FooterCom.vue";
import {getCookie} from "../commom/utils";
import {LIFE_COOKIE, LIFE_SESSION_USER_ID} from "../commom/constant";
export default {
  name: "Main",
  mounted() {
  },
  components:{
    HeaderCom,
    AsideCom,
    FooterCom
  },
  data(){
    return{
      isShowAside:false,
    }
  },
  methods:{
    clickAside(){
      this.isShowAside = !this.isShowAside
      console.log(this.isShowAside)
    }
  }
}
</script>

<style scoped>

</style>
