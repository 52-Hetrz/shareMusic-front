<template>
  <div style="height: 100%;width: 100%;font-weight: bold;font-size: 1rem">
    <el-row >
      <el-col :span="14">
        <span>Share Music</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="8" :span="14">
        <span>Share Life</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
window.onresize = function (){
  console.log("asdf")
}
export default {
  name: "Title",
}
</script>

<style scoped>

</style>
