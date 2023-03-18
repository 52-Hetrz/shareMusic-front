<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {testUser} from "./apis/user";

export default {
  name: 'App',
  mounted() {
    console.log(sessionStorage)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0 0 0 0;
}
</style>
