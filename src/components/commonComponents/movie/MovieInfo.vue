<template  xmlns="http://www.w3.org/1999/html">
  <div>
    <span>asdfa {{id}}</span>
  </div>
</template>

<script>
export default {
  name: "MovieInfo",
  mounted() {
    this.id = this.$route.query.id
    console.log(this.id)
  },
  data(){
    return{
      id:""
    }
  }
}
</script>

<style scoped>

</style>
