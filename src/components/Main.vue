<template>
  <el-container style="height: 100%">
    <el-header style="height: 5%">
      <HeaderCom></HeaderCom>
    </el-header>

    <el-container style="height: 90%">
      <el-main style="height: 100%;background-color: black" >
        <router-view/>
      </el-main>
      <el-aside style="height: 100%;width: 10%; background-color: aquamarine" >
        <AsideCom></AsideCom>
      </el-aside>
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
    console.log("cookie:"+getCookie(LIFE_COOKIE))
    console.log('session:'+sessionStorage.getItem(LIFE_SESSION_USER_ID))
  },
  components:{
    HeaderCom,
    AsideCom,
    FooterCom
  }
}
</script>

<style scoped>

</style>
