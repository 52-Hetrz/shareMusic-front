<template>
  <div>
    <el-row style="width: 100%;padding: 0 10% 0 10%">
      <div>
        <el-carousel :interval="5000" arrow="always" style="background-color: red">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
    <el-row>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "Movie"
}
</script>

<style scoped>

</style>
