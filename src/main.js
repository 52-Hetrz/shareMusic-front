// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HelloWorld from "./components/HelloWorld.vue";
import router from './router'
import MyPage from "./components/MyPage.vue";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})

export const globalUrl = {
    javaServerUrl:"http://localhost:8888",
}

