<template>
  <div style="height: 100%;width: 100%;font-weight: bold;font-size: 1rem;">
    <el-row >
      <el-col :span="14">
        <div class="title1-color">Share Music</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="8" :span="14">
        <div class="title2-color">Share Life</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Title",
}
</script>

<style scoped>
  .title1-color {
    background-image: linear-gradient(to right, rgba(118, 220, 59, 0.8), rgba(49, 126, 5, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title2-color {
    background-image: linear-gradient(to right, rgba(49, 126, 5, 0.8), rgba(7, 132, 249, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
