<template>
  <div>
    准备发布
    <el-form
      :model="toPublishData"
      label-position="left"
    >
      <el-form-item>

      </el-form-item>

    </el-form>
  </div>

</template>

<script>

import {TO_PUBLISH_MUSIC} from "../../../commom/constant";
import {deepCopy} from "../../../commom/utils";
export default {
  name: "ToPublish",

  data(){
    return{
      toPublishData: deepCopy(TO_PUBLISH_MUSIC)
    }
  }
}
</script>

<style scoped>

</style>
