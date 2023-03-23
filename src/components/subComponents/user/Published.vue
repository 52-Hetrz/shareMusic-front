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
  name: "Published",
  methods:{
    toPublishSubPage(){
      this.$router.push('/main/'+window.g.routePath.TO_PUBLISH)
    }
  }
}
</script>

<style scoped>

</style>
