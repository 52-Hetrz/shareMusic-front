<template>
  <div>
    <el-row style="height: 10%">
      <el-col :span="11">
        <el-page-header @back="backToPublishedMovie">
        </el-page-header>
      </el-col>
      <el-col :span="13" style="text-align: left">
        <div style="font-size: 20px;margin-top: 4px">
          发布电影分享
        </div>
      </el-col>
    </el-row>

    <el-row class="main-row-margin">
      <el-form
        style="height: 86%;margin-top: 20px"
        ref="movieForm"
        :model="dataForm"
        label-width="80px"
        label-position="right"
        :rules="rules"
      >
        <el-row>
          <el-col :span="16" style="border-right: 1px solid rgba(141, 198, 6, 0.8)">
            <el-row class="sub-row-margin">
              <el-col :offset=leftFormOffset :span="16">
                <el-form-item label="电影名称" prop="movieName">
                  <el-input v-model="dataForm.movieName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="sub-row-margin">
              <el-col :offset=leftFormOffset :span="16">
                <el-form-item label="标题" prop="title">
                  <el-input v-model="dataForm.title"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row class="sub-row-margin">
              <el-col :offset=leftFormOffset :span="20">
                <el-form-item label="内容" prop="content">
                  <el-input
                    type="textarea"
                    v-model="dataForm.content"
                    rows="10"
                    maxlength="1000"
                    show-word-limit
                    resize="none"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :offset="1" :span="6">
            <el-row class="sub-row-margin">
              <el-form-item label="导演">
                <el-input v-model="dataForm.director"></el-input>
              </el-form-item>
            </el-row>
            <el-row class="sub-row-margin">
              <el-form-item label="主演">
                <el-input v-model="dataForm.leadActor"></el-input>
              </el-form-item>
            </el-row>
            <el-row class="sub-row-margin">
              <el-form-item label="国家/地区">
                <el-input v-model="dataForm.area" placeholder="e.g 欧美 / 大陆 / 香港 / 美国"></el-input>
              </el-form-item>
            </el-row>
            <el-row class="sub-row-margin">
              <el-form-item label="上映时间">
                <el-input v-model="dataForm.releaseTime" placeholder="e.g 2020年 / 二十世纪七十年代"></el-input>
              </el-form-item>
            </el-row>
            <el-row class="sub-row-margin">
              <el-form-item
                label="播放源"
              >
                <el-select
                  v-model="dataForm.sources"
                  multiple
                >
                  <el-option
                    v-for="source in this.sources"
                    :key="source.name"
                    :value="source.label"
                    :label="source.label"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-image
                          :src="require('@/assets/movieSource/'+sourceImages[source.name])"
                          fit="contain"
                          :style="sourceImagesStyle[source.name]"
                        >
                        </el-image>

                      </el-col>
                      <el-col :span="12">
                        <div >{{source.label}}</div>
                      </el-col>
                    </el-row>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="sub-row-margin">
              <el-form-item label="标签">
                <el-tag
                  v-for="tag in dataForm.tags"
                  :key="tag"
                  closable
                  :disable-transitions="false"
                  @close="handleCloseTag(tag)">
                  {{tag}}
                </el-tag>
                <el-autocomplete
                  class="input-new-tag"
                  v-model="inputTag"
                  v-if="inputTagVisible"
                  ref="saveTagInput"
                  size="small"
                  :fetch-suggestions="searchTag"
                  @select="chooseSearchResult"
                  @keyup.enter.native="handleInputTagConfirm"
                >
                </el-autocomplete>
                <el-button v-else v-show="!isTagFull" class="button-new-tag" size="small" @click="handleInputTag">+ New Tag</el-button>
              </el-form-item>
            </el-row>
          </el-col>
        </el-row>

      </el-form>
    </el-row>

    <el-row class="main-row-margin">
      <el-upload
        action="#"
        list-type="picture-card"
        :file-list="this.dataForm.images"
        :on-change="imageListChange"
        :on-remove="handleRemove"
        :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <el-image
            class="el-upload-list__item-thumbnail"
            style="width: 100%;height: 100%"
            :src="file.url" alt=""
            fit="fill"
          ></el-image>
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
      </span>
        </div>
      </el-upload>
      <!--   el-dialog   用于展示放大图-->
      <el-dialog :visible.sync="dialogVisible">
        <el-image :src="dialogImageUrl"></el-image>
      </el-dialog>
    </el-row>
    <el-row class="main-row-margin">
      <el-button @click="submitMovie">发布</el-button>
    </el-row>
  </div>
