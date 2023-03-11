import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../components/entry.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry',
      component: Entry
    }
  ]
})


