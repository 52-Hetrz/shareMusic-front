<template>
  <div>
    准备发布
    <el-form
      :model="toPublishData"
      label-position="left"
      label-width="80px"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-form-item label="标题">
              <el-input v-model="toPublishData.title"></el-input>
            </el-form-item>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-form-item label="音乐名称">
              <el-input v-model="toPublishData.musicName"></el-input>
            </el-form-item>
          </el-form-item>
        </el-col>
      </el-row>





    </el-form>
  </div>

</template>

<script>

import {TO_PUBLISH_MUSIC} from "../../../../commom/constant";
import {deepCopy, showTypeMessage} from "../../../../commom/utils";
import {allMusicTags} from "../../../../apis/tag";
export default {
  name: "ToPublishMusic",
  mounted() {
    this.getAllTags()
  },

  data(){
    return{
      toPublishData: deepCopy(TO_PUBLISH_MUSIC),
      musicTags:[],
    }
  },
  methods:{
    async getAllTags(){
      let res = await allMusicTags()
      if(res.code === 200){
        this.musicTags = res.data
      }else{
        showTypeMessage(this,"获取标签失败",'error')
      }
      console.log(this.musicTags)
    }
  }
}
</script>

<style scoped>

</style>
