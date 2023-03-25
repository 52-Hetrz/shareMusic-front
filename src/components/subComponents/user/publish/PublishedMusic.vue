<template>
  <div>
    我的发布
    <el-button @click="toPublishSubPage">
      发布内容
    </el-button>
  </div>
</template>

<script>
export default {
  name: "PublishedMusic",
  methods:{
    toPublishSubPage(){
      this.$router.push(window.g.routePath.TO_PUBLISH_MUSIC)
    }
  }
}
</script>

<style scoped>

</style>
