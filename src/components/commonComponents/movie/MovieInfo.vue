<template  xmlns="http://www.w3.org/1999/html">
  <div style="padding: 10px 7px 0 0;margin: -7px -7px -7px -7px;  background-color: rgba(0, 0, 0, 0.9);height: 100%;overflow-y: auto">
    <el-row id="pictureCard"
      style="position: fixed; top: 0;left: 0;right: 0;z-index: 10;background-color: rgba(0, 0, 0)">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image :src=item
                    style="height: 100%;"
          >
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row style="background-color: rgba(58, 58, 58, 0.8);height: 1000px;min-height: 1000px;"
            :style="unCardPart"
            :key=key
    >
      <el-col  :span="4" style='background-color: rgba(132, 123, 123, 0.13);position: fixed;color:rgba(244, 241, 241, 0.66); left: 0;height: 100%;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;border-radius: 10px'>

          <h1>{{movieInfo.movieName}}</h1>

        <el-row style="text-align: left;padding-left: 12%; font-size: 15px">
          <el-row>
            <span><span style="font-weight: bold;">导演：</span>{{movieInfo.director}}</span>
          </el-row>
          <el-row  style="margin-top: 10px">
            <span><span style="font-weight: bold">主演：</span >{{movieInfo.leadActor}}</span>
          </el-row>
          <el-row  style="margin-top: 10px">
            <span><span style="font-weight: bold">类型：</span>{{movieInfo.jointTags}}</span>
          </el-row>
          <el-row  style="margin-top: 10px">
            <span><span style="font-weight: bold">上映时间：</span>{{movieInfo.releaseTime}}</span>
          </el-row>
          <el-row  style="margin-top: 10px">
            <span><span style="font-weight: bold">地区：</span>{{movieInfo.area}}</span>
          </el-row>
          <el-row  style="margin-top: 10px">
            <span><span style="font-weight: bold">播放源：</span>{{movieInfo.jointSources}}</span>

            <el-row v-for="item in this.movieInfo.source"
                    :key="item">
              <el-col :offset="6" :span="4">
                <el-image
                  :src="require('@/assets/movieSource/'+MOVIE_SOURCE_IMAGES[SOURCE_LABEL_TO_NAME[item]])"
                  fit="contain"
                  :style="MOVIE_SOURCE_STYLE[SOURCE_LABEL_TO_NAME[item]]"
                >
                </el-image>
              </el-col>
              <el-col :span="8" style="margin-top: 7px">
                <div >{{item}}</div>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
      </el-col>
      <el-col :offset="1" :span="18">
        asdfasdf
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getInfo} from "../../../apis/movie/info";
import {jointTags} from "../../../commom/utils";
import {MOVIE_SOURCE_IMAGES, MOVIE_SOURCE_STYLE, SOURCE_LABEL_TO_NAME} from "../../../commom/constant";

export default {
  name: "MovieInfo",
  computed: {
    MOVIE_SOURCE_STYLE() {
      return MOVIE_SOURCE_STYLE
    },
    SOURCE_LABEL_TO_NAME() {
      return SOURCE_LABEL_TO_NAME
    },
    MOVIE_SOURCE_IMAGES() {
      return MOVIE_SOURCE_IMAGES
    }
  },
  async mounted() {
    this.id = this.$route.query.id
    this.unCardPart.marginTop =  document.getElementById("pictureCard").clientHeight+20+"px"
    await this.getMovieInfo()
    if(this.isSuccess){
      this.movieInfo.jointTags = jointTags(this.movieInfo.tags,"、")
      this.movieInfo.processedTitle = this.movieInfo.title===""||this.movieInfo.title===null?"#无标题":this.movieInfo.title
      this.movieInfo.jointSources = jointTags(this.movieInfo.source,"、")
    }
    console.log(this.movieInfo)
    this.key++
  },
  data(){
    return{
      id:"",
      isSuccess:true,
      movieInfo:{},
      images:[],
      cartHeight: {
        height:screen.height/5+"px"
      },
      unCardPart:{
        marginTop: "",
      },
      key:1

    }
  },
  methods:{
    async getMovieInfo(){
      let res = await getInfo(this.id)
      if(res.code === 200){
        this.images = res.data.images
        this.movieInfo = res.data.attr
      }else{
        this.isSuccess = false
      }
    }
  }
}
</script>

<style scoped>
.el-carousel__ite{
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: rgba(0, 0, 0, 0);*/
/*}*/

/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: rgba(0, 0, 0, 0);*/
/*}*/
</style>
