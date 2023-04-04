<template >
    <el-skeleton
      animated
      :loading=loading
      style="padding: 3px;height: 100%;"
    >
<!--      加载占位      -->
      <template slot="template" style="height: 100%">
        <el-row style="display: flex;flex-wrap: wrap;height: 100%">
          <el-col :span="8" style="margin: 0;padding:0">
            <el-skeleton-item
              variant="image"
              style="width: 100%; height: 100%;"
            />
          </el-col>

          <el-col :span="12" :offset="1" style="height: 100%">
            <div style="padding-top: 2%;height: 100%">
              <el-skeleton-item variant="h3" style="width: 50%;" />
              <div
                style="display: flex; align-items: center;margin-top: 3%;"
              >
                <el-skeleton-item variant="text" style="margin-right: 20px;"/>
                <el-skeleton-item variant="text" style="margin-right: 10%"/>
              </div>
              <div
                style="display: flex; align-items: center;margin-top: 3%; height: 45px;"
              >
                <el-skeleton-item variant="text" />
              </div>
              <div
                style="display: flex; align-items: center;margin-top: 3%; height: 45px;"
              >
                <el-skeleton-item variant="text" />
              </div>

            </div>
          </el-col>

          <el-col :span="2" :offset="1">
            <el-skeleton-item style="align-items: center;width: 80%;margin-top: 50%;margin-right: 10%"
              variant="button"
            />
          </el-col>
        </el-row>
      </template>

      <template v-show="!loading" style="height: 100%">
        <el-row style="display: flex;flex-wrap: wrap;height: 100%;padding-top: 10px;"
          class="box">
          <el-col :span="8" style="margin: 0;padding:0;height: 100%">
            <el-image :src="images[0]"
              fit="contain"  style="width: 90%;height: 90%"
            ></el-image>
          </el-col>

          <el-col :span="12" :offset="0.5" style="height: 100%">
            <div style="height: 100%">
              <h4 style="margin-top: 0">{{movieData.title}}</h4>

              <el-row style="text-align: left;margin-bottom: 1%;margin-top: -2%">
                <el-col :span="8">
                  <el-row style="margin-bottom: 5%;">
                    <span class="text-font">{{movieData.movieName}}</span>
                  </el-row>
                  <el-row>
                    <span class="text-font">{{movieData.jointTags}}</span>
                  </el-row>
                </el-col>
                <el-col :offset="9" :span="6">
                  <el-rate
                    style="margin-top: 15%"
                    v-model=movieData.score
                    disabled
                    show-text
                    :texts=starTexts
                    :colors=colors
                    text-color="black"
                    score-template="{value}">
                  </el-rate>
                </el-col>

              </el-row>
              <el-row style="text-align: left;padding-top: 0">
                <p class="text-font" style="text-indent: 2em;font-size: 14px;line-height: 1.5">{{movieData.cutContent}}</p>
              </el-row>

            </div>
          </el-col>

          <el-col :span="2" :offset="1" style="padding-top: 2%">
            <el-row style="margin-bottom: 15%;">
              <el-button @click="" icon="el-icon-reading" type="primary" plain size="medium" round>
                查看
              </el-button>
            </el-row>

            <el-row style="margin-bottom: 30%;">
              <el-button @click="" icon="el-icon-remove-outline" type="primary" plain size="medium" round>
                删除
              </el-button>
            </el-row>
            <el-row style="margin-right: -60%">
              <span style="font-family: Arial,serif;text-align: right" >{{movieData.publishTime}}</span>
            </el-row>

          </el-col>
        </el-row>
      </template>

    </el-skeleton>
</template>

<script>
import {MOVIE_STAR_TEXTS} from "../../commom/constant";

export default {
  name: "RectangleMovieShare",
  props:{
    movieData:Object,
    images:Array
  },
  mounted() {
    this.cutContent()
    this.jointTags()
    setTimeout(() => {
      this.loading = false
    },1000)
  },
  data(){
    return{
      loading:true,
      maxContentLength:screen.width>2000?300:120,
      starTexts:MOVIE_STAR_TEXTS,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  methods:{
    cutContent(){
      if(this.movieData.content.length > this.maxContentLength){
        this.movieData.cutContent = "    "+this.movieData.content.substring(0,this.maxContentLength)+"..."
      }else{
        this.movieData.cutContent = "    "+this.movieData.content
      }
    },
    jointTags(){
      let jointTags = ''
      if(this.movieData.tags.length>0){
        for(let tag of this.movieData.tags){
          jointTags += '、'+tag
        }
        jointTags = jointTags.substring(1)
      }
      this.movieData.jointTags = jointTags
    }
  }
}
</script>

<style scoped>
.box {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  /*box-shadow: 2px 2px 4px 2px rgba(94, 94, 94, 0.9)*/
  /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)*/
}
.text-font {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