</template>

<script>
import {allMovieTags, allMovieSources} from "../../../../apis/attached";
import {deepCopy, showTypeMessage} from "../../../../commom/utils";
import {MOVIE_SOURCE_IMAGES, MOVIE_SOURCE_STYLE, TO_PUBLISH_MOVIE} from "../../../../commom/constant";
import {data} from "autoprefixer";
import {publishMovie} from "../../../../apis/movie/user";

export default {
  name: "ToPublishMovie",
  async mounted() {
    await this.updateAllTags()
    await this.updateAllSources()
  },
  data(){
    return{
      tags:[],
      sources:[],
      dataForm:deepCopy(TO_PUBLISH_MOVIE),
      sourceImages:deepCopy(MOVIE_SOURCE_IMAGES),
      sourceImagesStyle:deepCopy(MOVIE_SOURCE_STYLE),
      rules:{
        movieName:{required: true, message: '请填写标题', trigger: 'blur'},
        content:{required: true, message: '请填写内容', trigger: 'blur'},
      },
      leftFormOffset:2,
      inputTagVisible:false,
      inputTag:'',
      isTagFull:false,
      maxTagsSize:5,
      tagKey:0,

      dialogVisible:false,
      dialogImageUrl: '',
      maxImagesLength:6,
    }
  },
  methods:{
    backToPublishedMovie(){
      this.$router.back()
    },
    async updateAllTags(){
      let res = await allMovieTags();
      if(res.code === 200){
        this.tags = res.data
      }else{
        this.tags = []
      }
    },
    async updateAllSources(){
      let res = await allMovieSources();
      if(res.code === 200){
        this.sources = res.data
      }else{
        this.sources = []
      }
    },
    /** 标签相关 */
    handleCloseTag(tag){
      this.dataForm.tags.splice(this.dataForm.tags.indexOf(tag), 1);
      if(this.dataForm.tags.length<this.maxTagsSize){
        this.isTagFull = false
      }
    },
    handleInputTag(){
      this.inputTagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputTagConfirm(){
      let inputValue = this.inputTag;
      if (inputValue) {
        this.dataForm.tags.push(inputValue);
      }
      if(this.dataForm.tags.length >= this.maxTagsSize){
        this.isTagFull = true
      }
      this.inputTagVisible = false;
      this.inputTag = '';
    },
    searchTag(queryString, cb){
      let tags = this.tags;
      let tempResults = queryString ? tags.filter(this.createFilter(queryString)) : tags;
      let results = []
      for(let i in tempResults){
        results.push({
          value:tempResults[i].name
        })
      }
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (tags) => {
        return (tags.name.indexOf(queryString) === 0);
      };
    },
    chooseSearchResult(){
      this.handleInputTagConfirm()
    },
    /** 上传照片 */

    handleRemove(file) {
      let fileList = this.dataForm.images
      for(let i in fileList){
        if(fileList[i] === file){
          fileList.splice(i,1)
          break
        }
      }
      this.dataForm.images = fileList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    imageListChange(file, fileList){
      this.dataForm.images = fileList
      if(this.dataForm.images.length > this.maxImagesLength){
        this.handleRemove(file)
      }
    },
    /** 发布 */
    async submitMovie(){
      let submitModel = {}
      let images = this.dataForm.images
      for(let attr in this.dataForm){
        if(attr !== 'images'){
          submitModel[attr] = this.dataForm[attr]
        }
      }
      let form = new FormData()
      for(let i =0;i<images.length;i++){
        form.append('images',images[i].raw)
      }
      form.append('movie',new Blob([JSON.stringify(submitModel)],{type:'application/json'}))
      let res = await publishMovie(form)
      if(res.code !== 200){
        showTypeMessage(this, res.data,"error")
      }else{
        this.dataForm = deepCopy(TO_PUBLISH_MOVIE)
        showTypeMessage(this, "发布成功","success")
      }
    }
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.main-row-margin {
  margin-top: 1%;
}
.sub-row-margin {
  margin-top: 0.5%;
}
.my-el-upload-list {
  vertical-align: middle;
  display: inline-block;
  width: 70px;
  height: 70px;
  float: left;
  position: relative;
  z-index: 1;
  margin-left: -80px;
  background-color: white;
}

</style>
