<template>
<span>hello this is header</span>
</template>

<script>
import {getCookie} from "../../commom/utils";
import {LIFE_COOKIE, LIFE_SESSION_USER_ID} from "../../commom/constant";

export default {
  name: "HeaderCom",
  mounted() {
    console.log("cookie:"+getCookie(LIFE_COOKIE))
    console.log('session:'+sessionStorage.getItem(LIFE_SESSION_USER_ID))
  }
}
</script>

<style scoped>

</style>
