<template style="height: 100%">
  <div style="height: 100%;overflow: auto" id="publishedMovie">
    <template>
      <el-backtop target="#publishedMovie" :visibility-height="400" :bottom="70"></el-backtop>
    </template>
    <el-row style="height: 5%;text-align: right;padding-right: 20px;margin-bottom: 8px">
      <el-button @click="toPublish" icon="el-icon-circle-plus-outline" type="success" main round style="font-size: 15px">
        发布电影分享
      </el-button>
    </el-row>

    <el-row class="rectangle-box"
            v-infinite-scroll="loadData"
            infinite-scroll-disabled="scrollDisabled"
            v-for="data of dataList"
              :key="data.attr.id"
    >
      <rectangle-movie style="height: 100%" :movie-data="data.attr" :images="data.images">

      </rectangle-movie>
    </el-row>
    <el-row style="height: 5%" v-loading="loadingDataList">
      <p v-if="noMoreData">没有更多了</p>
    </el-row>


  </div>
</template>

<script>
import rectangleMovieShare from "../../../commonComponents/movie/RectangleMovieShare.vue";
import {getPublishedMovie} from "../../../../apis/movie/user";
import {RESULT_CODE} from "../../../../commom/constant";
import {showTypeMessage} from "../../../../commom/utils";
export default {
  name: "PublishedMovie",
  async mounted() {
    console.log(screen.width,screen.height)
    await this.loadData()
  },
  data(){
    return {
      dataList:[],
      count:0,
      perSize:3,
      loadingDataList:false,
      noMoreData:false,
    }
  },
  computed:{
      scrollDisabled(){
        return this.loadingDataList || this.noMoreData
      }
  },
  components:{
    rectangleMovie:rectangleMovieShare
  },
  methods:{
    toPublish(){
      this.$router.push(window.g.routePath.TO_PUBLISH_MOVIE)
    },
    async loadData(){
      this.loadingDataList = true
      let res = await getPublishedMovie(this.count, this.perSize)
      if(res.code === 200){
        for(let data of res.data){
          this.dataList.push(data)
          this.count++
        }
      }else if(res.code === RESULT_CODE.NO_MORE_PUBLISHED_MOVIE){
        if(res.data!==null && res.data.size() > 0){
          for(let data of res.data){
            this.dataList.push(data)
            this.count++
          }
        }
        this.noMoreData = true
      } else{
        showTypeMessage(this,res.message, "error")
      }
      this.loadingDataList = false
      // setTimeout(() => {
      //   this.dataList.push({key: this.count++})
      //   this.dataList.push({key: this.count++})
      //   this.dataList.push({key: this.count++})
      //   this.loadingDataList = false
      //   if(this.count >= 9){
      //     this.noMoreData = true
      //   }
      // },2000)

    },
  }
}
</script>

<style scoped>
.rectangle-box {
  height: 28%;
  margin-bottom:25px;
  max-height: 28%;
}
</style>
