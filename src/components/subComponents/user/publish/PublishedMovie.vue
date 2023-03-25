<template>
  <div>
    发布的电影分享
    <el-button @click="toPublish">
      发布电影分享
    </el-button>
  </div>
</template>

<script>
export default {
  name: "PublishedMovie",
  data(){
    return {

    }
  },
  methods:{
    toPublish(){
      this.$router.push(window.g.routePath.TO_PUBLISH_MOVIE)
    }
  }
}
</script>

<style scoped>

</style>
